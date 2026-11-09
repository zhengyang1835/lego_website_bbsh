#!/usr/bin/env python3
"""Fetch Bilibili covers for static video links, then build responsive image variants.
Requires Python 3.9+, Pillow, curl, and network access. Run from any directory.
"""
import html
import io
import json
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlparse
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets/picture/video-covers'
PATTERN = re.compile(r'<a\b[^>]*data-video-src="[^"]+"[^>]*>.*?</a>', re.S)
pages = {p: p.read_text() for p in ROOT.glob('*.html')}
ids = sorted({re.search(r'bvid=(BV[0-9A-Za-z]+)', m.group()).group(1)
              for text in pages.values() for m in PATTERN.finditer(text)})
OUT.mkdir(parents=True, exist_ok=True)
manifest_path = OUT / 'manifest.json'
manifest = json.loads(manifest_path.read_text()) if manifest_path.exists() else {}

def get(url):
    # curl uses the same public endpoint without browser-session cookies.
    return subprocess.run(['curl', '--fail', '--silent', '--show-error', '--location',
                           '--max-time', '30', url], check=True, capture_output=True).stdout

failures = []
for bvid in ids:
    try:
        response = json.loads(get('https://api.bilibili.com/x/web-interface/view?bvid=' + bvid))
        if response.get('code') != 0:
            raise ValueError('Bilibili API error: ' + str(response.get('code')))
        data = response['data']
        url = data['pic'].replace('http://', 'https://', 1)
        host = urlparse(url).hostname or ''
        if not host.endswith('.hdslb.com'):
            raise ValueError('Unexpected cover host')
        raw = get(url)
        with Image.open(io.BytesIO(raw)) as im:
            im.load()
            image = im.convert('RGB')
            # Normalize to JPEG for the existing responsive image generator.
            target = OUT / (bvid + '.jpg')
            temporary = target.with_suffix('.tmp')
            image.save(temporary, format='JPEG', quality=95)
            temporary.replace(target)
        manifest[bvid] = {'title': data['title'], 'source_url': url,
                          'fetched_at': datetime.now(timezone.utc).isoformat()}
        print('Fetched', bvid)
    except Exception as exc:
        failures.append(bvid)
        print('Keeping existing cover if available for %s: %s' % (bvid, exc), file=sys.stderr)

for path, text in pages.items():
    def update(match):
        anchor = match.group()
        bvid = re.search(r'bvid=(BV[0-9A-Za-z]+)', anchor).group(1)
        source = 'assets/picture/video-covers/' + bvid + '.jpg'
        if not (ROOT / source).exists():
            return anchor
        anchor = re.sub(r'<img\b[^>]*>', '', anchor)
        title = manifest.get(bvid, {}).get('title')
        if title:
            anchor = re.sub(r'data-video-title="[^"]*"', lambda m: 'data-video-title="' + html.escape(title, quote=True) + '"', anchor)
        end = anchor.index('>') + 1
        return anchor[:end] + '<img class="video-cover" src="' + source + '" alt="">' + anchor[end:]
    updated = PATTERN.sub(update, text)
    def update_title(match):
        title = manifest.get(match.group(2), {}).get('title')
        return match.group(1) + html.escape(title) + match.group(3) if title else match.group(0)
    updated = re.sub(r'(<h3[^>]*data-bilibili-title="(BV[0-9A-Za-z]+)"[^>]*>).*?(</h3>)',
                     update_title, updated, flags=re.S)
    if updated != text:
        path.write_text(updated)
manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
subprocess.run([sys.executable, str(ROOT / 'scripts/optimize_images.py')], check=True)
if failures:
    sys.exit('Some covers could not be refreshed: ' + ', '.join(failures))

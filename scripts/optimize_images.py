#!/usr/bin/env python3
"""Generate responsive WebP assets and update static pages. Requires Pillow."""
import hashlib
import json
import re
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets' / 'optimized'
OUT.mkdir(exist_ok=True)
manifest = {}

def variants(source):
    if source in manifest:
        return manifest[source]
    with Image.open(ROOT / source) as original:
        im = ImageOps.exif_transpose(original).convert('RGB')
        w, h = im.size
        # Preserve fine text in scanned documents and high-density full-width images.
        widths = sorted(set(min(w, size) for size in (480, 960, 1600, 2400)))
        key = hashlib.sha256(source.encode()).hexdigest()[:12]
        files = []
        for width in widths:
            path = OUT / ('%s-%s.webp' % (key, width))
            resized = im.resize((width, round(h * width / w)), Image.Resampling.LANCZOS)
            resized.save(path, 'WEBP', quality=88 if 'knowledge-blog' in source else 84, method=6)
            files.append({'width': width, 'path': path.relative_to(ROOT).as_posix(), 'bytes': path.stat().st_size})
        manifest[source] = {'width': w, 'height': h, 'original_bytes': (ROOT / source).stat().st_size, 'variants': files}
    return manifest[source]

def attr(tag, name):
    match = re.search(r'\b' + name + r'="([^"]*)"', tag)
    return match.group(1) if match else None

def image_tag(match, page):
    tag = match.group()
    source = attr(tag, 'data-original-src') or attr(tag, 'src')
    if not source or source.startswith(('http', 'data:')):
        return tag
    item = variants(source)
    sizes = '(max-width: 760px) calc(100vw - 36px), 600px'
    if 'video-covers/' in source: sizes = '(max-width: 1000px) calc(100vw - 36px), 980px' if page == 'gallery-videos.html' else '(max-width: 760px) calc(100vw - 88px), 620px'
    elif page == 'biography.html': sizes = '(max-width: 760px) calc(100vw - 36px), 540px' if 'bbsh-identity' not in source else '(max-width: 760px) 220px, 240px'
    elif page == 'works.html': sizes = '(max-width: 760px) 40vw, 180px'
    elif 'poster-previews' in source or page == 'gallery-posters.html': sizes = '(max-width: 760px) calc(100vw - 36px), 400px'
    elif page == 'index.html': sizes = '(max-width: 760px) 45vw, 280px'
    elif page == 'blog-ninjago-early-materials.html': sizes = '(max-width: 1000px) calc(100vw - 36px), 980px'
    elif page in ('materials.html', 'store.html'): sizes = '(max-width: 760px) calc(100vw - 36px), 400px'
    for name in ('src', 'srcset', 'sizes', 'width', 'height', 'loading', 'decoding', 'data-original-src'):
        tag = re.sub(r'\s+' + name + r'="[^"]*"', '', tag)
    fallback = min(item['variants'], key=lambda x: abs(x['width'] - 960))['path']
    srcset = ', '.join('%s %sw' % (v['path'], v['width']) for v in item['variants'])
    # Images are all after page heroes; native lazy loading still fetches nearby images.
    return tag[:-1] + (' src="%s" srcset="%s" sizes="%s" width="%s" height="%s" loading="lazy" decoding="async" data-original-src="%s">' % (fallback, srcset, sizes, item['width'], item['height'], source))

# Keep the original background URL in a custom property for repeatable regeneration.
for page in ROOT.glob('*.html'):
    content = page.read_text()
    content = re.sub(r'<img\b[^>]*>', lambda m: image_tag(m, page.name), content)
    def background(match):
        source = match.group(1).removeprefix('../../')
        item = variants(source)
        small = min(item['variants'], key=lambda x: abs(x['width'] - 960))['path']
        large = min(item['variants'], key=lambda x: abs(x['width'] - 2400))['path']
        return "var(--responsive-page-image, url('%s')); --page-bg-mobile-image: url('%s'); --page-bg-desktop-image: url('%s')" % (match.group(1), '../optimized/' + Path(small).name, '../optimized/' + Path(large).name)
    # Original URL stays as fallback; responsive CSS replaces only the image layer.
    content = re.sub(r"(?:var\(--responsive-page-image, )?url\('([^']+)'\)\)?(?:; --page-bg-mobile-image: url\('[^']+'\); --page-bg-desktop-image: url\('[^']+'\))?", background, content)
    content = re.sub(r'assets/css/styles.css\?v=[^"\s]+', 'assets/css/styles.css?v=20261111-mobile-audit', content)
    content = re.sub(r'assets/js/main.js\?v=[^"\s]+', 'assets/js/main.js?v=20261111-mobile-audit', content)
    page.write_text(content)

# Shared decorative background in CSS (preserve existing gradient and composition).
css_path = ROOT / 'assets/css/styles.css'
css = css_path.read_text()
source = 'posters/e93770c95236aa9a05359f2e2083f7ed.jpg'
item = variants(source)
variant = min(item['variants'], key=lambda x: abs(x['width'] - 1600))['path']
css = css.replace('url("../../%s")' % source, 'url("../optimized/%s")' % Path(variant).name)
css_path.write_text(css)
(OUT / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
print('Generated %s variants from %s originals.' % (sum(len(x['variants']) for x in manifest.values()), len(manifest)))

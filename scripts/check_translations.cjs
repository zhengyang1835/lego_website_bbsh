// Run with: node scripts/check_translations.cjs
// Checks every static page, including metadata and accessible/dynamic video titles.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'assets/js/main.js'), 'utf8');
const translations = vm.runInNewContext(source.split('\nfunction getLang()')[0] + '\ntranslations;');
assert.deepEqual(Object.keys(translations.zh).sort(), Object.keys(translations.en).sort());
let references = 0;
for (const name of fs.readdirSync(root).filter(name => name.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(root, name), 'utf8');
  for (const match of html.matchAll(/\bdata-i18n(?:-[\w-]+)?="([^"]+)"/g)) {
    for (const lang of ['zh', 'en']) assert.ok(translations[lang][match[1]], `${name}: missing ${lang}.${match[1]}`);
    references++;
  }
  for (const match of html.matchAll(/<([\w-]+)\b([^<>]*)>([^<>]*[\u4e00-\u9fff][^<>]*)<\/\1>/g)) {
    assert.match(match[2], /data-i18n=/, `${name}: untranslated text ${match[3]}`);
  }
  for (const match of html.matchAll(/<[^!][^>]+>/g)) {
    for (const attr of match[0].matchAll(/(?<![\w-])(alt|aria-label|content|data-video-title)="([^"]*[\u4e00-\u9fff][^"]*)"/g)) {
      assert.ok(match[0].includes(`data-i18n-${attr[1]}=`), `${name}: untranslated ${attr[1]}`);
    }
  }
}
assert.equal(translations.en.carouselLead, 'Discover our featured series.');
assert.match(translations.en.ninja1Title, /Four Weapons Blacksmith 15th Anniversary/);
assert.match(translations.en.ninja2Title, /Ninja Character Display 15th Anniversary/);
assert.match(translations.en.umarakVideoTitle, /BIONICLE Umarak the Destroyer/);
assert.match(translations.en.figureDetails1, /NRG Zane/);
console.log(`PASS: ${Object.keys(translations.en).length} paired keys; ${references} translation references; no untagged Chinese page text or accessible attributes.`);

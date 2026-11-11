# English translation audit — 11 November 2026

Reviewed all 17 HTML pages and all 134 existing bilingual dictionary entries. Revised 51 existing English entries and added 82 paired entries for previously untranslated content, page titles, metadata, captions, alt text, navigation labels, and video player titles. Chinese remains the default language.

The homepage invitation now reads **“Discover our featured series.”** The duplicated Chinese fallback was also corrected. Series titles are consistent across navigation, galleries, biography, and work pages. Original handles, IDs, prices, dates, and author viewpoints remain source content; this audit does not independently verify their factual claims or update historical prices.

## Terminology references

- 幻影忍者 → **NINJAGO**; 四武器铁匠铺 71858 → **Four Weapons Blacksmith 15th Anniversary**; 道场展示台 71866 → **Ninja Character Display 15th Anniversary**. [Official LEGO January 2026 catalogue](https://www.lego.com/cdn/cs/set/assets/blt05cb7db3c24276c3/LEGO_Retail_US_Jan_2026.pdf)
- 最大潜力赞 / NRG潜力赞 → **NRG Zane**, with a full-potential explanation. [Official set 9590 instructions](https://www.lego.com/en-gb/service/building-instructions/9590)
- 生化战士 → **BIONICLE**; 巫马卡 71316 → **Umarak the Destroyer**. [Official set 71316 page](https://www.lego.com/en-us/product/umarak-the-destroyer-71316)
- **LEGO MINDSTORMS**, **LEGO Education**, and **LEGO SMART Play** retain their branded English names. [LEGO MINDSTORMS catalogue](https://www.lego.com/cdn/cs/set/assets/blt5cbf86d94acbe4b0/2020LateHolidayUS.pdf), [LEGO SMART Play](https://www.lego.com/en-us/smart-play)
- 人仔 → **minifigure**; 套装 → **set**; 颗粒/零件 → **bricks/pieces** according to context; MOC → **original build/creation**, retaining MOC where appropriate.
- 半北山河 retains the established English identity **Banbei Shanhe**. Creative series and era names are editorial translations, not official LEGO theme names.

## Coverage and maintenance

The article body, review specifications, merchandise descriptions, and gallery/video titles now switch language. Selecting an era and then changing language retains and translates the selected description. Loaded video iframe titles and contact-form configuration messages also update on language changes. Media, scans, embedded videos, third-party UI, and visitors’ own text are not translated by the site dictionary; Chinese contributor handles are deliberately preserved.

Run `node scripts/check_translations.cjs` to check dictionary parity, page references, untranslated Chinese text/attributes, and key LEGO names. Keep new interface text and attributes connected to paired dictionary entries. Asset regeneration preserves the updated CSS/JS cache versions.

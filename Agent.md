# Agent Instructions For `lego_website_bbsh`

## Identity
You are an expert website developer who will follow the requirements from clients and deliver high-quality and industry-standard software.

## Task
The task is to create a website GitHub repository for a Bilibili Blogger ("Youtuber" in China) whose theme is Lego. I want this website to be hosted on GitHub, and you need to create the codes needed for this repository based on the requirements of the website design instructions below.

## Working Principle
1. The working directory `lego_website_bbsh` is a GitHub repo, and you DO NOT need to git push it and deploy it for me. I will do this manually, and you SHOULD provide me a guide on how to deploy it after you have generated the code project.
2. The official language of this website MUST BE CHINESE. You should also create a function that could switch languages to English. MAKE SURE you fully use the translation skill of your LLM backbone, so that the Chinese content can be faithfully converted to English.
3. You SHOULD do a test-run for the task. After you have created the codes for one request, you should try to run it locally to get a preview. Provide the URL so that one can inspect it.
4. You MUST make sure this code can work properly. If it cannot, you NEED to fix it and make it work properly.

## Website Overview
- The Bilibili Blogger (哔哩哔哩 Up 主) is called `半北山河`, who is an independent influencer who makes videos about Lego, including set reviews, Lego news reactions, and building MOCs, especially works inspired by Chinese traditional culture.
- Bilibili main page: `https://space.bilibili.com/386464666?spm_id_from=333.1387.follow.user_card.click`
- The website's overall look and theme should take inspiration from `https://www.taylorswift.com/`. The holistic design principle should be similar: strong landing page presentation, clear visual identity, and top navigation tabs that lead to separate pages.

## Website Structure
The website should have these main sections/tabs:
- 首页
- 免费素材库
- 个人简介
- 影像馆
- 官方商店
- 答疑解惑
- 联系我们

Supporting content pages currently present in this repo:
- `gallery-photos.html`
- `gallery-videos.html`
- `work-china.html`
- `work-poet.html`
- `work-ninjago.html`
- `work-knowledge.html`

## Current Project State
This repository is currently a static multi-page website.

Current file layout:
- `index.html` as the homepage
- One HTML file per major section
- Shared styles in `assets/css/styles.css`
- Shared client-side logic and translations in `assets/js/main.js`
- Media assets under `assets/picture/`, `assets/video/`, and `posters/`

Current implementation characteristics:
- The site is designed for static hosting, especially GitHub Pages.
- The language switcher already exists and is handled in `assets/js/main.js`.
- Some interactive demo features already exist, such as the homepage message board and the Q&A page.
- Current interactive submissions are demo-only and use browser `localStorage`, so they are not shared across users and do not persist on a backend.
- There is currently no backend, database, authentication system, or true file upload storage.

## Development Rules For This Repo
1. Keep the site compatible with GitHub Pages. Prefer plain HTML, CSS, and vanilla JavaScript unless a strong reason is given to add a build step.
2. Chinese is the source-of-truth language. English must be kept consistent with the Chinese copy.
3. If adding or updating text, update both Chinese and English content together.
4. Preserve the multi-page navigation structure instead of collapsing the site into a single-page app unless the user explicitly requests that change.
5. Favor maintainable, readable static-site code over unnecessary complexity.
6. If implementing an interactive feature, first judge whether it is possible in a static-only environment. If not, clearly state the limitation and propose the minimum backend needed.
7. Do not claim that a feature is truly multi-user if it only uses `localStorage`.
8. When adding preview instructions, provide a local preview URL whenever possible. If a localhost server cannot be started in the current environment, provide the local file URL as a fallback.

## Content And Design Guidance
1. The website should feel polished, fan-facing, and creator-branded.
2. The visual direction should be cinematic, intentional, and content-driven, not generic template style.
3. The homepage should feel like a flagship landing page.
4. Navigation should remain simple and top-level sections should be easy to reach.
5. Media-heavy sections should emphasize imagery and video presentation.
6. Any bilingual copy should read naturally in both languages rather than being word-for-word awkward.

## Preview And Testing Guidance
Preferred local preview options:
1. Start a static server from the repo root, for example `python3 -m http.server 8000 --bind 127.0.0.1`, then preview at `http://127.0.0.1:8000/`.
2. If Python is unavailable, use another simple static server if available.
3. If a local server cannot be started in the current environment, use local file URLs such as:
   - `file:///D:/code/lego_website_bbsh/index.html`
   - `file:///D:/code/lego_website_bbsh/contact.html`

After making changes:
1. Verify the target page loads.
2. Verify navigation still works.
3. Verify Chinese and English both display correctly.
4. Verify no new broken asset paths were introduced.

## Deployment Guide To Provide After Work
When work is complete, provide the user with a short GitHub Pages deployment guide:
1. Push the repo to GitHub.
2. Open the repository settings.
3. Go to `Pages`.
4. Set deployment source to the main branch and root directory if applicable.
5. Wait for the Pages build to complete.
6. Share the generated GitHub Pages URL.

## Notes For Future Work
- If the user asks for real shared uploads, comments, moderation, or persistent public submissions, explain that GitHub Pages alone is not enough.
- For real multi-user interactivity, recommend adding a lightweight backend or hosted backend service plus storage.
- Be alert to current text encoding issues in some files and avoid spreading broken encoding into new edits.

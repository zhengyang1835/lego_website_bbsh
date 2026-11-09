# 半北山河乐高主题网站

这是一个为 Bilibili 乐高创作者「半北山河」制作的静态展示网站。网站以中文为默认语言，并提供英文切换，适合直接发布到 GitHub Pages 后邀请朋友预览。

## 开发约定

项目定位、设计与双语规范、交互边界及图片分辨率协议见 [AGENTS.md](AGENTS.md)。

## 在线预览

发布到 GitHub Pages 后，访问地址通常是：

```text
https://你的用户名.github.io/lego_website_bbsh/
```

如果你修改了仓库名，链接中的 `lego_website_bbsh` 也要相应替换。

## 页面内容

- 首页：循环视频首屏、留言板、精选栏目滚动条、众时代互动档案
- 免费素材库：MOC 灵感清单、评测记录表、视频分镜模板
- 个人简介：半北山河的创作方向与内容风格介绍
- 影像馆：照片展区与 Bilibili 视频嵌入
- 官方商店：商品展示、淘宝/闲鱼入口预留、答疑入口
- 答疑解惑：前三次免费提问，之后显示 ￥10 / 次提示
- 联系我们：Bilibili 私信、商务联系、粉丝共创说明

## GitHub Pages 发布步骤

1. 将本仓库推送到 GitHub。
2. 打开仓库页面，进入 `Settings`。
3. 在左侧找到 `Pages`。
4. `Build and deployment` 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 构建完成。
7. 将生成的 Pages 链接发给朋友即可预览。

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

然后在本机浏览器打开：

```text
http://127.0.0.1:8000/
```

`127.0.0.1` 只代表你自己的电脑，朋友无法通过这个地址访问。给朋友看请使用 GitHub Pages 链接。

## 替换素材

当前图片来自 `posters/`，首页背景视频来自 `assets/video/`。

1. 新图片放入 `posters/`。
2. 新视频放入 `assets/video/`。
3. 首页视频在 `index.html` 的 `<video class="hero-bg-video">` 内替换。
4. 其他图片在对应 HTML 文件里替换 `src="posters/文件名.jpg"` 或页面首屏的 `url('../../posters/文件名.jpg')`。

## 公开仓库说明

本项目是纯静态网站，不包含后端服务、数据库、真实支付系统或用户上传存储。首页讨论通过 Giscus 接入 GitHub Discussions；联系表单通过 Formspree 提交。答疑区使用浏览器 `localStorage` 保存演示数据，只存在访问者自己的浏览器里，不会上传到服务器。

如果后续要做图片上传、真实付费问答或专用后台审核，需要另行实现对应的后端或第三方服务。

## 图片优化与更新

网页使用 `assets/optimized/` 中的 WebP 派生图片；原始图片和 PDF 保持不变。每张图片最多生成 480、960、1600、2400 像素宽的版本（不放大原图），浏览器通过 `srcset` 和 `sizes` 选择尺寸。扫描资料使用较高编码质量，以保留文字细节。页面下方图片按需加载，页头背景根据屏幕宽度选择版本。

更新原图后，使用 Python 3.9+ 和 Pillow 重新生成：

```bash
python3 -m pip install Pillow
python3 scripts/optimize_images.py
```

新增图片时，在 HTML 中使用原图路径作为 `src`，再运行脚本。已经优化的图片通过 `data-original-src` 记录原图路径；替换图片时也要更新该属性。提交 HTML、CSS 和生成的 `assets/optimized/` 文件即可，GitHub Pages 不需要运行 Python。`manifest.json` 记录尺寸和文件大小。新增布局若与现有布局不同，应在脚本中调整 `sizes`。

Bilibili 视频显示播放入口，点击后才加载播放器；禁用 JavaScript 时入口仍可直接打开 Bilibili。首页背景视频未改动。

## 暂时隐藏的作品

`work-poet.html`（黑袍诗人的黑袍诗）保留内容和原链接，但暂不显示在首页及作品索引。第二个展示位置现为 `work-minifigures.html`（人仔档案馆）；恢复时需同步更新这两个入口。

## Bilibili 视频封面

视频卡片显示 Bilibili 的真实封面，点击后才创建播放器。封面保存为本地图片并生成响应式 WebP，访客无需请求 Bilibili API 或依赖其图片跨站访问策略。

新增视频或更新 Bilibili 封面后，运行（Python 3.9+、Pillow、curl、网络连接）：

```bash
python3 scripts/refresh_video_covers.py
```

脚本自动扫描所有 HTML 的 `data-video-src`，按 BV 号获取官方封面，更新卡片并调用图片优化脚本。同一视频只下载一次；刷新失败时保留已有封面。封面来源及获取时间记录在 `assets/picture/video-covers/manifest.json`。提交生成的图片和 HTML 后即可发布。封面是刷新时的快照，不会在访客每次打开页面时调用 API。

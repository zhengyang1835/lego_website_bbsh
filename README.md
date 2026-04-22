# 半北山河乐高主题网站

这是一个为 Bilibili 乐高创作者「半北山河」制作的静态展示网站。网站以中文为默认语言，并提供英文切换，适合直接发布到 GitHub Pages 后邀请朋友预览。

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

本项目是纯静态网站，不包含后端服务、数据库、真实支付系统或用户上传存储。留言板和答疑区使用浏览器 `localStorage` 保存演示数据，只存在访问者自己的浏览器里，不会上传到服务器。

如果后续要做真实多人留言、图片上传、付费问答和后台审核，需要接入后端服务或第三方表单/数据库。

# 半北山河乐高主题网站

这是一个为 Bilibili 乐高创作者「半北山河」制作的静态官方网站，可直接部署到 GitHub Pages。

## 页面结构

- `index.html`：首页、沉浸式首屏、留言板、精选栏目滚动条、众时代互动档案
- `materials.html`：免费素材库
- `biography.html`：个人简介
- `gallery.html`：照片展区与 Bilibili 视频嵌入
- `store.html`：官方商店与 Q&A 入口
- `qa.html`：答疑解惑，前三次免费，之后显示 ￥10 / 次提示
- `contact.html`：联系我们 / 加入我们

## 本地预览

在仓库根目录运行：

```bash
python3 -m http.server 8000
```

然后打开：

```text
http://localhost:8000/
```

## GitHub Pages 部署

1. 将本仓库提交到 GitHub。
2. 打开仓库页面，进入 `Settings`。
3. 在左侧找到 `Pages`。
4. `Build and deployment` 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待 GitHub Pages 构建完成。
7. GitHub 会给出访问链接，通常格式为：

```text
https://你的用户名.github.io/仓库名/
```

## 替换素材

当前图片来自 `posters/`。如果要替换首页背景、商店截图或栏目图：

1. 将新图片放入 `posters/`。
2. 在对应 HTML 文件里替换 `src="posters/文件名.jpg"` 或页面首屏的 `url('posters/文件名.jpg')`。

## 说明

留言板和答疑区使用浏览器 `localStorage` 保存演示数据，不会上传到服务器。若需要真实多人留言、图片上传、支付和后台审核，需要接入后端服务或第三方表单/数据库。

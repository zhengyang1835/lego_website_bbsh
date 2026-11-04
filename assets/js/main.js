const translations = {
  zh: {
    brand: "半北山河",
    navHome: "首页",
    navMaterials: "免费素材库",
    navBio: "个人简介",
    navWorks: "我们的作品",
    navGallery: "影像馆",
    navPhotos: "精选照片",
    navVideos: "视频作品",
    navStore: "官方商店",
    navQA: "答疑解惑",
    navContact: "联系我们",
    langButton: "EN",
    heroTitle: "半北山河",
    heroCopy: "自强不息，创新不止，以积木绘就山河，用视频讲好故事。",
    heroPrimary: "进入影像馆",
    heroSecondary: "加入我们",
    shareTitle: "分享点什么？",
    shareLead: "留下你的搭建想法、投稿线索，或与其他同好聊聊。留言由 GitHub Discussions 提供支持。",
    discussionTitle: "同好留言席",
    discussionIdentity: "登录 GitHub 后即可发布留言；你的 GitHub 用户名与头像会显示在留言旁。",
    carouselTitle: "我们的作品",
    carouselLead: "精品系列邀你来品鉴",
    worksIndexLead: "四个创作方向，记录半北山河如何用积木、影像与知识展开自己的乐高世界。",
    viewWork: "查看作品",
    story1: "用乐高讲好中国故事",
    story2: "黑袍诗人的黑袍诗",
    story3: "幻影忍者评测",
    story4: "你不知道的乐高知识",
    work1Lead: "以中国传统文化为灵感，将楼阁、山河、灯会与市井故事转译成乐高语言。",
    work1Body: "这个系列关注“积木如何讲故事”。从建筑比例、色彩秩序到人物调度，作品会把传统意象拆成可拼搭的结构，再用视频呈现它们从构想到成型的过程。",
    work2Lead: "黑袍诗人的暗色篇章，用更具文学感和镜头感的方式书写乐高作品。",
    work2Body: "黑袍诗人的黑袍诗偏向氛围、叙事和影像实验。它不只展示一件模型，也尝试让光影、旁白与场景共同形成一首关于颗粒的短诗。",
    work3Lead: "围绕幻影忍者系列的套装评测、角色整理、机甲结构和收藏建议。",
    work3Body: "这个栏目适合系列粉丝和新玩家快速进入主题。内容会关注可玩性、展示性、零件价值、角色配置，以及套装在幻影忍者世界观中的位置。",
    work4Lead: "轻量但有用的乐高知识博客，分享经典乐高套装、设计细节和收藏经验。",
    work4Body: "从玩具套装历史、拼搭技巧到系列冷知识，这个栏目像一组随手可查的乐高笔记，给观众更多的玩乐知识。",
    knowledgeBlogTitle: "乐高知识博客",
    knowledgeBlogLabel: "博客说明",
    knowledgeBlogStatus: "持续更新",
    knowledgePostTitle: "经典套装、设计与收藏",
    knowledgePostText: "这里将持续更新乐高套装故事、拼搭观察、设计细节与收藏笔记。",
    blogReadArticle: "阅读文章并参与讨论",
    blogDiscussionTitle: "文章讨论",
    blogDiscussionText: "登录 GitHub 后即可评论。",
    archiveTitle: "众时代",
    archiveLead: "五个阶段像档案一样展开。点击任意篇章，查看它在半北山河内容宇宙中的位置。",
    eraDefault: "选择一个时代，查看它的主题说明。",
    eraDoor: "门内",
    eraDoorText: "门内：从第一次面对镜头开始，关注入门套装、基础拼搭、收藏方法与新人避坑。",
    eraBloom: "花繁",
    eraBloomText: "花繁：MOC 主题开始生长，东方庭院、灯会、楼阁与市井被一点点放进砖块世界。",
    eraStars: "星外",
    eraStarsText: "星外：面向更大的乐高宇宙，追踪新品新闻、海外趋势与粉丝文化。",
    eraRenaissance: "文艺复兴",
    eraRenaissanceText: "文艺复兴：复盘经典系列，重新理解设计语言、结构美学与收藏价值。",
    eraNight: "永夜",
    eraNightText: "永夜：黑袍诗人的暗色篇章，偏向叙事、影像实验和更具氛围感的作品。",
    materialsTitle: "免费素材库",
    materialsLead: "这里整理适合粉丝、MOC 玩家和视频创作者使用的公开素材模板。下载功能可按需要接入网盘链接。",
    mat1Title: "中式 MOC 灵感清单",
    mat1Text: "斗拱、牌楼、窗棂、灯笼与院墙比例参考，适合开始一组传统建筑草图。",
    mat2Title: "评测记录表",
    mat2Text: "从颗粒质量、拼搭体验、可动性、展示性和价格五个维度记录套装体验。",
    mat3Title: "视频分镜模板",
    mat3Text: "开场钩子、细节扫拍、结构拆解、结尾观点，帮助创作者更稳定地输出。",
    bioTitle: "个人简介",
    bioLead: "半北山河是一位专注乐高内容的独立 Bilibili 创作者。",
    bioP1: "半北山河长期围绕乐高展开创作，内容覆盖套装评测、乐高新闻反应、系列考据和 MOC 搭建复盘。他的频道气质兼具玩家的细致与讲述者的克制：不只告诉观众一盒套装“值不值”，也会解释它为什么被这样设计。",
    bioP2: "在 MOC 方向，半北山河尤其偏爱中国传统文化题材。他会把楼阁、牌坊、灯会、山水意象与人物故事拆解成可搭建的结构，再用镜头展示从构思到成品的过程。",
    bioP3: "这个网站是他的内容索引、粉丝留言区和周边入口。它希望像一个黑色展厅：安静、正式，但每一束光都照向颗粒上的细节。",
    galleryTitle: "影像馆",
    galleryLead: "照片展示主要项目、视频和 MOC 搭建；视频区嵌入 Bilibili 播放器，便于集中观看。",
    photosTitle: "照片展区",
    photoGalleryLead: "从经典套装到摄影作品与怀旧海报，按主题浏览半北山河的乐高影像收藏。",
    classicSetsTitle: "经典套装",
    photographyTitle: "摄影作品",
    nostalgicPostersTitle: "怀旧海报",
    videosTitle: "Bilibili 视频",
    video1: "半北山河精选视频 01",
    video2: "半北山河精选视频 02",
    video3: "半北山河精选视频 03",
    video4: "半北山河精选视频 04",
    storeTitle: "官方商店",
    storeLead: "这里预留淘宝、闲鱼与官方周边入口。商品图可继续替换为你指定的截图素材。",
    taobao: "淘宝店铺",
    xianyu: "闲鱼入口",
    product1: "黑袍诗人纪念立牌",
    product2: "中式 MOC 明信片套组",
    product3: "半北山河颗粒徽章",
    qaTitle: "答疑解惑",
    qaLead: "你可以提交文字与图片问题。每位浏览器用户前三次免费，超过后按 ￥10 / 次展示付费提示。",
    remaining: "剩余免费次数",
    questionText: "你的问题",
    questionUpload: "上传问题图片",
    submitQuestion: "提交问题",
    paidContinue: "已支付 ￥10，继续提问",
    paymentText: "免费次数已用完。请完成 ￥10 / 次付费后继续提交；当前演示站提供确认按钮，正式上线可接入收款二维码或支付链接。",
    latestQuestions: "已提交问题",
    noQuestions: "暂时没有问题。",
    contactTitle: "联系我们 / 加入我们",
    contactLead: "商务合作、素材投稿、粉丝共创与社群加入，都可以从这里开始。",
    contact1: "Bilibili 私信",
    contact1Text: "访问“半北山河”的 Bilibili 主页，通过站内私信发送合作或投稿说明。",
    goBilibili: "前往 B 站",
    contact2: "商务联系",
    contact2Text: "官方及商务合作请邮箱联系 1293054197@qq.com。",
    sendEmail: "发送邮件",
    contact3: "粉丝共创与答疑",
    contact3Text: "欢迎提交 MOC 草图、选题建议、乐高资讯线索和视频字幕协助，也可以在这里提出问题或发送留言。",
    formName: "姓名",
    formEmail: "邮箱",
    formSubject: "主题",
    formMessage: "留言内容",
    formSubmit: "发送留言",
    formEndpointMissing: "请先在 Formspree 创建表单并配置表单地址。",
    footer: "© 2026 半北山河官方网站"
  },
  en: {
    brand: "Banbei Shanhe",
    navHome: "Home",
    navMaterials: "Free Library",
    navBio: "Biography",
    navWorks: "Our Works",
    navGallery: "Gallery",
    navPhotos: "Photos",
    navVideos: "Videos",
    navStore: "Store",
    navQA: "Q&A",
    navContact: "Contact",
    langButton: "中文",
    heroTitle: "Banbei Shanhe",
    heroCopy: "Striving without pause, innovating without end: drawing mountains and rivers with bricks, and telling good stories through video.",
    heroPrimary: "Enter Gallery",
    heroSecondary: "Join Us",
    shareTitle: "Share something?",
    shareLead: "Share build ideas, story tips, or chat with fellow fans. Comments are powered by GitHub Discussions.",
    discussionTitle: "Community discussion",
    discussionIdentity: "Sign in with GitHub to post. Your GitHub username and avatar will appear with your comment.",
    carouselTitle: "Our Works",
    carouselLead: "A curated series invites you to appreciate a curated series.",
    worksIndexLead: "Four creative directions exploring how Banbei Shanhe builds a LEGO world through bricks, film, and knowledge.",
    viewWork: "View work",
    story1: "Tell Chinese stories with LEGO",
    story2: "The black-robed poet's poems",
    story3: "NINJAGO reviews",
    story4: "LEGO facts you may not know",
    work1Lead: "Inspired by traditional Chinese culture, translating towers, landscapes, lantern festivals, and everyday stories into LEGO language.",
    work1Body: "This series asks how bricks can tell stories. From architectural proportion and color order to character staging, traditional imagery is broken down into buildable structures and shown through video from concept to completion.",
    work2Lead: "A darker chapter for the black-robed poet, writing LEGO works with a stronger literary and cinematic mood.",
    work2Body: "The black-robed poet series leans into atmosphere, narrative, and visual experimentation. It presents not only a model, but a short poem shaped by light, voice, and scene.",
    work3Lead: "Reviews, character notes, mech structures, and collecting advice around the NINJAGO theme.",
    work3Body: "This column helps fans and new viewers enter the theme quickly. It focuses on play value, display value, part selection, character lineups, and each set's place in the NINJAGO world.",
    work4Lead: "A light but useful LEGO knowledge blog sharing classic sets, design details, and collecting experience.",
    work4Body: "From toy-set history and building techniques to theme trivia, this column is a collection of handy LEGO notes offering readers more knowledge for play.",
    knowledgeBlogTitle: "LEGO Knowledge Blog",
    knowledgeBlogLabel: "About the blog",
    knowledgeBlogStatus: "Ongoing",
    knowledgePostTitle: "Classic Sets, Design & Collecting",
    knowledgePostText: "New stories about LEGO sets, building observations, design details, and collecting notes will be published here.",
    blogReadArticle: "Read and join the discussion",
    blogDiscussionTitle: "Article discussion",
    blogDiscussionText: "Sign in with GitHub to comment.",
    archiveTitle: "Eras",
    archiveLead: "Five chapters open like an archive. Click any era to see where it sits in Banbei Shanhe's creative universe.",
    eraDefault: "Choose an era to view its theme.",
    eraDoor: "Inside the Gate",
    eraDoorText: "Inside the Gate: the beginning in front of the camera, focusing on starter sets, basic building, collecting methods, and advice for newcomers.",
    eraBloom: "Full Bloom",
    eraBloomText: "Full Bloom: MOC themes begin to grow, placing courtyards, lantern festivals, towers, and street scenes into the brick world.",
    eraStars: "Beyond the Stars",
    eraStarsText: "Beyond the Stars: looking toward the wider LEGO universe, following product news, global trends, and fan culture.",
    eraRenaissance: "Renaissance",
    eraRenaissanceText: "Renaissance: revisiting classic themes to understand design language, structural beauty, and collectible value.",
    eraNight: "Eternal Night",
    eraNightText: "Eternal Night: the darker chapter of the black-robed poet, leaning into narrative, visual experiments, and atmosphere.",
    materialsTitle: "Free Material Library",
    materialsLead: "A curated set of public templates for fans, MOC builders, and video creators. Download links can be connected to cloud storage later.",
    mat1Title: "Chinese MOC Inspiration List",
    mat1Text: "References for dougong brackets, gateways, lattice windows, lanterns, and courtyard proportions.",
    mat2Title: "Review Worksheet",
    mat2Text: "Record a set through five dimensions: part quality, build experience, articulation, display value, and price.",
    mat3Title: "Video Storyboard Template",
    mat3Text: "Opening hook, detail shots, structural breakdown, and closing opinion for steadier creator workflow.",
    bioTitle: "Biography",
    bioLead: "Banbei Shanhe is an independent Bilibili creator focused on LEGO content.",
    bioP1: "Banbei Shanhe creates around LEGO, covering set reviews, news reactions, theme research, and MOC retrospectives. His channel combines a player's precision with a storyteller's restraint: he explains not only whether a set is worth buying, but why it was designed that way.",
    bioP2: "For MOCs, Banbei Shanhe especially favors themes inspired by traditional Chinese culture. Towers, archways, lantern festivals, landscape imagery, and character stories are translated into buildable structures and documented from concept to completion.",
    bioP3: "This website is a content index, fan message board, and merchandise portal. It is meant to feel like a black exhibition hall: quiet and formal, with each beam of light landing on brick details.",
    galleryTitle: "Gallery",
    galleryLead: "The photo area showcases major projects, videos, and MOC builds. The video area embeds Bilibili players for concentrated viewing.",
    photosTitle: "Photo Gallery",
    photoGalleryLead: "Browse Banbei Shanhe's LEGO image collection by theme, from classic sets to photography and nostalgic posters.",
    classicSetsTitle: "Classic Sets",
    photographyTitle: "Photography",
    nostalgicPostersTitle: "Nostalgic Posters",
    videosTitle: "Bilibili Videos",
    video1: "Banbei Shanhe Featured Video 01",
    video2: "Banbei Shanhe Featured Video 02",
    video3: "Banbei Shanhe Featured Video 03",
    video4: "Banbei Shanhe Featured Video 04",
    storeTitle: "Official Store",
    storeLead: "Reserved entries for Taobao, Xianyu, and official merchandise. Product images can be replaced with your specified screenshot assets.",
    taobao: "Taobao Store",
    xianyu: "Xianyu Link",
    product1: "Black-Robed Poet Acrylic Stand",
    product2: "Chinese MOC Postcard Set",
    product3: "Banbei Shanhe Brick Badge",
    qaTitle: "Q&A",
    qaLead: "Submit text and image questions. Each browser user gets three free questions; after that, a ￥10 per question payment prompt appears.",
    remaining: "Free questions left",
    questionText: "Your question",
    questionUpload: "Upload question image",
    submitQuestion: "Submit Question",
    paidContinue: "Paid ￥10, continue",
    paymentText: "Your free questions are used up. Please pay ￥10 per question to continue. This demo provides a confirmation button; production can connect a QR code or payment link.",
    latestQuestions: "Submitted Questions",
    noQuestions: "No questions yet.",
    contactTitle: "Contact / Join Us",
    contactLead: "Start here for business collaboration, material submissions, fan co-creation, and community participation.",
    contact1: "Bilibili DM",
    contact1Text: "Visit Banbei Shanhe's Bilibili profile and send collaboration or submission details via direct message.",
    goBilibili: "Visit Bilibili",
    contact2: "Business Contact",
    contact2Text: "For official and business collaboration, email 1293054197@qq.com.",
    sendEmail: "Send email",
    contact3: "Fan Co-creation & Q&A",
    contact3Text: "MOC sketches, topic ideas, LEGO news tips, and subtitle support are welcome. You can also ask a question or leave a message here.",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formMessage: "Message",
    formSubmit: "Send message",
    formEndpointMissing: "Create a Formspree form and configure its endpoint before sending.",
    footer: "© 2026 Banbei Shanhe official website"
  }
};

function getLang() {
  return localStorage.getItem("bbsh-lang") || "zh";
}

function syncGiscusLanguage(lang) {
  const sendConfig = () => {
    const frame = document.querySelector("iframe.giscus-frame");
    if (!frame) return false;
    frame.contentWindow.postMessage(
      { giscus: { setConfig: { lang: lang === "zh" ? "zh-CN" : "en" } } },
      "https://giscus.app"
    );
    return true;
  };

  if (!sendConfig()) window.setTimeout(sendConfig, 1200);
}

function applyLang(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("en", lang === "en");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) node.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (translations[lang][key]) node.placeholder = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-value]").forEach((node) => {
    const key = node.dataset.i18nValue;
    if (translations[lang][key]) node.value = translations[lang][key];
  });
  syncGiscusLanguage(lang);
  renderQuestions();
}

function bindLanguage() {
  const button = document.querySelector("[data-lang-toggle]");
  if (!button) return;
  button.addEventListener("click", () => {
    const next = getLang() === "zh" ? "en" : "zh";
    localStorage.setItem("bbsh-lang", next);
    applyLang(next);
  });
}

function storageRead(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function storageWrite(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function bindCarousel() {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;
  document.querySelectorAll("[data-carousel-dir]").forEach((button) => {
    button.addEventListener("click", () => {
      const dir = Number(button.dataset.carouselDir);
      carousel.scrollBy({ left: dir * carousel.clientWidth, behavior: "smooth" });
    });
  });
}

function bindArchive() {
  const detail = document.querySelector("[data-archive-detail]");
  if (!detail) return;
  document.querySelectorAll("[data-era]").forEach((card) => {
    card.addEventListener("click", () => {
      const lang = getLang();
      const title = translations[lang][card.dataset.eraTitle];
      const text = translations[lang][card.dataset.era];
      detail.innerHTML = `<strong>${title}</strong><br>${text}`;
    });
  });
}

function qaUsed() {
  return Number(localStorage.getItem("bbsh-qa-used") || 0);
}

function updateQaCounter() {
  const counter = document.querySelector("[data-qa-counter]");
  const payment = document.querySelector("[data-payment-note]");
  const submit = document.querySelector("[data-qa-submit]");
  if (!counter) return;
  const left = Math.max(0, 3 - qaUsed());
  counter.textContent = left;
  const needsPayment = left === 0 && localStorage.getItem("bbsh-qa-paid") !== "yes";
  payment?.classList.toggle("show", needsPayment);
  if (submit) submit.disabled = needsPayment;
}

function renderQuestions() {
  const list = document.querySelector("[data-question-list]");
  if (!list) return;
  const lang = getLang();
  const questions = storageRead("bbsh-questions");
  list.innerHTML = "";
  if (!questions.length) {
    list.innerHTML = `<div class="post-item">${translations[lang].noQuestions}</div>`;
    return;
  }
  questions.slice().reverse().forEach((question) => {
    const item = document.createElement("article");
    item.className = "post-item";
    item.innerHTML = `
      <div class="post-meta">${question.time}</div>
      <div>${question.text}</div>
      ${question.files.length ? `<div class="file-pills">${question.files.map((file) => `<span class="file-pill">${file}</span>`).join("")}</div>` : ""}
    `;
    list.appendChild(item);
  });
  updateQaCounter();
}

function bindQa() {
  const form = document.querySelector("[data-qa-form]");
  if (!form) return;
  updateQaCounter();
  document.querySelector("[data-pay-button]")?.addEventListener("click", () => {
    localStorage.setItem("bbsh-qa-paid", "yes");
    updateQaCounter();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const left = Math.max(0, 3 - qaUsed());
    if (left === 0 && localStorage.getItem("bbsh-qa-paid") !== "yes") {
      updateQaCounter();
      return;
    }
    const questions = storageRead("bbsh-questions");
    questions.push({
      text: new FormData(form).get("question") || "",
      files: [...form.querySelector("input[type='file']").files].map((file) => file.name),
      time: new Date().toLocaleString()
    });
    storageWrite("bbsh-questions", questions);
    if (left > 0) {
      localStorage.setItem("bbsh-qa-used", String(qaUsed() + 1));
    } else {
      localStorage.removeItem("bbsh-qa-paid");
    }
    form.reset();
    renderQuestions();
  });
}

function bindContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    if (!form.action.includes("YOUR_FORM_ID")) return;
    event.preventDefault();
    const status = document.querySelector("[data-contact-status]");
    if (status) status.textContent = translations[getLang()].formEndpointMissing;
  });
}

function init() {
  bindLanguage();
  bindCarousel();
  bindArchive();
  bindQa();
  bindContactForm();
  applyLang(getLang());
}

document.addEventListener("DOMContentLoaded", init);

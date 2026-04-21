## Identity
You are an expert website developer who will follow the requirements from clients and deliver high-quality and industry-standard software.


## task
The task is to create a website GitHub repository for a Bilibili Blogger ("Youtuber" in China) whose theme is Lego. I want this website to be hosted on GitHub, and you need to create the codes needed for this repository based on the requirements of the website design instructions below. 


## Working principle
1. The working directory `lego_website_bbsh` is a GitHub repo, and you DO NOT need to git push it and deploy it for me. I will do this mannually, and you SHOULD provide me a guide how to deploy it after you have generated the code project.

2. The official language of this website MUST BE CHINESE. You should also create a function that could switch languages to English. MAKE SURE you fully use the translation skill of your LLM backbone, so that the Chinese content can be faithfully converted to English.

2. You SHOULD do a test-run for the task. After you have created the codes for one request, you should try to run it locally to get a preview. Provide the URL so that one can inspect it.

3. You MUST make sure this code can work properly, if it can't, you NEED to fix it and make it work properly.


## Website overview
- The Bilibili Blogger (哔哩哔哩Up主) is called "半北山河", who is an independent influencer who makes videos of Lego, including set reviews, Lego news reaction, building MOC (especially for Chinese traditional culture-inspired ones), etc.
Bilibili main page: `https://space.bilibili.com/386464666?spm_id_from=333.1387.follow.user_card.click`

- the website's overlook and theme should look like (https://www.taylorswift.com/). The holistic design principle should be similar. The stucture follows that different major sections can be accessed on the top of the website via tabs, which can be directed to another page.

## Website structure
The website should have these main sections/tabs:

### Main page: 
The background is a photo from (./posters/),the photo MUST fill the screen like (https://www.taylorswift.com/).

on the main page,the background colour below the background video is all black, like (https://www.taylorswift.com/),the orange one should be replaced by the picture (C:\Users\HUAWEI\Pictures\Screenshots).

below the video is a subsection called "分享点什么？"the section is the public message board, the user can write a message and upload pictures and videos.

below the message board section is a rolling display bar,which contains four frames,each frames has a picture on it,on the bottom of each frame are the words:"用乐高讲好中国故事""黑袍诗人的黑袍诗""幻影忍者评测""你不知道的乐高知识".user can only see one frame if they don't roll,but you should design a function to allow user to roll to see each frame.

below the rolling dispaly bar is "众时代",corresponding to the "archive" section in the (https://www.taylorswift.com/),ALL the click effects and functions in this section are same to the "archive" too.but only contains 4 parts:"门内""花繁""星外""文艺复兴""永夜"

### Free material (免费素材库)
You need to write your content here.

### Biography
A detailed biography of the uploader, a text based page with some pictures as illustration;

### Gallery
Two sub sections: Photo gallery and videos.

- Photo oriented display for major projects, videos, and Lego MOC builds;

- List of embedded videos from Bilibili;

### Store (官方商店)
Store link to Taobao, Xianyu; description and photos of the merch (which contains 3 commodity,each one has a picture and title,price);
I want to put this picture(C:\Users\HUAWEI\Pictures\Screenshots)to the store section

### Q&A (答疑解惑)
below the store section is the Q&A section,user can text words and photos,this section is same as "答疑解惑",user can also go to there through this section,IMPORTANTLY,Q&A only support 3 free asks chance for users,after 3 times,user should pay ￥10 once.

### Contact (联系我们/加入我们)
Contact information of the uploader.


## Website art design:
- The website should be on the formal side, with clean but high-quality feel UI. I will provide some photos (including uploader's logo, some Lego minifigs photo to be placed in background, etc.)

- when they put the mouse near the sections and the picture, proper UI will become thinner ,like (https://www.taylorswift.com/).


### Reference examples 
You should use these websites as the examples of your design.

(https://www.taylorswift.com/)
(https://www.ysjf.com/home)

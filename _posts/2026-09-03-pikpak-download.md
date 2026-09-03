---
title: "Speed Up PikPak Downloads with rclone and WebDAV"
title_zh: "PikPak网盘终端加速下载"
date: 2026-09-03
permalink: /notes/pikpak-download/
categories:
  - notes
tags:
  - pikpak
  - rclone
  - webdav
  - mac
excerpt: "用 PikPak 的 WebDAV 加上 rclone，把网页下载从十几 MB 提升到 20–30 Mi/s。"
comments: false
share: false
related: true
---

一直用的是直接从网页下载，这个太慢了，最大也就 10mb ，而且有的时候，从 100kb 慢慢涨上去
刚刚 ChatGPT告诉我，让我开 webdav
然后下载了 rclone
现在下载速度能有 20 ～ 30Mi/s ，我是学校宽带，系统是mac
首先下载rclone

```bash
brew install rclone
```


<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig1.png" alt="图1">
  <figcaption>图1</figcaption>
</figure>
然后打开Pikpak客户端

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig2.png" alt="图2">
  <figcaption>图2</figcaption>
</figure>
点设置

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig3.png" alt="图3">
  <figcaption>图3</figcaption>
</figure>
点击实验室功能

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig4.png" alt="图4">
  <figcaption>图4</figcaption>
</figure>
点击WebDAV

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig5.png" alt="图5">
  <figcaption>图5</figcaption>
</figure>
点击启用

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig6.png" alt="图6">
  <figcaption>图6</figcaption>
</figure>
点击添加客户端
把账号密码复制下来
打开终端，配置rclone
输入

```bash
rclone config
```

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig7.png" alt="图7">
  <figcaption>图7</figcaption>
</figure>
选择新建n，输入名字，这里输入dav

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig8.png" alt="图8">
  <figcaption>图8</figcaption>
</figure>
然后它会给你一长串的选择，这里选择52，WebDAV

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig9.png" alt="图9">
  <figcaption>图9</figcaption>
</figure>
把之前的信息复制粘贴上去，URL,注意http端口号和https的不一样

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig10.png" alt="图10">
  <figcaption>图10</figcaption>
</figure>
这里选择other，也就是7

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig11.png" alt="图11">
  <figcaption>图11</figcaption>
</figure>
把刚刚复制的用户名和密码填上
用户名

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig12.png" alt="图12">
  <figcaption>图12</figcaption>
</figure>
密码，选择y，然后输入两次

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig13.png" alt="图13">
  <figcaption>图13</figcaption>
</figure>
这个在pikpak高级选项中有，复制粘贴后回车

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig14.png" alt="图14">
  <figcaption>图14</figcaption>
</figure>
选择n

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig15.png" alt="图15">
  <figcaption>图15</figcaption>
</figure>
检查

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig16.png" alt="图16">
  <figcaption>图16</figcaption>
</figure>
设置完成

<figure class="post-figure">
  <img src="/images/posts/pikpak-download/fig17.png" alt="图17">
  <figcaption>图17</figcaption>
</figure>
如果中途不小心输错或后续想更改配置，可输入rclone config edit选择编辑已有的配置。

测试是否链接成功
输入

```bash
rclone lsd dav:/ --max-depth 1
```

如果返回网盘文件列表则成功
这是我的下载命令

```bash
rclone copy dav:/ABS/Cathy/720-2008.mp4 /Volumes/Data/pikpak \
  -P -v \
  --transfers=24 \
  --checkers=48 \
  --buffer-size=128M \
  --multi-thread-streams=12 \
  --multi-thread-cutoff=256K \
  --timeout=60s \
  --retries=5 \
  --low-level-retries=20 \
  --stats=1s
```


实测下载速度有21Mi/s

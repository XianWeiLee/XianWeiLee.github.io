---
title: "Fix VS Code SSH Stuck on Copying the Server with SCP"
title_zh: "Mac vscode 连不上服务器，卡在「正在使用 scp 将 vscode 服务器复制到主机」"
date: 2024-05-09
permalink: /notes/vscode-connection/
categories:
  - notes
tags:
  - vscode
  - ssh
  - mac
excerpt: "VS Code 远程连接卡在「正在使用 scp 将 vscode 服务器复制到主机」时，可先在本地下载对应版本的 vscode-server，再上传到服务器。"
comments: false
share: false
related: true
---

昨天更新了一下vscode, 今天就连接不上服务器了。 经过一番搜索后，总结出以下解决流程，供参考
首先要知道， vscode本质上是通过ssh连接服务器的， 只不过和直接通过终端ssh连接服务器不同， vscode会将自己的服务配置复制一份到所连接的服务器上，然后再进行连接，相当于多了一步。
而我就是卡在了vscode复制自身服务配置到主机的这一步。

<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig1.png" alt="图1">
  <figcaption>图1</figcaption>
</figure>
卡在这个

由于众所周知的原因， 服务器的网络没有本地网络那么灵活。所以使用曲线救国的方法， 先把配置下载到本地，然后再通过本地上传。

## 第一步
在终端ssh到主机

```bash
ssh -p 端口 主机名称
```

输入密码

## 第二步
在服务器端通过以下命令获得vscode 的服务器路径

```bash
ls -la
```

或者

```bash
ll
```

<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig2.png" alt="图2">
  <figcaption>图2</figcaption>
</figure>
是一个.开头的隐藏文件夹


## 第三步
去到该路径下的bin文件夹

```bash
cd .vscode-server/bin
```



通过 ls 命令可以看到该文件夹下有很多文件夹（看情况而定）

<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig3.png" alt="图3">
  <figcaption>图3</figcaption>
</figure>
文件夹名称都是一长串字母与数字的组合


这个文件夹名称是和你所用的vscode版本一一对应的

如何查看vscode版本， 以mac电脑为例


<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig4.png" alt="图4">
  <figcaption>图4</figcaption>
</figure>
打开vscode ,然后在电脑的左上方的状态栏上点击Code,关于Visual Studio Code

<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig5.png" alt="图5">
  <figcaption>图5</figcaption>
</figure>
提交后面就版本号


将这个版本号复制下来， 接下来会有用

可以将这些文件夹都删掉，使用这个命令

```bash
rm ~/.vscode-server/bin/* -rf
```

## 第四步
打开游览器， 输入以下网址，下载对应的服务器文件

```bash
https://update.code.visualstudio.com/commit:你刚刚复制的版本号/server-linux-x64/stable
```

例如：

```bash
https://update.code.visualstudio.com/commit:b58957e67ee1e712cebf466b995adf4c5307b2bd/server-linux-x64/stable
```

下载好后你会得到一个，tar.gz 的压缩文件

```bash
vscode-server-linux-x64.tar.gz
```


## 第五步
在本地使用scp 上传文件到服务器

```bash
scp -P 端口 vscode-server-linux-x64.tar.gz文件路径 主机名称:.vscode-server/bin的路径
```

上传完成后再通过 ls 命令你将会看到


<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig6.png" alt="图6">
  <figcaption>图6</figcaption>
</figure>
该文件夹下只有这个文件，因为我把其他文件都删掉了

解压该文件

```bash
tar -zxf vscode-server-linux-x64.tar.gz
```

再 ls 一下，你会看到

<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig7.png" alt="图7">
  <figcaption>图7</figcaption>
</figure>
多出了一个文件夹


将这个文件夹命名为版本号

```bash
mv vscode-server-linux-x64 你刚刚复制的版本号
```

以我的为例

```bash
mv vscode-server-linux-x64 b58957e67ee1e712cebf466b995adf4c5307b2bd
```

再 ls 一下，你会看到

<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig8.png" alt="图8">
  <figcaption>图8</figcaption>
</figure>
成功改名


## 第六步（可选）
经过上述步骤应该可以连上
但是如果你像我一样，碰巧把插件Remote -SSH也更新了的话，就还需要第六步，回退版本
首先找到Remote -SSH插件


<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig9.png" alt="图9">
  <figcaption>图9</figcaption>
</figure>
vscode 界面左边
然后，在卸载的旁边有个小箭头，点击它


<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig10.png" alt="图10">
  <figcaption>图10</figcaption>
</figure>
安装另一个版本
安装0.107.1版本


<figure class="post-figure">
  <img src="/images/posts/vscode-connection/fig11.png" alt="图11">
  <figcaption>图11</figcaption>
</figure>
不要安装最新版


最后重启vscode

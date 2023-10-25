---
position: 1020
title: 手順1. 準備
---

# 1. 準備

まずはパソコンに必要な道具を揃えていきます。  
今回のチュートリアルで必要なものは **Git(ギット)**, **GitHub(ギットハブ)** の 2 つです。

![image](/tutorial/git-github.png)

<br />

<br />

# Git

- Mac をお使いの方は、最初から用意されているので準備は不要です。
- Windows をお使いの方は事前に準備をお願いします。

![image](/tutorial/git-install-win.png)  
<a href="https://gitforwindows.org/" class='linkbutton'>Windows版Gitをインストール</a>

<br />

### 確認する

```ターミナル.sh
$ git --version
```

Mac では **ターミナル** 、 Windows では **Powershell** を開いて上記のコマンドを入力します。  
`2.39.2` のように何か **バージョンが表示されれば Git が使えます** 。  
ちなみに `$ ` は 1回分のコマンドを表すただの記号ですので 入力する必要はありません。

<br />

### 初回設定

Gitに自分の名前と、メールアドレスの設定をします。  
ついでに `core.autocrlf false` も設定しておくことをオススメします。

```
$ git config --global user.name "ここはなんでも好きな名前"
$ git config --global user.email "開発に使うメールアドレス"
$ git config --global core.autocrlf false
```

例

```
$ git config --global user.name "ルビードッグ"
$ git config --global user.email "rubydog@example.com"
$ git config --global core.autocrlf false
```

<br />

<br />

<br />

# GitHub

まだ使ったことがない方は以下から **登録(サインアップ)** をお願いします。

<a href="https://github.co.jp/" class='linkbutton'>GitHubにサインアップ 🐙</a>

<br />

### ユーザーID

![image](/tutorial/github_id.png)

この **ユーザーID** をメモしておいてください。  
例: `rbdog`

<br />

### アクセストークン

アクセストークンはこれからの作業で使う秘密のパスワードのようなものです。

![gif](/tutorial/access-token.gif)  
![gif](/tutorial/access-token-digest.png)

<a href="https://github.com/settings/tokens" class='linkbutton'>アクセストークン作成</a>

<br />

作った **アクセストークン** をメモしておいてください。  
一度画面を離れると、もう確認することができません。  
万が一忘れてしまったときや、他人にバレてしまったときは 古いほうを消してもう一度作り直せば大丈夫です。

例: `ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc`

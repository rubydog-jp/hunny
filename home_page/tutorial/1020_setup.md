---
position: 1020
title: 手順1. 準備
---

# 1. 準備

まずは必要な環境を揃えていきます。  
今回のチュートリアルで必要なものは **Git(ギット)**, **GitHub(ギットハブ)** の 2 つです。

![image](/tutorial_assets/git_github.png)

<br />

## Git

- Mac をお使いの方は、最初から用意されているため追加の準備は不要です。
- Windows をお使いの方は事前に準備をお願いします。

<a href="https://gitforwindows.org/" class='mybtn'>Windows版Gitはこちら</a>

![image](/tutorial_assets/git-install-win.png)

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
$ git config --global user.name "名前"
$ git config --global user.email "メールアドレス"
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

## GitHub

まだ使ったことがない方は以下から **登録(サインアップ)** をお願いします。

<a href="https://github.co.jp/" class='mybtn'>GitHub へ</a>

<br />

### GitHubユーザーID

![image](/tutorial_assets/github_id.png)

この **ユーザーID** をメモしておいてください

例: `rbdog`

<br />

### アクセストークン

アクセストークンはこれからの作業で使う秘密のパスワードのようなものです。

<a href="https://github.com/settings/tokens" class='mybtn'>アクセストークン作成</a>

- [ここに画像]

<br />

作った **アクセストークン** をメモしておいてください。  
一度画面を離れると、もう確認することができません。  
万が一忘れてしまったときや、他人にバレてしまったときは 古いほうを消してもう一度作り直せば大丈夫です。

例: `ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc`

---
position: 101
title: 手順1. 準備
---

# 1. 準備

![image](/tutorial/stepper-1.png)

まずはパソコンに必要な道具を揃えていきます。  
今回のチュートリアルで必要なものは **Git(ギット)**, **GitHub(ギットハブ)** の 2 つです。

![image](/tutorial/git-github.png)

<br />

<br />

# Git

<details>
  <summary>Macの方</summary>
  <div>
      Macでは最初からGitが用意されているので準備は不要です。<br /> 
      ただし、まれに他のソフトの影響でエラーになることがあります。 エラー内容 <code>xcrun: error: invalid active developer</code><br /> 
      このエラーが出たときは以下のコマンドで解決してください。
  </div>
  <pre>
$ xcode-select --install
  </pre>
  <div>
  質問に同意したあと、完了までしばらく時間がかかりますのでお待ちください。
  </div>
</details>

<details>
  <summary>Windowsの方</summary>
    <div>
      事前に準備をお願いします
      <img
        src={require('/tutorial/git-install-win.png').default}
        alt="Example banner"
      />
      <a href="https://gitforwindows.org/" class='linkbutton'>Windows版Gitをインストール</a>
    </div>
</details>

<br />

### 確認する

```ターミナル.sh
$ git --version
```

Mac では **ターミナル** 、 Windows では **Powershell** を開いて上記のコマンドを入力します。  
ちなみに `$ ` は 1 回分のコマンドを表すただの記号ですので 入力する必要はありません。  
`2.39.2` のように何か **バージョンが表示されれば Git が使えます** 。  
`1.7.10` より小さいバージョンだと **古すぎるので新しい Git をインストールし直してください**

<br />

### 初回設定

Git に自分の名前と、メールアドレスの設定をします。  
ついでに `core.autocrlf false` も設定しておくことをオススメします。

```
$ git config --global user.name "ここはなんでも好きな名前"
$ git config --global user.email "開発に使うメールアドレス"
$ git config --global core.autocrlf false
```

<details>
  <summary> 例 </summary>
  <pre>
$ git config --global user.name "ルビードッグ" <br />
$ git config --global user.email "rubydog@example.com" <br />
$ git config --global core.autocrlf false 
  </pre>
</details>

<br />

<br />

<br />

# GitHub

まだ使ったことがない方は以下から **登録(サインアップ)** をお願いします。

<a href="https://github.co.jp/" class='linkbutton'>GitHub にサインアップ 🐙</a>

<br />

### ユーザー ID

![image](/tutorial/github_id.png)

この **ユーザー ID** をメモしておいてください。  
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

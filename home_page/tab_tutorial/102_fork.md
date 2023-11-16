---
position: 102
title: 手順2. フォークとクローン
---

# 2. フォークとクローン

![image](/tutorial/stepper-2.png)

プロジェクトのデータを準備します。  
最初は **fork(フォーク)** から始めましょう。

![gif](/tutorial/eye-fork.gif)

<br />

## fork

GitHub の画面からハニープロジェクトをフォークします。  
この操作はプロジェクトに参加する はじめの一度だけで充分です。  
`Owner` が自分のアカウントになっていることを確認してください。

![image](/tutorial/fork.png)  
<a href="https://github.com/rubydog-jp/hunny/fork" class='linkbutton'>フォークの画面 (GitHub) へ</a>

<br />

<br />

## Clone

フォークが完了したら、自分のパソコンまでデータを持ってくるために **clone(クローン)** をしましょう。  
この操作はパソコンの中身を捨てない限り、はじめの一度だけで充分です。

```
$ git clone https://<アクセストークン>@github.com/<ユーザーID>/hunny.git
```

<details>
  <summary> 例 </summary>
  <pre>
$ git clone https://ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc@github.com/rbdog/hunny.git
  </pre>
</details>

<br />

<br />

## upstream を設定

ハニープロジェクト本体の URL を`upstream` として Git に登録しておきます

```
$ cd hunny
$ git remote add upstream https://github.com/rubydog-jp/hunny.git
```

<details>
  <summary> 例 </summary>
  <pre>
$ cd hunny <br />
$ git remote add upstream https://github.com/rubydog-jp/hunny.git
  </pre>
</details>

<br />

## 準備 OK

これで活動の準備ができました。

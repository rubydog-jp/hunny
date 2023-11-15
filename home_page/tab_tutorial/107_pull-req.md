---
position: 107
title: 手順7. プルリクエスト
---

# 7. プルリクエスト

![image](/tutorial/stepper-7.png)

作業が完了したことを **ハニープロジェクト** へ知らせるため、 **Pull Request(プルリクエスト)** を作成します。

![gif](/tutorial/eye-pull-req.gif)

<br />

## Push

ひとまず作業が完了したデータを GitHub へ送信しておきます

```
$ git push origin feat/new_cell_<ユーザーID>_<issue番号>
```

例

```
$ git push origin feat/new_cell_rbdog_2
```

:::caution ここでエラーが起こったとき

エラーメッセージ: `remote: permission to ...`

同様の報告を複数回いただいておりますが、原因を 1 つに絞れておりません。  
お手数ですが 該当の issue 内のコメントにてエラーメッセージと一緒に教えてください 🙇

:::

<br />

<br />

## Pull Request を作成

いよいよ最後の工程です。以下のようなプルリクエストを作成しましょう。

- タイトル: `[PR] feat: new cell <ユーザーID> #<issue番号>`

例

- タイトル: `[PR] feat: new cell rbdog #2`

<br />

![gif](/tutorial/pull-req.gif)  
<a href="https://github.com/rubydog-jp/hunny/pulls" class='linkbutton'>プルリクエストを作成</a>

<br />

## 承認を待つ

あとはコーヒーを飲みながらプルリクエストが承認されるのを待つだけです。☕️  
責任者がレビュー確認をしますので、0~2 日お待ちください。  
何か依頼された場合は対応をお願いします。

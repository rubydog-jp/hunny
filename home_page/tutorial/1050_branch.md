---
position: 1050
title: 手順4. ブランチ
---

# 4. ブランチ

それでは本題の **issue** に対応していきます。  
まずは自分の作業専用の `branch(ブランチ)` を作りましょう。

![gif](/tutorial_assets/eye-branch.gif)

<br />

```
$ git checkout -b feat/new_cell_<ユーザーID>_<issue番号>
$ git push origin feat/new_cell_<ユーザーID>_<issue番号>
```

例

```
$ git checkout -b feat/new_cell_rbdog_2
$ git push origin feat/new_cell_rbdog_2
```

<br />

コマンドを打ったあとに、gitから質問がくることがあります。

`Username for XXXXXX`: ユーザーIDを聞かれています。  
`Password for XXXXXX`: Passwordと書かれていますが、アクセストークンのことです。

それぞれ自分の **ユーザーID** , **アクセストークン** を入力してください。

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

<br />

:::caution エラーになったとき

エラー: `remote: Permission to XXX/hunny.git denied`  
Gitが正しいユーザー名とアクセストークンを使用できていない可能性があります。

- 以下のコマンドを入力したあと、もう一度お試しください。

```
$ git remote set-url origin https://<ユーザーID>:<アクセストークン>@github.com/<ユーザーID>/hunny.git
```

例

```
$ git remote set-url origin https://rbdog:ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc@github.com/rbdog/hunny.git
```

:::

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
$ git remote set-url origin https://<アクセストークン>@github.com/<ユーザーID>/hunny.git
$ git push origin feat/new_cell_<ユーザーID>_<issue番号>
```

例

```
$ git checkout -b feat/new_cell_rbdog_2
$ git remote set-url origin https://ghp_Xxxx1122Yyyy3344Zzzz5566AaaaBbbbCccc@github.com/rbdog/hunny.git
$ git push origin feat/new_cell_rbdog_2
```

<br />

↑ `checkout` でブランチを作って、 `remote` で通信先を設定して、 `push` でデータを送っています。

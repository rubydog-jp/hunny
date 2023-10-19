---
position: 2050
title: Q. branchとは?
---

# Q. branch とは?

:::danger

このページは作成途中です。もうしばらくお待ちください。

:::

<br />

Git ではそれぞれの開発を同時に進めるために作業の枝分かれを行います。  
まずは自分の作業のために、専用の枝である `ブランチ` を作りましょう。

- `作業の種類/短い説明_issue番号`

のように名前を決めます。 **作業の種類** は以下の通りです。

- バグを修正する: `fix`
- 新しい機能を作る: `feat`

```
# 新しいブランチを作る
$ git checkout -b feat/new_data_<ユーザーID>_<issue番号>
# originへ反映
$ git push origin feat/new_data_<ユーザーID>_<issue番号>
```

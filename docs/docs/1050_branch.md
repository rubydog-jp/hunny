---
position: 1050
title: 手順4. ブランチ
---

# 4. ブランチ

自分の作業のために、専用の枝である `ブランチ` を作りましょう。  
`<ユーザーID>` は GitHub の自分のユーザー ID に置き換えてください。  
`<issue番号>` は 発行された issue 番号 に置き換えてください。

```
# 新しいブランチを作る
$ git checkout -b feat/new_data_<ユーザー名>_<issue番号>
# originへ反映
$ git push origin feat/new_data_<ユーザー名>_<issue番号>
```
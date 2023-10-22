---
position: 1070
title: 手順6. コミット
---

# 6. コミット

作業が終わったらファイルを保存したあと、**commit(コミット)** をします。

```
$ git add data/cells.json
$ git commit -m "feat: new cell <ユーザーID> #<issue番号>"
```

例

```
$ git add data/cells.json
$ git commit -m "feat: new cell rbdog #2"
```

<br />

## 最新データを取り込む

コミットが完了したら、最新のハニープロジェクトからデータを取り込んでおきましょう。

```
$ git pull --rebase upstream main
```

:::caution Conflict について

このとき、運悪く他の作業者が自分と同じデータを **先に** 編集していたときは **conflict(競合)** が発生します。  
競合を起こしてしまうことは悪いことではないので安心してください。  
そんなときはもう一度 `hunny` > `data` > `cells.json` を開いて  
相手の変更が残るように直してあげてください。譲り合いの精神が大切です。
ファイルを保存したら、

```
$ git add data/cells.json
$ git rebase --continue
```

で解決します。
自分が作った変更は消えてしまうので、もう一度前の手順 `5.本作業` へ戻ってやり直してください。

:::

<br />

<br />

ここまでできたら GitHub へ自分の作業データを送信しておきます

```
$ git push origin feat/new_cell_<ユーザーID>_<issue番号>
```

例

```
$ git push origin feat/new_cell_rbdog_2
```

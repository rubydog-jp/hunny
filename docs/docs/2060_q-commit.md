---
position: 2060
title: Q. commitとは?
---

# Q. commit とは?

:::danger

このページは作成途中です。もうしばらくお待ちください。

:::

### コミットメッセージを決める

- `feat: new data <ユーザー名> (#<issue番号>)`

のようなメッセージにします。

- バグの修正: `fix`
- 機能の開発: `feat`

のように種類名を先頭につけます。

```
$ git add v1/data.json
$ git commit -m "feat: new data <ユーザー名> (#<issue番号>)"
```

コミットが完了したら、リポジトリを最新にしておきましょう。

```
$ git pull --rebase upstream main
```

- (画像)

このとき稀に `conflict(競合)` が発生することがあります。  
もし競合が起こっても悪いことではないので安心してください。  
他の人と同時に作業をしていくと、同じところを編集してしまうケースがあるためです。

- (画像)

競合が起こった時はもう一度 `honey` > `v1` > `data.json` を開いて  
相手の変更が残るように直してあげてください。譲り合いの精神が大切です。
ファイルを保存したら、

```
$ git add v1/data.json
$ git rebase --continue
```

で解決します。
自分が作った変更は消えてしまうので、もう一度前の手順 `5.作業` へ戻ってやり直してください。

ここまでできたら origin も最新にしておきます

```
$ git push origin feat/new_data_<ユーザー名>_<issue番号>
```

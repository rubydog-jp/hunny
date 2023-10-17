---
position: 40
title: 手順3. フォーク
---

# 3. フォーク

:::warning
このページ内の `<ユーザー名>` は GitHub の自分のユーザー ID に置き換えてください。  
:::

<br />

**issue** の担当者が自分になったら、いよいよ作業を始めていきます。  
ここではいくつかの Git を使った操作が必要です。

まずは[コチラ](https://github.com/rubydog-jp/honey/fork)からプロジェクトをフォークします。

`Owner` が自分のアカウントになっていることを確認してください。

次にこのようにコマンドを入力してください

```
$ git clone https://github.com/<ユーザー名>/honey.git
$ cd honey
$ git remote add upstream https://github.com/rubydog-jp/honey.git
```

すると今、3 つのリポジトリが存在しています。

- `upstream`: Rubydog が管理する中央リポジトリ
- `origin`: 今作られたばかりの自分専用リポジトリ
- `local`: 自分のパソコンの中のリポジトリ

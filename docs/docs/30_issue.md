---
position: 30
title: 手順2. issue
---

# 2. issue

:::warning
このページ内の `<ユーザー名>` は GitHub の自分のユーザー ID に置き換えてください。  
:::

<br />

プロジェクトに対して何かを行動を起したいときはまず `issue` を発行しましょう。

- バグの報告
- 新しい機能のリクエスト
- 疑問点
- 今後の方針

など、さまざまな種類の issue が作られます

<br />

# やってみよう!

初めて知らないプロジェクトに向かって issue を発行するのは勇気がいるものです。  
私たちのプロジェクトは、そういった方の練習のためにあります。

<br />

### タイトルを考える

- `[Bug] button is not working` ボタンが反応しません
- `[FR] customize theme color` 色をカスタマイズする新機能

のようなタイトルを決めます。

- バグの報告: `[Bug]`
- 新しい機能のリクエスト: `[FR]`

のように種類名を先頭につけます。

<br />

### 詳細を考える

以下のようなフォーマットがよく使用されます。

```
[Bug]
**Describe**
  (バグの説明)
**To Reproduce**
  (再現手順)
**Expected behavior**
  (想定される挙動)
**Screenshots**
  (スクリーンショット)
**Device**
  (端末名, OS, バージョン, 使用ブラウザ)
**App Version**
  (アプリバージョン)
**Additional context**
  (その他の経緯)
```

```
[FR]
**Related Problem**
  (現状の問題)
**Solution**
  (解決案)
**Alternatives**
  (その他の解決案)
**Additional context**
  (その他の経緯)
```

<br />

### issue を発行する

それでは実際に、私たちのプロジェクトに向かって issue を発行してみます。  
今回は練習ですので 以下のような issue を作ります

- タイトル

```
[FR] new data of <ユーザー名>
```

- 説明

```
**Solution**
アプリ内に新しく <ユーザー名> のデータを追加します
```

[こちらから issue を発行できます](https://github.com/rubydog-jp/honey/issues)

![gif](/gif/issue.gif)

発行された issue の番号を覚えておきましょう。

<br />

### assign を待つ

issue の担当者を決めることを `assign` と言います。  
プロジェクトの責任者にアピールして、自分を assign してもらいましょう。  
当プロジェクトでは待機しているだけで十分ですが、  
何日も反応がないときは issue のコメントで `@rbdog` まで報告してください。

```
こんにちは @rbdog
アサインをお願いします
```

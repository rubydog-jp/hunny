---
position: 2030
title: Q. issueとは?
---

# Q. issue とは?

:::danger

このページは作成途中です。もうしばらくお待ちください。

:::

プロジェクトに対して何かを行動を起したいときはまず `issue` を発行しましょう。

- バグの報告
- 新しい機能のリクエスト
- 疑問点
- 今後の方針

など、さまざまな種類の issue が作られます

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

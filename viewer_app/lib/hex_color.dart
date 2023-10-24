import 'package:flutter/material.dart';

extension HexColor on Color {
  /// HEX形式から Color を生成
  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    // #XXYYZZ or ZZYYZZ のときは 先頭に ff を追加
    if (hexString.length == 7) buffer.write('ff');
    final hashRemoved = hexString.replaceFirst('#', '');
    buffer.write(hashRemoved);
    final colorString = buffer.toString();
    final colorInt = int.parse(colorString, radix: 16);
    return Color(colorInt);
  }

  /// 黒と白、見やすい方の色を計算して返す
  static Color highContrast(String hexString) {
    final hashRemoved = hexString.replaceFirst('#', '');
    final colorInt = int.parse(hashRemoved, radix: 16) + 0xFF000000;
    final color = Color(colorInt);
    final luminance = color.computeLuminance();
    // 輝度に合わせて、白か黒かを選択
    return luminance > 0.5 ? Colors.black : Colors.white;
  }
}

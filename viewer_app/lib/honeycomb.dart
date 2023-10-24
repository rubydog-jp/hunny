import 'package:app/cell.dart';
import 'package:app/colors.dart';
import 'package:app/hex_color.dart';
import 'package:flutter/material.dart';
import 'package:hexagon/hexagon.dart';

class HoneycombView extends StatelessWidget {
  const HoneycombView({
    super.key,
    required this.columns,
    required this.cells,
  });

  final int columns;
  final Cells cells;

  @override
  Widget build(BuildContext context) {
    final cellList = cells.toList();
    return SingleChildScrollView(
      child: HexagonOffsetGrid.evenFlat(
        color: brown,
        padding: const EdgeInsets.all(8.0),
        columns: columns,
        rows: cellList.length ~/ columns,
        buildTile: (col, row) {
          final index = row * columns + col;
          final cell = cellList[index];
          return _cellBuilder(cell);
        },
        buildChild: (col, row) {
          final index = row * columns + col;
          final cell = cellList[index];
          return _textBuilder(cell);
        },
      ),
    );
  }
}

/* パッケージの都合上テキストだけ別に分ける */

HexagonWidgetBuilder _cellBuilder(Cell cell) {
  final color = HexColor.fromHex(cell.color);

  return HexagonWidgetBuilder(
    color: color,
    elevation: 2.0,
    padding: 2.0,
  );
}

Text _textBuilder(Cell cell) {
  final empty = '(${cell.address})';
  final heighContrast = HexColor.highContrast(cell.color);
  final text = Text(
    cell.text ?? empty,
    maxLines: 2,
    textAlign: TextAlign.center,
    style: TextStyle(color: heighContrast),
  );
  return text;
}

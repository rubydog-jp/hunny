import 'package:app/cell.dart';
import 'package:flutter/material.dart';
import 'package:hexagon/hexagon.dart';

const columns = 7;

class CellsView extends StatelessWidget {
  const CellsView({
    super.key,
    required this.cells,
  });

  final Cells cells;

  @override
  Widget build(BuildContext context) {
    final cellList = cells.toList();
    return SingleChildScrollView(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          HexagonOffsetGrid.evenFlat(
            color: const Color(0xFF6A1917),
            padding: const EdgeInsets.all(8.0),
            columns: columns,
            rows: cellList.length ~/ columns,
            buildTile: (col, row) {
              final index = row * columns + col;
              final cell = cellList[index];
              return cell2builder(cell);
            },
            // パッケージの都合上テキストだけ別に分ける
            buildChild: (col, row) {
              final index = row * columns + col;
              final cell = cellList[index];
              final empty = '(${cell.address})';
              final text = Text(
                cell.text ?? empty,
                maxLines: 2,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  color: Color(0xFF6A1917),
                ),
              );
              return text;
            },
          ),
        ],
      ),
    );
  }
}

HexagonWidgetBuilder cell2builder(Cell cell) {
  final color = HexColor.fromHex(cell.color);

  return HexagonWidgetBuilder(
    color: color,
    elevation: 2.0,
    padding: 2.0,
  );
}

extension HexColor on Color {
  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }
}

import 'package:app/github.dart';
import 'package:app/cell.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final cellsProvider = AsyncNotifierProvider<CellsNotifier, Cells>(() {
  return CellsNotifier();
});

class CellsNotifier extends AsyncNotifier<Cells> {
  final github = Github();

  @override
  Future<Cells> build() async {
    return github.getCells();
  }

  Future<void> refreshCells() async {
    // 古いデータは不要なので copyWithPrevious はしない
    state = const AsyncValue.loading();
    final cells = await github.getCells();
    state = AsyncValue.data(cells);
  }
}

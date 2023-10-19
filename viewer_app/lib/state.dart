import 'package:app/github.dart';
import 'package:app/cell.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final cellsProvider = AsyncNotifierProvider<CellsNotifier, Cells>(() {
  return CellsNotifier();
});

class CellsNotifier extends AsyncNotifier<Cells> {
  final gitHub = GitHub();

  @override
  Future<Cells> build() async {
    return gitHub.getCells();
  }

  Future<void> refreshCells() async {
    state = const AsyncValue.loading();
    final gitHub = GitHub();
    final cells = await gitHub.getCells();
    state = AsyncValue.data(cells);
  }
}

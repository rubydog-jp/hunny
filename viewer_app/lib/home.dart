import 'package:app/cells_view.dart';
import 'package:app/state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class HomePage extends ConsumerWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cells = ref.watch(cellsProvider);

    final appBar = AppBar(
      backgroundColor: const Color(0xFFFFC000),
      title: const Text(
        'ハニー🍯',
        style: TextStyle(
          color: Color(0xFF6A1917),
        ),
      ),
    );

    final body = switch (cells) {
      AsyncData(:final value) => CellsView(
          cells: value,
        ),
      AsyncError() => const Center(
          child: Text('エラーが発生しました'),
        ),
      _ => const Center(
          child: CircularProgressIndicator(),
        ),
    };

    final fav = FloatingActionButton(
      backgroundColor: const Color(0xFFFFC000),
      foregroundColor: const Color(0xFF6A1917),
      onPressed: () {
        final notifier = ref.read(cellsProvider.notifier);
        notifier.refreshCells();
      },
      child: const Icon(Icons.refresh),
    );

    return Scaffold(
      appBar: appBar,
      body: body,
      floatingActionButton: fav,
    );
  }
}

import 'package:app/colors.dart';
import 'package:app/config.dart';
import 'package:app/honeycomb.dart';
import 'package:app/state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class HomePage extends ConsumerWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cells = ref.watch(cellsProvider);

    final appBar = AppBar(
      backgroundColor: orange,
      title: const Text(
        'ハニー🍯',
        style: TextStyle(color: brown),
      ),
    );

    final body = switch (cells) {
      AsyncData(:final value) => HoneycombView(
          columns: columns,
          cells: value,
        ),
      AsyncError() => const Center(
          child: Text('エラーが発生しました'),
        ),
      _ => const Center(
          child: CircularProgressIndicator(),
        ),
    };

    final fab = FloatingActionButton(
      backgroundColor: orange,
      foregroundColor: brown,
      onPressed: () {
        final notifier = ref.read(cellsProvider.notifier);
        notifier.refreshCells();
      },
      child: const Icon(Icons.refresh),
    );

    return Scaffold(
      appBar: appBar,
      body: body,
      floatingActionButton: fab,
    );
  }
}

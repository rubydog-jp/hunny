import 'dart:convert';

import 'package:app/console.dart';

class Cell {
  const Cell({
    required this.address,
    required this.githubId,
    required this.color,
    required this.text,
  });

  final int address;
  final String? githubId;
  final String color;
  final String? text;

  factory Cell.fromJson(Map<String, dynamic> json) {
    return Cell(
      address: json['address'],
      githubId: json['githubId'],
      color: json['color'],
      text: json['text'],
    );
  }
}

typedef Cells = Iterable<Cell>;

Iterable<Cell> decodeCells(String listJson) {
  final console = Console();
  console.log('デコードを開始');
  final list = jsonDecode(listJson) as List;
  final cells = list.map((item) => Cell.fromJson(item));
  console.log('デコードを終了');
  return cells;
}

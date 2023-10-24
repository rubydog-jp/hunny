import 'package:flutter/material.dart';

final logger = Console();

class Console {
  void log(String message) {
    debugPrint(message);
  }
}

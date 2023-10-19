import 'package:app/console.dart';
import 'package:http/http.dart' as http;
import 'package:app/cell.dart';

const urlString =
    'https://raw.githubusercontent.com/rubydog-jp/hunny/main/data/cells.json';

class GitHub {
  Future<Cells> getCells() async {
    final console = Console();
    console.log('通信開始');
    const timeout = Duration(seconds: 5);
    final url = Uri.parse(urlString);
    final res = await http.get(url).timeout(timeout);
    console.log('通信完了');
    final cells = decodeCells(res.body);
    return cells;
  }
}

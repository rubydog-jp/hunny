import json
import os

# 注意: 以下を使うとこのファイルの場所になってしまう
#   os.path.dirname(__file__)
# 代わりに以下を使う
#   os.getcwd()
currentDir = os.getcwd()


# json = read_json('input/file.text')
def read_json(path):
    dir = os.path.dirname(__file__)
    print('R: ' + path)
    with open(dir + '/' + path) as f:
        data = json.load(f)
    return data


# write_json('output', 'file.text', data)
def write_json(dir, file, data):
    fullDir = currentDir + '/' + dir
    # フォルダが存在しなければ作る
    dirExists = os.path.exists(fullDir)
    if not (dirExists):
        os.mkdir(fullDir)
    path = fullDir + '/' + file
    print('W: ' + path)
    with open(path, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

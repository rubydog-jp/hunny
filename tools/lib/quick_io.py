import json
import os

dir = os.path.dirname(__file__)


# json = read_json('input/file.text')
def read_json(file):
    print('R: ' + file)
    with open(dir + '/' + file) as f:
        data = json.load(f)
    return data


# write_json('output/file.text', json)
def write_json(file, data):
    print('W: ' + file)
    with open(dir + '/' + file, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

import lib.quick_io as io

cellCount = 1000
cellCountPerRow = 6
yellow = "#FFFF00"
orange = "#FFC000"

cells = []
for n in range(cellCount):
    # 何行目か
    row = n // cellCountPerRow

    if ((row % 2) == 0):
        # 偶数行は黄色
        color = yellow
    else:
        # 奇数行はオレンジ
        color = orange

    # セルを作成
    cell = {
        "position": n,
        "name": None,
        "color": color,
    }
    cells.append(cell)

# 出力
io.write_json("output/data.json", cells)

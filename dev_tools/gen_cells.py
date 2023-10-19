import lib.quick_io as io

cellCount = 210
cellColumns = 7
yellow = "#FFFF00"
orange = "#FFC000"

cells = []
for n in range(cellCount):
    # 何行目か
    row = n // cellColumns
    evenRow = (row % 2) == 0

    if (evenRow):
        # 偶数行は黄色
        color = yellow
    else:
        # 奇数行はオレンジ
        color = orange

    # セルを作成
    cell = {
        "address": n,
        "github_id": None,
        "color": color,
        "text": None,
    }
    cells.append(cell)

# 出力
io.write_json("output", "cells.json", cells)

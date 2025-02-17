# 该脚本用于过滤掉 已毕业年级的课程数据，并将过滤后的数据保存回 all.json 文件中。
# 使用方法：
# 1. 确保 all.json 文件存在且包含课程数据。
# 2. 运行该脚本，过滤后的数据将覆盖保存到 all.json 文件中。



import json

data = json.load(open("all.json", "r", encoding="utf-8"))

# 过滤 2022 级课程
data = [i for i in data if i["grade"] != "2022"]

# 保存

json.dump(
    data,
    open("all.json", "w", encoding="utf-8"),
    ensure_ascii=False,
    indent=4,
)

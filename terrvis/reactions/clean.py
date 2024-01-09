from bs4 import BeautifulSoup

# 表格数据
events = [
    {'时间': '1972年9月5日', '名称': '慕尼黑奥运会人质危机', '组织': '巴勒斯坦“黑色九月”组织', '类型': '绑架和人质危机', '介绍': '巴勒斯坦恐怖分子绑架了以色列奥运代表团的11名运动员和教练，导致11人死亡。', '链接': 'https://zh.wikipedia.org/wiki/1972%E5%B9%B49%E6%9C%885%E6%97%A5%E6%85%95%E5%B0%BC%E9%BB%91%E8%89%B2%E4%B9%9D%E6%9C%88%E4%BC%9A%E4%BA%BA%E8%B4%A8%E5%8D%B1%E6%9C%BA'},
    {'时间': '1983年10月23日', '名称': '黎巴嫩美军兵营爆炸案', '组织': '伊斯兰革命卫队', '类型': '自杀式袭击', '介绍': '伊斯兰革命卫队炸毁了位于黎巴嫩贝鲁特的美国海军陆战队兵营，导致241名美国军人死亡。', '链接': 'https://zh.wikipedia.org/wiki/%E9%BB%8E%E5%B7%B4%E5%AB%A9%E7%BE%8E%E5%86%9B%E5%85%B5%E8%90%A5%E7%88%86%E7%82%B8%E6%A1%88'},
    {'时间': '1993年2月26日', '名称': '世界贸易中心爆炸案', '组织': '伊斯兰教圣战组织', '类型': '炸弹袭击', '介绍': '恐怖分子在纽约世界贸易中心停车场里引爆了一辆载有炸药的卡车，导致六人死亡并造成大规模破坏。', '链接': 'https://zh.wikipedia.org/wiki/1993%E5%B9%B42%E6%9C%8826%E6%97%A5%E4%B8%96%E7%95%8C%E8%B4%B8%E6%98%93%E4%B8%AD%E5%BF%83%E7%88%86%E7%82%B8%E6%A1%88'},
]

# 创建 Beautiful Soup 对象
soup = BeautifulSoup('', 'html.parser')

# 创建表格元素
table = soup.new_tag('table')

# 创建表头
thead = soup.new_tag('thead')
header = soup.new_tag('tr')
header.append(soup.new_tag('th', text='事件发生时间'))
header.append(soup.new_tag('th', text='事件名称'))
header.append(soup.new_tag('th', text='事件组织名'))
header.append(soup.new_tag('th', text='事件类型'))
header.append(soup.new_tag('th', text='详细内容介绍'))
header.append(soup.new_tag('th', text='维基百科链接'))
thead.append(header)

# 将表头添加到表格元素中
table.append(thead)

# 遍历表格数据
for event in events:
    row = soup.new_tag('tr')
    row.append(soup.new_tag('td', text=event['时间']))
    row.append(soup.new_tag('td', text=event['名称']))
    row.append(soup.new_tag('td', text=event['组织']))
    row.append(soup.new_tag('td', text=event['类型']))
    row.append(soup.new_tag('td', text=event['介绍']))
    row.append(soup.new_tag('td', soup.new_tag('a', href=event['链接'], text='维基百科')))
    table.append(row)

# 将表格元素添加到表格容器中
table_container = soup.find('div', id='table-container')
table_container.append(table)

# 将生成的 HTML 代码写入文件或输出到控制台
with open('table.html', 'w') as f:
    f.write(str(soup))
print(soup.prettify())
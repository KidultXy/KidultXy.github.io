
import pandas as pd
from pyecharts.charts import Line
from pyecharts import options as opts

# 读取CSV文件数据
data = pd.read_csv('./data/influence/reactions-to-terrorism.csv')

# 创建折线图对象
line_chart = Line()
x = data['Year'] = list(map(str, data['Year'].tolist()))
# 添加x轴数据
line_chart.add_xaxis(x)

# 添加y轴数据

line_chart.add_yaxis("Travel overseas", data['Travel overseas'].tolist())
line_chart.add_yaxis("Fly on aeroplanes", data['Fly on aeroplanes'].tolist())
line_chart.add_yaxis("Go into skyscrapers", data['Go into skyscrapers'].tolist())
line_chart.add_yaxis("Attend events where there are thousands of people", data['Attend events where there are thousands of people'].tolist())

# 设置全局配置项
line_chart.set_global_opts(
    title_opts=opts.TitleOpts(title="Travel and Airplane Data"),
    xaxis_opts=opts.AxisOpts(name="Year", type_="category"),
    yaxis_opts=opts.AxisOpts(name="Number of people", type_="value"),
    legend_opts=opts.LegendOpts(orient="horizontal", pos_bottom="bottom", pos_left="center"),
    tooltip_opts = opts.TooltipOpts(trigger="axis"),
    toolbox_opts = opts.ToolboxOpts(is_show=True)
)

# 渲染图表
line_chart.render("test_line_chart.html")


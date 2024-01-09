#读取数据
import pandas as pd

data=pd.read_excel('../data/data_2020.xlsx')


data.to_csv('../data/data_2020.csv')
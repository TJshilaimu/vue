[toc]
#商品筛选
1，每个商品前面的checkbox要跟每个商品绑定，可以在循环的时候给对象单独加个属性，再判断每个checkbox是否是true，
生成新列表进行价格渲染。
2.全选的按钮可以利用计算属性的get和set进行判断，get中采用数组的every循环，set（val）则将列表的每个项的checkbox属性设置为val
3.商品数量在价格那里相乘，加减数量则进行if-else判断
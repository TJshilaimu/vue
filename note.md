[toc] #商品筛选
1，每个商品前面的 checkbox 要跟每个商品绑定，可以在循环的时候给对象单独加个属性，再判断每个 checkbox 是否是 true，
生成新列表进行价格渲染。 2.全选的按钮可以利用计算属性的 get 和 set 进行判断，get 中采用数组的 every 循环，set（val）则将列表的每个项的 checkbox 属性设置为 val 3.商品数量在价格那里相乘，加减数量则进行 if-else 判断

4.

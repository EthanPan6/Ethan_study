# python 中可以自动推断数据类型
# 通过 type 可以查看变量的数据类型

name = "jack"
age = 18
isname = True
height = 1.9
print(type(name))
print(type(age))
print(type(isname))
print(type(height))

#  不同数据类型的计算
#    + 数字型之间可以直接计算
#      - 布尔类型True对应为1 False对应为0
i=10
f=1.6
b=True
print(i*f+b)

#    +字符串变量之间通过 + 拼接
firstName="张"
lastName="三"
print(firstName+lastName)

#    +字符串变量可以和整数使用 * 重复拼接相同的字符串
print('-'*50)

#    +字符串变量不可以和数字类型之间运算,需要将数字使用str(number)转化为字符串
# print(name+age)  报错
print(name+str(age))
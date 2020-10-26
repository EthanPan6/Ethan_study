# f'{变量}为变量在模板字符串中占位

name = "张三"
score = 98
msg = name+'得了'+str(score)+'分'
print(msg)

msg2 = f'{name}得了{score}分'
print(msg2)

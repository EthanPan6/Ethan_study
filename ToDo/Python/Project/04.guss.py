import random

secret = random.randint(1, 100)
print("猜数小游戏,最多可猜六次哦")
tries = 1
while tries <= 6:
    guss = int(input('1-100的整数,第%d次猜,请输入' % (tries)))
    if guss == secret:
        print("恭喜你猜对了!你猜了%d次\n就是这个:%d!" % (tries, secret))
        break
    elif guss > secret:
        print("不好意思,你的数大了一点!")
    else:
        print("不好意思,你的数小了一点!")
    tries += 1
else:
    print("哎呀,怎么也猜不中!再见了!")

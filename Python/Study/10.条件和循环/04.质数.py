maxValue = int(input("请输入临界值"))

for num in range(2, maxValue):
    for i in range(2, num):
        if num % i == 0:
            print(f'{num}是一个合数')
            break
    else:
        print(f'{num}是一个质数')

num = int(input('今天星期几呢'))
if num > 5:
    print('have a good weekend')
elif num == 1:
    print('start working')
elif num > 1 and num < 5:
    print('work hard')
else:
    print('the last workday')

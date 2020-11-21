numbers=list(range(1,21))
even=[]
odd=[]
while len(numbers)>0:
    number=numbers.pop()
    if number%2==0:
        even.append(number)
    else:
        odd.append(number)
print(even)
print(odd)
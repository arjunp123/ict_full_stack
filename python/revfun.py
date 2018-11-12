def reverse(n):
    rev=0
    rem=0
    while(n>0):
        rem=n%10
        rev=rev*10 + rem
        n //= 10
    return rev
num=int(input("enter a number"))
result=reverse(num)
print(result)
num = int(input("enter a nummber :"))
x=num
rem=0
reversed=0

while(num>0):
    rem=num%10
    reversed=(reversed*10)+rem
    num= num//10
print("reverse of the number",x,"is",reversed)  
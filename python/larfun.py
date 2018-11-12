def largest(x,y,z):
    if(x>y):
        if(x>z):
            return x
        else:
            return z
    else:
        if(y>z):
            return y
        else:
            return z

a=int(input("ENTER NO 1 :"))
b=int(input("ENTER NO 2 :"))
c=int(input("ENTER NO 3 :"))

result=largest(a,b,c)
print(result,"is largest number")
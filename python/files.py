myfile = open("hello.txt","w")
myfile.write("ICTA CALICUT FULL STACK DEVELOPER")
myfile.close()
print("file generated succesfully")

myfile = open("hello.txt","r")
s=myfile.read()
print(s)
myfile.close()

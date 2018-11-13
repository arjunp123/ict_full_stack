class Students:


    def __init__(self,x,y):
        self.name=x
        self.rollno=y

    def printdata(self):
        print("Name   :",self.name)
        print("roll no:",self.rollno)

    def getage(self,myage):
        print("Age is :"+str(myage))
    

z=Students("Rahul ",23)
x=int(input("enter the age"))
z.printdata()
z.getage(x)






# def getage(self,myage):        
# # print("age is "+str(myage))
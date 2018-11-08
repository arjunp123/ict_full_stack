function read()
  {
    var name = document.getElementById("getname").value;
    console.log(name)
    var rollno = document.getElementById("getrollno").value;
    console.log(rollno)
    var addno = document.getElementById("getaddno").value;
    console.log(addno)
    var age = document.getElementById("getage").value;
   if(age>=18)
   {
       alert("ELIGIBLE")
       console.log("ELIGIBLE")
   }
   else
   {
       alert("YOU ARE NOT ELIGIBLE")
       console.log("YOU ARE NOT ELIGIBLE")
   }
  }

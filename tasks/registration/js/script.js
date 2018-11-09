function read()
  {
  
    var pass = document.getElementById("getpass").value;
    var op = document.getElementById("district")
    var dist = op.options[op.selectedIndex].text;
    console.log(dist);
   if(pass=1234)
   {
       alert("SUCCESSFULL")
       console.log("SUCCESSFULL")
   }
   else
   {
       alert("WRONG PASSWORD")
       console.log("WRONG PASSWORD")
   }
  }

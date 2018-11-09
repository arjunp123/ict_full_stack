function read()
  {
    var no1 = document.getElementById("num1").value;
    var no2 = document.getElementById("num2").value; 
    var no3 = document.getElementById("num3").value; 

    
    var x = parseInt(no1);
    var y = parseInt(no2);
    var z = parseInt(no3)

    if(x>y)
    {
        if(x>z)
        {
            console.log(x);
            var res=x;
        }
        else
        {
           console.log(z);
           var res=z;
        }
    }
    else
    {
        if(y>z)
        {    
          console.log(y);
          var res=y;
        }
        else
        {
            console.log(z);
            var res=z;
        }
    }
    document.getElementById("result").innerHTML= "<table class='table'><tr><td>'result is  : '</td> <td> " +res+ "</td></tr> </table>"
  }


  function readsmall()
  {
    var no1 = document.getElementById("num1").value;
    var no2 = document.getElementById("num2").value; 
    var no3 = document.getElementById("num3").value; 

    
    var x = parseInt(no1);
    var y = parseInt(no2);
    var z = parseInt(no3)

    if(x<y)
    {
        if(x<z)
        {
          var res=x;
        }
        else
        {
          var res=z;
        }
    }
    else
    {
        if(y<z)
        {    
         var res=y;
        }
        else
        {
           var res=z
        }
    }
    document.getElementById("result").innerHTML=res;
  }
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
        }
        else
        {
           console.log(z);
        }
    }
    else
    {
        if(y>z)
        {    
          console.log(y);
        }
        else
        {
            console.log(z);
        }
    }
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
            console.log(x);
        }
        else
        {
           console.log(z);
        }
    }
    else
    {
        if(y<z)
        {    
          console.log(y);
        }
        else
        {
            console.log(z);
        }
    }
  }
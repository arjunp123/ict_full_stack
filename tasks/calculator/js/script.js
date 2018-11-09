function read()
  {
    var operand1 = document.getElementById("op1").value;
    var operand2 = document.getElementById("op2").value; 
    
    var x = parseInt(operand1);
    var y = parseInt(operand2);

    var op = document.getElementById("operation");
    var operation = op.options[op.selectedIndex].value;

    if(operation == "add")
    {
        var res = x+y;
        console.log(res);
    }
    else if(operation == "sub")
    {
        var res = x-y;
        console.log(res);
    }
    else if(operation == "div")
    {
        var res = x/y;
        console.log(res);
    }
    else if(operation == "mul")
    {
        var res = x*y;
        console.log(res);
    }
    
  }

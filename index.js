// Variable Shadowing : When a variable is declared in a certain scope having the same name defined on its outer scope andwhen we call the variable from the inner scope, 
//the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing.


function var_test(){
    var outer = "outie"
    console.log(outer)          //"Outie"

    if (outer == "outie"){
        var outer = "innie"
        console.log(outer)      //"Innie"
    }

    console.log(outer)          //"Innie"
}

var_test()


function let_const_test1(){
    let outer = "outie"
    console.log(outer)          //"Outie"

    if (outer == "outie"){
        let outer = "innie"
        console.log(outer)      //"Innie", Since, let and const is block scoped , its values is not changed outside the block.
    }

    console.log(outer)          //"Outie"
}

let_const_test1()


//Dead Zone : TDZ is a Zone, where the JS compiler throw a reference Error while trying to accessing an undeclared variable. TDZ ends when the variable gets initialized or declared.

{
  
  //console.log(a) - It is a dead Zone for the variable a, because it is not declared. It throws a reference error.
  // TDZ
  // TDZ
  let a; // TDZ for "a" ends here, since it got declared, TDZ is only for let and const, not for var. 
  
}

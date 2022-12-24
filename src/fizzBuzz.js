
 //this is the code for test
 function fizzBuzz (i){
  if ((i % 3 == 0) && (i % 5 == 0)){
    return "FizzBuzz"
  }
  else if ( i % 5 == 0){
    return "Buzz"
  }
  else if ( i % 3 == 0){
    return "Fizz"
  }
}
//this is the  first code for the console
  
  var array  = [i];
  for (var i = 1; i <=100; i++){//declarmos variable "i" es igual a 0-->
  if (i % 15 == 0) array.push("fizzBuzz"); //condicion 1 ejecuta Fizzbuzz si dividimos i entre 15 y resulta 0  
  else if (i % 3 == 0)array.push("fizz"); //condicion 2 si condicion 1 no se da e i es dividido entre 3 es cero ejecuta fizz
  else if (i % 5 == 0) array.push("buzz"); //condicion 3 si condiciones 1 y 2 no se dan e i dividido entra 5 es igual a cero ejecuta buzz
  else array.push(i)
  }

 console.info (array) 
  
 
 


   




const fizzBuzz = require ("../src/fizzBuzz")

test ("multiplos de 3 es igual a Fizz",() =>{
  expect(fizzBuzz(9)).toBe("Fizz");
});

test ("multiplos de 5 igual a Buzz",() =>{
  expect(fizzBuzz(10)).toBe("Buzz");
});

test ("mulpitlos de 15 igual a FizzBuzz",() =>{
  expect(fizzBuzz(15)).toBe("FizzBuzz");
})
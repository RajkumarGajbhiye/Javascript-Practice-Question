//Que1.Write a JS code to print numbers from 1 to 10**
//Function `printNumbers()` prints numbers from 1 to 10 using for loop.
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
  printNumbers(10);


/*Que.2.**Write a JS code to find the no of digits in a number**
//Function digitCount() to returns the number of digits in a given number using while loop.
**Input:**
56231

**Output:**
5*/

function digitCount(n) {
    let NumberofDigits = 0;
    while (n != 0) {
      n = Math.floor(n / 10);
      ++NumberofDigits;
    }
    return NumberofDigits;
  }
  console.log(digitCount(56231));

  /*Que.3.**Check if a number is odd or even in JavaScript**

Function `isEvenOrOdd()` checks if input number is even or odd by using “%” operator in JavaScript.

1. Print “Number is even” if the number is divisible by 2.
2. Else print “Number is odd” if the number returns a remainder when divided by 2.

**Input**

isEvenorOdd(10)

**Output**

10 is a Even number*/
function isEvenOrOdd(n) {
    let number = n % 2;
    if (number % 2 == 0) {
      console.log("Number is even");
    }
    else {
      console.log("Number is odd");
    }
  }
  isEvenOrOdd(10);


  /*Que.4.**Write a function that returns the square of a number**

Function **`findSquare()`** returns the square of the input number which is passed as an argument in the function call.

**Input:**

console.log(findSquare(2))

**Output:**

4*/
function findSquare(n) {
    let square = n * n;
    return square;
  }
  console.log(findSquare(2));
  

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

/** Que.1.Write a JavaScript function that reverse a number.**

**Example
Sample Input:
32243
Expected Output: 
34223**

Explanation:
Assume n = 1000.
Convert a number to a string :
Code : -> n = n + "";
Note : There are different ways to convert number to string :

String literal -> str = "" + num + "";
String constructor -> str = String(num);
toString -> str = num.toString();
String Literal simple -> str = "" + num;
The split() method is used to split a String object into an array of strings by separating the string into substrings.
Code : console.log('1000'.split(""));
Output : ["1", "0", "0", "0"]

The reverse() method is used to reverse an array in place. The first array element becomes the last and the last becomes the first.
Code : console.log(["1", "0", "0", "0"].reverse());
Output : ["0", "0", "0", "1"]

The join() method is used to join all elements of an array into a string.
Code : console.log(["1", "0", "0", "0"].reverse().join(""));
The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
Output : 1*/


function ReverseANumber(n) {
    n = n + "";
    return n.split("").reverse().join("");
  }
  console.log(Number(ReverseANumber(32243)));



 /** Que.2. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.**

**Sample Output:**

**"0 is even"
"1 is odd"
"2 is even"
__________
and so on.**/

function IterateFrom0To15CheckoddAndEvenNumber() {
    for (let n = 0; n <= 15; n++)
      if (n === 0) {
        console.log(n + " is even ");
      }
      else if (n % 2 == 0) {
        console.log(n + " is even ");
      }
      else {
        console.log(n + " is odd ");
      }
  }
  IterateFrom0To15CheckoddAndEvenNumber();



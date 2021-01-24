# Intro to Big O Project

Clone the project from the [starter](https://github.com/appacademy-starters/algorithms-big-o-starter).

## Learning Goals

* Determine the time and space complexity based on analysis of the function
* Determine the time complexity of some of the built-in Array functions
* Prove your time complexity using timing benchmarks
* Chart chart timing benchmarks on Google Sheets (not required)

<br>

# Part 1: Analyzing Array Functions

Since the start of the course, you've all grown comfortable in using many
JavaScript built-in functions, mostly, on arrays. Using methods like `push`,
`pop`, `shift`, `unshift` have become second nature in your every day projects.
Enumerable functions like `filter`, `map`, `reduce`, `every`, etc. have also
become part of your developer tool belt.

As we learn more and more about Big O and the "cost" associated with different
functions, we will come to learn that some of these functions we've been using
may or may not be as efficient as we thought.

Before we start our tests, here is some code to generate an array of random
numbers. Pick a "max" number range you want to work with.  As a suggestion,
use the inputs 1, 10, 100, 1,000, 10,000, and 1,000,000.

```js
const randomNumberArr = (max) // => {
    const res = new Array();

    for (let i = 0; i < max; i++) {
        const randomNumber = Math.floor(Math.random() * Math.floor(max));

        res.push(randomNumber);
    }

    return res;
};
```

We also need a function to return the time, in milliseconds, it took to execute
the function.  Here is the code for you to do that.  Feel free to play around
with it!

```js
const timer = () // => {
    const start = new Date();
    return {
        stop: () // => {
            const end  = new Date();
            const time = end.getTime() - start.getTime();
            console.log('Timer finished in', time, 'ms');
        }
    }
};

const t1 = timer();
 put the code you want to benchmark here
t1.stop();  this stops the timer and logs, to the console, your output in ms

const t2 = timer();
 other code
t2.stop();  stops timer for t2
 check console for output
```

### `push`

Use this function to test the JavaScript Array `push` method. Take note that the
function will be bound to the for loop iterating through the array. The goal is
not to analyze the function, but rather, the `push` method itself.  

```js
const jsPush = (li) // => {
    const res = new Array();

    for (let i = 0; i < li.length; i++) {
        res.push(li[i]);
    }

    return res;
};
```

Feel free to play around with the function or change it up to suit the test that
you and your pair feel comfortable with.  Based on your timing benchmarks, what
do you think the time complexity of the `push` function is?

### `pop`

Use this function to test the JavaScript Array `pop` method. Just like the push
method, the function will be bound to the for loop iterating through the array.
The goal is not to analyze the function, but rather, the `pop` method itself.  

```js
const jsPop = (li) // => {
    for (let i = 0; i < li.length; i++) {
        li.pop()
    }
    
    return li;
};
```

Feel free to play around with the function or change it up to suit the test that
you and your pair feel comfortable with.  Based on your timing benchmarks, what
do you think the time complexity of the `pop` function is?

### `enumerables`

Hopefully, testing the `push` and `pop` method was was a good warm up to start
today's project.

Take a few moments and discuss with your pair what you think the time complexity
of the JS built-in `map`, `filter`, `reduce`, `every`, etc. function is.  

Go ahead and use these enumerables over different length inputs and determine
the time complexity based on those benchmarks.  If you or your pair have a
Google account and are more visual learners, throw those inputs in a Google
Sheets and try see it for yourself!

### `unshift`

Before running the test, what do you think the time complexity of the JavaScript
Array `unshift` is?  Take a few moments with your pair and discuss it.

Use this function to test the JavaScript Array `unshift` method.  Feel free to
play around with the function or test something you and your pair would like to
try.  

```js
const jsUnshift = (li) // => {
    const res = new Array();

    for (let i = 0; i < li.length; i++) {
        res.unshift(li[i]);
    }
    
    return li;
};
```

Based on your benchmarks, was your original hypothesis correct?

### `shift`

Before running the test, what do you think the time complexity of the JavaScript
Array `shift` is?  Take a few moments with your pair and discuss it.

Use this function to test the JavaScript Array `shift` method.  Feel free to
play around with the function or test something you and your pair would like to
try.  

```js
const jsShift = (li) // => {
    const res = new Array();

    for (let i = 0; i < li.length; i++) {
        li.shift();
    }
    
    return li;
};
```

Based on your benchmarks, was your original hypothesis correct?

### Preview for tomorrow

You may be scratching your head at this point.  Functions that you thought were
constant may actually run in linear time.  We'll learn more about this
during tomorrow's lecture when we do a deep dive on the JavaScript Array data
structure.

For now, move on to the next project.  It's a bunch of algorithms to really get
you warmed up for the next few weeks!

<br>

# Part 2: Practice Problems

Let's start working your problem solving skills! Understanding Big-O is incredibly 
helpful in being able to approach a problem and improve your solutions. Recall Polya's 
Problem Solving steps: 
* Understand the problem
* Devise a plan
* Carry out the plan
* Look back and refactor if necessary

In the context of this lesson, try to follow some of these steps when evaluating
your solutions:
* Determine and explain the time and space complexity of a function after you
come to a solution
* Discuss the potential for a more optimal solution
* If a more optimal solution is discussed, implement that solution

<br>

### logBetween

Define a function `logBetween(lowNum, highNum)` that will return an array from `lowNum` 
to `highNum`, inclusive. Inclusive means that the range includes `lowNum` and `highNum`.

Examples:
```js
logBetween(-1, 2);  // => [-1, 0, 1, 2] 
logBetween(14, 6);  // => []
logBetween(4,6);  // => [4, 5, 6]
```

<br><br>

### logBetweenStepper

Write a function `logBetweenStepper(min, max, step)` that takes in three 
numbers as parameters. The function should return an array ofnumbers between 
`min` and `max` at `step` intervals.

Examples:
```js
logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]
```

<br><br>

### printReverse

Write a function `printReverse(min, max)` that returns an array of all 
numbers from max to min (exclusive), in reverse order.

Examples:
```js
printReverse(13, 18) // => [17, 16, 15, 14]
printReverse(90, 94) // => [91, 92, 93]
```

<br><br>

### fizzBuzz

Define a function `fizzBuzz(max)` that takes a number and returns an array of 
every number from 0 to `max` that is divisible by either 3 or 5, but not both.

Examples:
```js
fizzBuzz(20); // => [3, 5, 6, 9, 10, 12, 18]
```

<br><br>

### isPrime

Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. Assume `number` is a positive integer.

Examples:
```js
isPrime(2);  // => true
isPrime(10);  // => false
isPrime(11);  // => true
isPrime(9);  // => false
isPrime(2017);  // => true
```

<br><br>

### maxValue

Write a function `maxValue(array)` that returns the largest value in `array`.
Assume `array` is an array of numbers.

Examples:
```js
maxValue([12, 6, 43, 2]);  // => 43
maxValue([]);  // => null
maxValue([-4, -10, 0.43]);  // => 0.43
```

<br><br>

### myIndexOf

Write a function `myIndexOf(array, target)` that takes in an array of
numbers and a target number as arguments. It should return the index value
of the target if it is present in the array or -1 if it is not present.

CONSTRAINT: Do not use the indexOf or includes method
Examples:
```js
myIndexOf([1,2,3,4],4); // => 3
myIndexOf([5,6,7,8],2); // => -1
```

<br><br>

### factorArray

Write a function `factorArray(array, number)` that takes in an array of
numbers and a number and returns an array of all the factors.

Examples:
```js
factorArray([2,3,4,5,6],20) // => [2,4,5]
factorArray([2,3,4,5,6],35) // => [5]
factorArray([10,15,20,25],5) // => []
```

<br><br>

### oddRange

Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:
```js
oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6);  // => [ 1, 3, 5 ]
```

<br><br>

### reverseHyphenString

Write a function reverseHyphenString(string) that takes in a hyphenated 
string and returns a the hyphenated string reversed.

Examples:
```js
reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"
```

<br><br>

### intersect

Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Examples:
```js
intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []
```

<br><br>

### mirrorArray

Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:
```js
mirrorArray([1,2,3]);
 // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); 
 // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
```

<br><br>

### abbreviate

Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:
const vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:
```js
abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'

```

<br><br>

### adults

Write a function `adults(people)` that takes in an array of person
objects. The function should return an array containing the names of
those who have an age of 18 or higher.

Example:
```js
const ppl = [
  {name: 'John', age: 20},
  {name: 'Jim', age: 13},
  {name: 'Jane', age: 18},
  {name: 'Bob', age: 7}
];

adults(ppl); // => [ 'John', 'Jane' ]

```

<br><br>

### countScores

Write a function `countScores(people)` that takes in an array of score
 objects (people) as its input. A score object has two key-value pairs:
 a name (string) and a score (number). `countScores(people)` should
 return an object that has key-value pairs where each name is a key and
 the value is their total score.

```js
 // Example 1:
 const ppl = [ {name: "Anthony", score: 10},
             {name: "Fred", score : 10},
             {name: "Anthony", score: -8},
             {name: "Winnie", score: 12} ];
 countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }

 // Example 2
 const peeps = [
   {name: "Anthony", score: 2},
   {name: "Winnie", score: 2},
   {name: "Fred", score: 2},
   {name: "Winnie", score: 2},
   {name: "Fred", score: 2},
   {name: "Anthony", score: 2},
   {name: "Winnie", score: 2}
 ];

 countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }
```

<br><br>

### firstNPrimes

Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

 Examples:
```js
 firstNPrimes(0);  // => []
 firstNPrimes(1);  // => [2]
 firstNPrimes(4);  // => [2, 3, 5, 7]

```

<br><br>

### peakFinder

 Write a function `peakFinder(array)` that takes in an array of numbers.
 It should return an array containing the indices of all the peaks. A
 peak is an element that is greater than both of its neighbors. If it is
 the first or last element, it is a peak if it is greater than its one
 neighbor. Assume the array has a length of at least 2.

 Examples:
```js
 peakFinder([1, 2, 3, 2, 1]); // => [2]
 peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
 peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]
```

<br><br>

### divisibleByThreePairSum

 Write a function `divisibleByThreePairSum(array)` that takes an array of
 numbers. It should return an array of all the pairs of indices, whose
 elements sum to a multiple of three.

 Examples:
```js

 const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
 arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

 const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
 arr2 // => [[1, 3]]
```

<br><br>

### zipArray

 Write a function `zipArray(arr1, arr2)` that takes in two arrays and
 "zips" them together by returning a single 2D-array. Assume that both
 input arrays have the same length.

 Examples:
```js

 const a1 = ['a', 'b', 'c', 'd'];
 const a2 = [10, 20, 30, 40];

 const result = zipArray(a1, a2);
 result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
```

<br><br>

### twoDimensionalTotal

 Write a function `twoDimensionalTotal(array)` that takes in a 2D array
 of numbers and returns the total sum of all elements.

```js
 const arr1 = [
   [5, 2, 5, 3],
   [12, 13],
 ];

 twoDimensionalTotal(arr1);  // => 40

 const arr2 = [
   [2],
   [1, 9],
   [1, 1, 1]
 ]

 twoDimensionalTotal(arr2);  // => 15
```

<br><br>

### countInnerElement

Write a function `countInnerElement(arr)` that takes in a 2-D array of 
 elements. Each element of 'arr' is a sub array that contains multiple 
 elements. The number of elements contained in each sub array are not the 
 same. We can assume each sub array contains at least one element. We should 
 return an object that counts how many times each element in each sub array 
 repeats.

 Examples:
```js
 var arr1 = [
   [1,2,4,5],
   [2,7,4],
   [1,4,5,2,7]
 ]

 countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

 var arr2 = [
   ['a','b','c','d'],
   ['a','b'],
   ['a','c','d','a']
 ]

 countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}
```

<br><br>

### twoDiff

 Write a function `twoDiff(array)`, given an array of numbers, return a 2-D 
 array, where each of the sub array are indices of the two numbers such 
 that their difference is 2. If there are no such numbers, return an empty
 array.

 NOTE: The pairs are unique.
 HINT: Account for negative difference too!

 Examples:
```js

 twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
 twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
 twoDiff([])  // => []
```

<br><br>

### arrayDiff

Write a function `arrayDiff(arr1, arr2)` that takes in two arrays. The 
 function should return a new array, containing the elements of arr1 that
 are not also in arr2.

 Note: Assume both arrays have unique elements.

 Examples:
```js

 const array1 = [1,23,2,43,3,4]
 const array2 = [3, 23]
 arrayDiff(array1, array2)  // => [1, 2, 43 ,4]

 const array3 = ['a', 'ab', 'c', 'd', 'c']
 const array4 = ['d']
 arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']
```

<br><br>

### valueCounter

Write a function `valueCounter(obj, val)` that takes in an object and a 
 value, the function should return the number of times 'val' repeats as a
 value in 'obj'.

 Examples:
```js

 const obj1 = {1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne'}
 valueCounter(obj1, 'Anne')  // => 3

 const obj2 = {Anne: 50, Alvin: 1, JJ: 100, Roman: 100}
 valueCounter(obj2, 88)  // => 0

 const pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
 valueCounter(pairs, 'Roman')  // => 2
```

<br><br>

### elementCount

 Write a function elementCount(array) that returns a object. Each key
 corresponds to an element in the array and the value corresponds to how
 many times that element appears in the array.

 Example:
```js
 elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
 elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }
```

<br><br>

### nextTwoPrimes

 Write a function `nextTwoPrimes(num)` that takes in a number `num` and
 returns the next two prime numbers greater than `num`.

 Examples:
```js
 nextTwoPrimes(2);  // => [ 3, 5 ]
 nextTwoPrimes(3);  // => [ 5, 7 ]
 nextTwoPrimes(7);  // => [ 11, 13 ]
 nextTwoPrimes(8);  // => [ 11, 13 ]
 nextTwoPrimes(20);  // => [ 23, 29 ]
 nextTwoPrimes(97);  // => [ 101, 103 ]
```

<br><br>

### pairProduct

 Write a function `pairProduct(arr, num)` that accepts an array of
 numbers (arr) and a target number (num). It should return pairs of
 indices whose elements multiply to `num`. No pair should appear twice in
 the result.

 CONSTRAINT: Use only `while` loops. No `for` loops.

 Examples:
```js
 pairProduct([1,2,3,4,5], 4); // => [ [ 0, 3 ] ]
 pairProduct([1,2,3,4,5], 8); // => [ [ 1, 3 ] ]
 pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]
```

<br><br>

### twoDimensionalSize

 Write a function twoDimensionalSize(array) that takes in a 2D-array as
 an argument. The function should return the total number of elements in
 the 2D-array.

 Examples:
```js
 var arr1 = [
   [1, 2, 3],
   [4, 5],
   [6, 7, 8, 9]
 ];
 twoDimensionalSize(arr1);  // => 9

 var arr2 = [
   ['a'],
   ['b', 'c', 'd', 'e']
 ];
 twoDimensionalSize(arr2);  // => 5
```

<br><br>

### longWordCount

 Write a function `longWordCount(string)` that takes in a string and
 returns the number of words longer than 7 characters.

 Examples:
```js
 longWordCount("");  // => 0
 longWordCount("short words only");  // => 0
 longWordCount("one reallylong word");  // => 1
 longWordCount("two reallylong words inthisstring");  // => 2
 longWordCount("allwordword longwordword wordswordword");  // => 3
 longWordCount("seventy schfifty five");  // => 1
```

<br><br>

### factorial

 Write a function `factorial(n)`, that returns the factorial of the
 number `n`. For example, the factorial of 4 is `4 * 3 * 2 * 1 = 24`.

 Examples:
```js
 factorial(1);  // => 1
 factorial(4);  // => 24
 factorial(5);  // => 120
 factorial(10);  // => 3628800
```

<br><br>

### lcm

 Write a function `lcm(num1, num2)` that returns the lowest number which
 is a multiple of both num1 and num2.

 Examples:
```js
 lcm(2, 3);  // => 6
 lcm(6, 10);  // => 30
 lcm(24, 26);  // => 312
```

<br><br>

### hipsterfyWord

 Write a function hipsterfyWord(word) that takes takes in a string and returns
 the string with the last vowel removed. 'y' is not a vowel.

 Examples:
```js
 hipsterfyWord('proper') // => 'propr'
 hipsterfyWord('tonic') // => 'tonc'
 hipsterfyWord('PANTHER') // => 'PANTHR'
 hipsterfyWord('BACKWARDS') // => 'BACKWRDS'
```

<br><br>

### hipsterfy

 Write a function `hipsterfy(sentence)` that takes takes a string
 containing several words as input. Remove the last vowel from each word.
 `'y'` is not a vowel.

 Examples:
```js
 hipsterfy("proper");  // => "propr"
 hipsterfy("proper tonic panther");  // => "propr tonc panthr"
 hipsterfy("towel flicker banana");  // => "towl flickr banan"
 hipsterfy("runner anaconda");  // => "runnr anacond"
 hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"
```

<br><br>

### objectToString

 Write a function `objectToString(count)` that takes in a char count object 
 and returns a string representing the counts of each character.

 Examples:
```js
 objectToString({a : 2, b: 4, c: 1}) // => 'aabbbbc'
 objectToString({b: 1, o: 2, t: 1}) // => 'boot'
```

<br><br>

### shortestWord

 Write a function shortestWord(sentence) that returns the shortest word of a 
 sentence. You can assume that the words of the sentence all have different 
 lengths.

 Examples:
```js
 shortestWord('app academy is cool') // => 'is'
 shortestWord('programming bootcamp') // => 'bootcamp'
```

<br><br>

### greatestCommonFactor

 Write a function greatestCommonFactor(num1, num2) that returns the largest 
 number that is divides both `num1` and `num2`.

 Examples:
```js
 greatestCommonFactor(15, 25) // => 5
 greatestCommonFactor(16, 24) // => 8
 greatestCommonFactor(7, 11) // => 1
```

<br><br>

### isPassing

 Write a function isPassing(assessments) that takes in an array of assessment 
 objects. The function should return a true if the average assessment score is 
 at least 70. It should return false otherwise.

 Examples:
```js
 var assessments1 = [
   {number: 1, score: 60},
   {number: 2, score: 90},
   {number: 3, score: 80},
   {number: 4, score: 100},
   {number: 5, score: 85}
 ];

 isPassing(assessments1) // => true


 var assessments2 = [
   {number: 1, score: 60},
   {number: 2, score: 20},
   {number: 3, score: 45}
 ];

 isPassing(assessments2) // => false
```

<br><br>

### valueConcat

 Write a function valueConcat(array, obj) that takes in an array and object
 The function should return a new array where each element is concatenated 
 with it's corresponding value from the object.

 Examples:
```js
 const arr = ['alex', 'maurice', 'meagan', 'ali'];
 const obj = {alex: 'bronca', ali: 'harris'}
 valueConcat(arr, obj) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

 valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
 // => [ 'a', 'b2', 'c3' ]
```

<br><br>

### threeInARow

 Write a function `threeInARow(arr)` that takes in an array of numbers
 and returns true if the array contains 3 of the same number
 consecutively. The function should return false otherwise.

 Examples:
```js
 threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
 threeInARow([10, 9, 20, 33, 3, 3]);  // => false;
```

<br><br>

### variableNameify

 Write a function variableNameify(words) that takes in an array of words. The 
 function should return a string representing the variable name obtained by 
 combining the words and captitalizing them in mixCased style.

 Examples:
```js

 variableNameify(['is', 'prime']) // => 'isPrime'
 variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
 variableNameify(['MaX', 'VALUE']) // => 'maxValue'
```

<br><br>

### threeIncreasing

 Write a function `threeIncreasing(arr)` that takes in an array of
 numbers and returns true if the array contains 3 consecutive numbers in
 increasing order. The function should return false otherwise.
 Note that the 3 consecutive numbers should be increasing by 1, so the
 the second  number is 1 greater than the first, and the third number is
 1 greater  than the second.

 Examples:
```js
 threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
 threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false
```

<br><br>

### reverse2D

 Write a function reverse2D(array) that takes in a 2D array of strings. The 
 function should return a string representing the elements of the array in 
 reverse order.

 Examples:
```js
 var arr1 = [
   ['a', 'b', 'c', 'd'],
   ['e', 'f'],
   ['g', 'h', 'i']
 ];

 reverse2D(arr1) // => 'ihgfedcba'


 var arr2 = [
   ['Julian', 'Matt', 'Mike'],
   ['Oscar', 'Patrick']
 ];
 reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'
```

<br><br>

### reverb

 Write a function `reverb(word)` that takes in a word string and returns
 the word with all characters after the last vowel repeated.

 Examples:
```js
 reverb('running');  // => 'runninging'
 reverb('wild');  // => 'wildild'
 reverb('debugged');  // => 'debuggeded'
 reverb('my');  // => 'my'
```

<br><br>

### countRepeats

 Write a function `countRepeats(string)` that takes in a string and
 returns the number of letters that appear more than once in the string.
 You may assume the string contains only lowercase letters. Count the
 number of letters that repeat, not the number of times they repeat in
 the string.

 Examples:
```js
 countRepeats('calvin'); // => 0
 countRepeats('caaaalvin'); // => 1
 countRepeats('pops'); // => 1
 countRepeats('mississippi'); // => 3
 countRepeats('hellobootcampprep'); // => 4
```

<br><br>

### pairsToString

 Write a function `pairsToString(arr)` that takes in an array of pairs.
 The function should return a string corresponding to the pairs.

 Examples:
```js
 var array1 = [
   ['a', 3],
   ['b', 1],
   ['c', 2]
 ];
 pairsToString(array1);  // => 'aaabcc'

 var array2 = [
   ['f', 1],
   ['o', 2],
   ['d', 1],
   ['!', 1]
 ];
 pairsToString(array2);  // => 'food!'

```

<br><br>

### countAdjacentSums

 Write the function `countAdjacentSums(arr, n)` that takes an array and
 number. It should count the number of times that two adjacent numbers in
 an array add up to n.

 Examples:
```js
 countAdjacentSums([1, 5, 1], 6) // => 2
 countAdjacentSums([7, 2, 4, 6], 7) // => 0
 countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3
```

<br><br>

### signFlipCount

 Write a function `signFlipCount` that takes in an array of numbers as
 arguments. The function should return the number of times adjacent
 numbers in the array switch signs from positive to negative or vice
 versa. The number 0 is neither positive nor negative.

 Examples:
```js
 signFlipCount([5, 6, 10, 3]); // => 0
 signFlipCount([-12, 0, -3, -5]); // => 0
 signFlipCount([-12, 10, -3, -5]); // => 2
 signFlipCount([1, -2, -3, -4]); // => 1
 signFlipCount([-1, 11.3, -3, 100]); // => 3
```

<br><br>

### powerSequence

 Write a function `powerSequence(base, length)` that takes in two numbers,
 `base` and `length`. The function should return an array containing a
 power sequence with the given `length`. Assume that the `length` is at
 least 1.

 The first number of a power sequence begins with `base`. The second
 number of the sequence is the product between the first number and the
 base. The third number of the sequence is the product between the second
 number and the base...

 Examples:
```js
 powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
 powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
 powerSequence(8, 3);  // => [ 8, 64, 512 ]

```

<br><br>

### collapseString

 Write a function `collapseString(str)` that takes in a string as an
 argument. The function should return the string where 'streaks' of
 consecutive characters are collapsed to a single character.

 Hint: use the keyword `continue`

 Examples:
```js
 collapseString('apple'); // => 'aple'
 collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
 collapseString('hello   app academy'); // => 'helo ap academy'
```

<br><br>

### oddWordsOut

 Write a function oddWordsOut(sentence) that takes in a sentence string
 and returns the sentence where words with an odd number of characters
 are removed.

 Examples:
```js
 oddWordsOut('go to the store and buy milk');  // => 'go to milk'
 oddWordsOut('what is the answer');  // => 'what is answer'
```

<br><br>

### mindPsAndQs

 Write a function mindPsAndQs(str) that accepts a string of uppercase
 letters. The function should return the length of the longest consecutive
 streak of the letters 'P' and 'Q'.

 Hint: Use two variables. One to track the length of the current streak
 and another to track the length of the longest streak so far. Think of
 using a strategy similar to maxValue. This can also be solved using a
 single loop!

 Nested loops not needed!

 Examples:
```js
 mindPsAndQs('BOOTCAMP');  // => 1
 mindPsAndQs('APCDQQPPC');  // => 4
 mindPsAndQs('PQPQ');  // => 4
 mindPsAndQs('PPPXQPPPQ');  // => 5
```

<br><br>

### commonFactors

 Write a function commonFactors(num1, num2) that returns an array that
 contains the common factors between both numbers. A factor is a number
 that divides another number with no remainder.

 Examples:
```js
 commonFactors(12, 50);  // => [ 1, 2 ]
 commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
 commonFactors(11, 22);  // => [ 1, 11 ]
 commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]
```

<br><br>

### commonPrimeFactors

 Write a function `commonPrimeFactors` that takes in two numbers as
 arguments and returns an array of all prime factors that are common
 between the two numbers. A factor is a number that divides another
 number without resulting in a remainder.

 Examples:
```js
 commonPrimeFactors(12, 50);  // => [ 2 ]
 commonPrimeFactors(6, 24);  // => [ 2, 3 ]
 commonPrimeFactors(11,22);  // => [ 11 ]
 commonPrimeFactors(45, 60);  // => [ 3, 5 ]
```

<br><br>

### splitHalfArray

 Write a function splitHalfArray(array) that takes in an array as an
 argument and returns two halves of that array split in the middle. If
 the array has an odd number of elements, then the middle element should
 be excluded.

 Examples:
```js
 splitHalfArray([1, 2, 3, 4, 5]);
  // => [ [ 1, 2 ], [ 4, 5 ] ]

 splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]
```

<br><br>

### threeUniqueVowels

 Write a function threeUniqueVowels(string) that takes in a string and
 returns true if the string contains at least three different vowels.

 Vowels are a, e, i, o, u

 Examples:
```js
 threeUniqueVowels('delicious');  // => true
 threeUniqueVowels('the bootcamp');  // => true
 threeUniqueVowels('bootcamp');  // => false
 threeUniqueVowels('dog');  // => false
 threeUniqueVowels('go home');  // => false
```

<br><br>

### vowelShift

 Write a function vowelShift(sentence) that takes in a sentence string.
 The function should return a new sentence, where every vowel is replaced
 with the next vowel in the alphabet.

 var vowels = ['a', 'e', 'i', 'o', 'u'];

 Examples:
```js
 vowelShift('bootcamp');  // => 'buutcemp'
 vowelShift('hello world');  // => 'hillu wurld'
 vowelShift('on the hunt');  // => 'un thi hant'
```

<br><br>

### hasSymmetry

 Write a function hasSymmetry(array) that takes in an array. The function 
 should return true if the array has symmetry, false otherwise. For an array 
 to have symmetry, it should be the same forwards and backwards.

 TIP:
 In JavaScript, it is not possible to compare arrays for equality with `===`.
 In other words, `[1, 2, 3] === [1, 2, 3]` evaluates to false.

 Examples:
```js
 hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
 hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
 hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
 hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false
```

<br><br>

### evenSumArray

 Write a function evenSumArray(array) that takes in an array of numbers and 
 returns a new array where each num is replaced with the sum of all even 
 numbers less than or equal to that num.

 Examples:
```js
 evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
 evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]
```

<br><br>

### numsToWords

 Write a function numsToWords(numString) that takes in a string representing a 
 number. The function should return a new string where each digit character is 
 replaced with it's "word" respresentation. Assume the input string only 
 contains numeric characters.

 Examples:
```js
 numsToWords('42') // => 'FourTwo'
 numsToWords('123') // => 'OneTwoThree'
 numsToWords('159598') // => 'OneFiveNineFiveNineEight'
```

<br><br>

### moreDotLessDash

 Write a function `moreDotLessDash(str)` that takes in a string and
 returns the true if the string contains more dots ('.') than dashes
 ('-'), false otherwise.

 Examples:
```js
 moreDotLessDash('2-D arrays are fun. I think.');  // => true
 moreDotLessDash('.-.-.');  // => true
 moreDotLessDash('.-');  // => false
 moreDotLessDash('..--');  // => false
```

<br><br>

### isSorted

 Write a function `isSorted(array)` that takes in an array of numbers and
 returns true if the elements of the array are in increasing sorted order
 and returns false if the elements are not in increasing order.

 CONSTRAINT: Do not use the JS method `.sort()` in your solution

 Examples:
```js
 isSorted([3, 5, 11, 9, 15, 16]);  // => false
 isSorted([3, 5, 11, 13, 15, 16]);  // => true
 isSorted([9, 4, 1, 5, 6, 2]);  // => false
 isSorted([1, 2, 4, 5, 6, 9]);  // => true
```

<br><br>

### toFeet

 Write a function `toFeet(distances)` that takes in an array of distance
 strings. The given distances will either be in `feet` or `yards`. The
 function should return a new array where all the distances are converted
 to feet. There are 3 feet in 1 yard.

 Examples:
```js
 var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
 toFeet(arr1);  // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]
 var arr2 = ['2 yards', '3 feet', '10 yards'];
 toFeet(arr2);  // => [ '6 feet', '3 feet', '30 feet' ]
```

<br><br>

### smallestPrime

 Write a function `smallestPrime(array)` that takes in an array of
 numbers and returns the smallest prime number in the array.

 HINTS:
 - start by creating an `isPrime` helper function
 - the smallest prime number is 2

 Examples:
```js
 var arr1 = [ 6, 7, 12, 11, 5, 4 ];
 smallestPrime(arr1);  // => 5
 var arr2 = [11, -7, 7, 8, 6, 10];
 smallestPrime(arr2);  // => 7
 var arr3 = [];
 smallestPrime(arr3);  // => null
 var arr4 = [4, 6, 8, 10];
 smallestPrime(arr4);  // => null
```

<br><br>

### canConstruct

 Given an arbitrary ransom note string and another string containing letters 
 from all the magazines, write a function that will return true if the ransom 
 note can be constructed from the magazines; otherwise, it will return false.
 Each letter in the magazine string can only be used once in your ransom note.

 Examples:
```js
 canConstruct("a", "b");                // => false
 canConstruct("a", "aa");               // => true
 canConstruct("ababc", "dbaccab");      // => true
 canConstruct("aabbc", "aaaabbbdef");   // => false
```

<br><br>

### safeSpeedChanges

 Write a function safeSpeedChange(speeds) that takes in an array of speed
 numbers. The function should return true if consecutive speeds in the
 array differ by no more than 5, false otherwise.

 Examples:
```js
 safeSpeedChange([3, 3, 2, 6, 8, 7]); // => true
 safeSpeedChange([3, 3, 2, 6, 12, 10]);  // => false
 safeSpeedChange([8, 10, 4, 3, 2]);  // => false
```

<br><br>

### reverseHipsterfy

 Write a function `reverseHipsterfy(sentence)` that takes in a sentence
 and removes all vowels, except the last vowels of every word.

 Examples:
```js
 reverseHipsterfy("proper");  // => 'prper'
 reverseHipsterfy("proper tonic panther");  // => 'prper tnic pnther'
 reverseHipsterfy("bootcamp prep");  // => 'btcamp prep'
 reverseHipsterfy("towel flicker banana");  // => 'twel flcker bnna'
 reverseHipsterfy("runner anaconda");  // => 'rnner ncnda'
 reverseHipsterfy("turtle cheeseburger fries");  // => 'trtle chsbrger fres'
```

<br><br>

### winningHand

 Write a function winningHand(hand1, hand2) that takes in two strings
 representing a hand of 4 cards. Return the string of the hand with the
 higher total score. If there is a tie, return 'DRAW'. Possible cards are
 J, Q, K.

 J = 1 point
 Q = 2 points
 K = 3 points

 Examples:
```js
 winningHand('JQKJ', 'QQJJ');  // => 'JQKJ'
 winningHand('KJKJ', 'QQQK');  // => 'QQQK'
 winningHand('JKJJ', 'QQJJ');  // => 'DRAW'
 winningHand('KJKJ', 'QQQQ');  // => 'DRAW'
```

<br><br>

### shiftChars

 Write a function shiftChars(word, num) that takes in a lowercase string
 and a number. The function should return a string where every character
 of the word is shifted `num` times in the alphabet.
 Use this alphabet array to help:

 var alphabet = [
   'a','b','c','d','e','f','g','h','i','j','k','l','m',
   'n','o','p','q','r','s','t','u','v','w','x','y','z'
 ];

 Examples:
```js
 shiftChars('able', 1);  // => 'bcmf'
 shiftChars('apple', 2); // => 'crrng'
 shiftChars('bootcamp', 3); // => 'errwfdps'
 shiftChars('zebra', 5); // => 'ejgwf'
```

<br><br>

### uncompressString

 Write a function `uncompressString(str)` that takes in a "compressed"
 string and returns the "uncompressed" version of the string. In the
 input `str`, every letter is followed by a single digit number that
 specifies how many times that character is repeated.
 HINT: Use the built-in `Number` function to turn the string
 representation of a number into a number

 Number('42');  // => 42;

 Examples:
```js
 uncompressString('a2b4c1');  // => 'aabbbbc'
 uncompressString('b1o2t1');  // => 'boot'
 uncompressString('x3y1x2z4');  // => 'xxxyxxzzzz'
```

<br><br>

### fibonacci

 Write a function fibonacci(n) that takes in a number that represents the
 length of a sequence. The function should should return the first `n`
 numbers in the fibonacci sequence.
 The first two numbers of the fibonacci sequence are 1 and 1. The next
 number in the sequence can be found by adding the last two numbers in
 the sequence.

 Examples:
```js
 fibonacci(0);  // => []
 fibonacci(1);  // => [ 1 ]
 fibonacci(2);  // => [ 1, 1 ]
 fibonacci(3);  // => [ 1, 1, 2 ]
 fibonacci(5);  // => [ 1, 1, 2, 3, 5 ]
 fibonacci(10);  // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
```

<br><br>

### nickname

 Write a function nickname(name) that takes in a name string and returns
 a string representing their nickname. A nickname is the name up to the
 second vowel repeated twice. See the examples.

 Examples:
```js
 nickname('manuel');  // => 'MANU-MANU'
 nickname('pikachu');  // => 'PIKA-PIKA'
 nickname('bootcamp');  // => 'BOO-BOO'
 nickname('bob');  // => 'BOB-BOB'
```

<br><br>

### removeNthLetter

 Write a function removeNthLetter(word, n) that takes in a string and an
 index `n`. The function should return that word with the character at
 index `n` removed.

 Examples:
```js
 removeNthLetter('bootcamp', 0);  // => 'ootcamp'
 removeNthLetter('bootcamp', 6);  // => 'bootcap'
 removeNthLetter('bootcamp', 4);  // => 'bootamp'
 removeNthLetter('computer', 3);  // => 'comuter'
```

<br><br>

### stopWatch

 Write a function stopWatch(totalSeconds) that takes in a number of
 seconds. The function should return the time string based on that number
 of seconds. The time should be formatted in hours (H), minutes (M), and
 seconds(S) in the form HH:MM:SS.
 Hint: the seconds and minutes count of the time should never
 be greater than 59. How can we use modulo % to accomplish this?

 Examples:
```js
 stopWatch(0);  // => '00:00:00'
 stopWatch(4);  // => '00:00:04'
 stopWatch(128);  // => '00:02:08'
 stopWatch(1234);  // => '00:20:34'
 stopWatch(3612);  // => '01:00:12'
 stopWatch(7640);  // => '02:07:20'
 stopWatch(86400);  // => '24:00:00'
 stopWatch(86522);  // => '24:02:02'
 stopWatch(99999);  // => '27:46:39'
```

<br><br>

### tallyCount

 Write a function tallyCount(array) that takes in an array of strings.
 The function should return an object containing a tally count of the
 strings in the array.

 Examples:
```js
 var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
 tallyCount(arr1);  // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }
 var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
 tallyCount(arr2);  // => { x: 'III', y: 'II', z: 'I' }
```

<br><br>

### tripletSum

 Write a function `tripletSum(array, sum)` that takes in an array of
 numbers (array) and a number (sum). The function should return an array
 containing unique triplets of numbers from the array that equal `sum`
 when added together. You can assume that the input array contains no
 repeated numbers.

 Example:
```js
 var arr1 = [1, 3, 5, 2, 4];
 tripletSum(arr1, 8);  // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]
 tripletSum(arr1, 10);  // => [ [ 1, 5, 4 ], [ 3, 5, 2 ] ]
 tripletSum(arr1, 11);  // => [ [ 5, 2, 4 ] ]
```

<br><br>

### longestBigram

 Write a function `longestBigram(sentence)` that takes in a sentence
 string and returns the longest bigram in the sentence. A bigram is a
 pair of consecutive words.
 When returning the bigram, include the space between the words. Assume
 there will be no punctuation. In the case of a tie, return the earlier
 bigram.

 Examples:
```js
 longestBigram('measure twice cut once');  // => 'measure twice'
 longestBigram("One must have a mind of winter");  // => 'must have'
 longestBigram("go home to eat");  // => 'go home'
 longestBigram("his last assessment is fun");  // => 'last assessment'
```

<br><br>

### maxAdjacentSum

 Write a function `maxAdjacentSum(array)` that takes in an array of
 numbers and returns the maximum sum of adjacent numbers in the array.

 HINT: First think how we can find adjacent elements in an array!

 Examples:
```js
 var arr1 = [5, 6, 11, 3];
 maxAdjacentSum(arr1);  // => 17
 var arr2 = [3, 2, 13, 5, 4, 7];
 maxAdjacentSum(arr2);  // => 18
```

<br><br>

### opposingSums

 Write a function `opposingSums(array)` that takes in an array of numbers
 and returns a new array containing half the number of elements. Assume
 the `array` contains an even number of elements.
 The first element of the new array should be the sum between the 1st and
 last element of the original `array`. The second element of the new array
 should be the sum between the 2nd and 2nd to last element. The third
 element of the new array should be the sum between the 3rd and 3rd to
 last element... etc.

 Examples:
```js
 var arr1 = [3, 2, 11, 4, 7, 9];
 opposingSums(arr1);  // => [ 12, 9, 15 ]
 var arr2 = [1, 2, 3, 4]
 opposingSums(arr2);  // => [ 5, 5 ]
```

<br><br>

### additionSequence

Write a function `additionSequence(array, seq)` that takes in an array
 of numbers and a sequence of numbers. The function should return a new
 array where numbers of the original array are added to the numbers in
 the sequence.

 See the following example.

 array = [3, 2, 5, 4, 2, 1, 10];
 sequence = [2, 4, 6];
 array:    3 2  5 4 2 1 10
 sequence: 2 4  6 2 4 6  2
 result:   5 6 11 6 6 7 12

 Examples:
```js
 var arr1 = [3, 2, 5, 4, 2, 1, 10];
 var seq1 = [2, 4, 6];
 additionSequence(arr1, seq1);
  // => [3+2, 2+4, 5+6, 4+2, 2+4, 1+6, 10+2]  => [ 5, 6, 11, 6, 6, 7, 12 ]
 var arr2 = [1, 2, 3, 4, 5, 6, 7];
 var seq2 = [1, 2];
 additionSequence(arr2, seq2);  // => [ 2, 4, 4, 6, 6, 8, 8 ]
```

<br><br>

### reverseString

 Write a function `reverseString(string)` that takes in a string as a parameter
 and returns the string reversed. Do this recursively. 

 CONSTRAINT: Do not use the JS `.reverse()` method in your solution

 Examples:
```js
 reverseString('bootcamp');  // => 'pmactoob'
 reverseString('app academy');  // => 'ymedaca ppa'
 reverseString('');  // => ''
```
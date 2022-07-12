/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function(n) {
  if (n < 0) {
    return null;
  }
  if (n < 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }

  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let arraySum = function(arr) {
  let sum = 0;

  arr.forEach(function(item) {
    if (Array.isArray(item)) {
      sum += arraySum(item);
    } else {
      sum += item;
    }
  });

  return sum;
};

// 4. Check if a number is even.
let isEven = function(n) {
  if (n < 0) {
    return isEven(-n);
  }

  if (n === 1) {
    return false;
  }

  if (n === 0) {
    return true;
  }

  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function(n) {

  if (n === 0) {
    return 0;
  }

  if (n < 0) {
    return n + 1 + sumBelow(n + 1);
  }

  return n - 1 + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
let range = function(start, end) {
  let arr = [];

  if (start > end) {
    for (let i = start - 1; i > end; i--) {
      if (start > end) {
        arr.push(i);
        range(i, end);
      } else {
        return;
      }
    }
  } else {
    for (let i = start + 1; i < end; i++) {
      if (start < end) {
        arr.push(i);
        range(i, end);
      } else {
        return;
      }
    }
  }
  return arr;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }

  if (exp < 1) {
    base = 1 / base;
    return base / exponent(base, exp + 1);
  }

  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function(n) {
  if (n === 2 || n === 1) {
    return true;
  }
  if (n < 2) {
    return false;
  }

  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
let reverse = function(str) {
  if (str.length === 1) {
    return str[0];
  }

  return str.slice(str.length - 1) + reverse(str.slice(0, str.length - 1))
};

// 10. Write a function that determines if a string is a palindrome.
let palindrome = function(string) {
  string = string.toLowerCase().split(' ').join('');
  let firstChar = string[0];
  let lastChar = string[string.length - 1];
  let middleChars = string.substring(1, string.length - 1);

  if (string.length === 1 || string.length === 0) {
    return true;
  }

  if (firstChar !== lastChar) {
    return false;
  }

  return palindrome(middleChars);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
let modulo = function(x, y) {
  if (y === 0) { return NaN; }
  if (x < 0) { return -modulo(-x, y); }
  if (y < 0) { return modulo(x, -y); }
  if (x < y) { return x; }

  return modulo(x - y, y);
};


// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiply = function(x, y) {
  if (x === 0 || y === 0) { return 0 }
  if (x < 0 && y < 0) { return multiply(-x, -y) }
  if (x < 0) { return -multiply(-x, y) }
  if (y < 0) { return -multiply(x, -y) }
  if (y === 1) { return x }

  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
let divide = function(x, y) {
  if (x < 0 && y < 0) { return 0 };
  if (y === 0) { return NaN }
  if (x === 0) { return 0 };
  if (x === y) { return 1 };
  if (x < y) { return 0 };

  return 1 + divide(x - y, y);

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let gcd = function(x, y) {
  if (x <= 0 || y <= 0) { return null; }
  if (x === y) { return x; }

  if (x > y) {
    return gcd(x - y, y)
  } else {
    return gcd(x, y - x)
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
let compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  if (str1[0] === str2[0]) {
    return true && compareStr(str1.slice(1), str2.slice(1));
  } else {
    return false;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
let createArray = function(str) {
  if (str.length === 1) { return [str[0]]; }

  let arr = createArray(str.substring(1));
  arr.unshift(str[0]);

  return arr;
};

// 17. Reverse the order of an array
let reverseArr = function(arr) {
  if (arr.length === 1) { return arr; }

  let list = reverseArr(arr.slice(1));
  list.push(arr[0])

  return list;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
let buildList = function(value, length) {
  if (length === 1) return [value];

  return [value].concat(buildList(value, length - 1))
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
let fizzBuzz = function(n) {

  if (n === 1) return ['1'];
  if (n % 3 === 0 && n % 5 === 0) return fizzBuzz(n - 1).concat('FizzBuzz');
  if (n % 3 === 0) return fizzBuzz(n - 1).concat('Fizz');
  if (n % 5 === 0) return fizzBuzz(n - 1).concat('Buzz');
  return fizzBuzz(n - 1).concat([`${n}`]);
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
let countOccurrence = function(array, value) {
  if (array.length === 0) return 0;
  let first = array.shift();
  if (first === value) {
    return 1 + countOccurrence(array, value);
  } else {
    return 0 + countOccurrence(array, value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
let rMap = function(array, callback) {
  let result = []
  if (!array.length) return result

  result = result.concat(callback(array[0]), rMap(array.slice(1), callback))
  return result
};

// 22. Write a function that counts the number of times a key occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
let countKeysInObj = function(obj, key) {

};

// 23. Write a function that counts the number of times a value occurs in an object.
// let obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
let countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
let replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
let fibonacci = function(n) {
  if (n <= 0) return null 
  if (n === 1) return [0, 1]

  let arr = fibonacci(n - 1)
  arr.push(arr[arr.length - 1] + arr[arr.length - 2])
  return arr
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
let nthFibo = function(n) {
  if (n < 0) return null;
  if (n < 2) return n;

  return nthFibo(n - 1) + nthFibo(n - 2)
};

// 27. Given an array of words, return a new array containing each word capitalized.
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
let capitalizeWords = function(array) {

  if (array.length === 1) return [array[0].toUpperCase()];

  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));

};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
let capitalizeFirst = function(array) {
  if (array.length === 1) return [array[0].charAt(0).toUpperCase() + array[0].slice(1)];

  return [(array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1)).concat(capitalizeFirst(array.slice(1)))]
};

console.log(capitalizeFirst(["ceci", "n'est", "pas", "une", "pipe"]))

// 29. Return the sum of all even numbers in an object containing nested objects.
// let obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
let nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
let flatten = function(arr) {
  let results = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      results = results.concat(flatten(arr[i]));
    } else {
      results.push(arr[i]);
    }
  }

  return results;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
let letterTally = function(str, tally) {
  tally = tally || {};
  if (str.length === 0) return;

  let letter = str[0];
  tally[letter] ? tally[letter]++ : tally[letter] = 1;

  letterTally(str.slice(1), tally);
  return tally;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
let compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
let augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
let minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
let alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
let numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
let tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// let array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
let binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
let mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// let obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// let obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
let clone = function(input) {
};

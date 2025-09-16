/**
 * Start of test system 
 * @file 'test.js'
 * @author 'Francis Ortiz'
 */

import * as math from './math.js';
import * as strings from './strings.js';
import * as arrays from './arrays.js';


console.log('=== Testing math module ===');
console.log('add(5,3)=',math.add(5,3));
console.log('subtract(10,4=', math.subtract (10,4));
console.log('multiply(3,7)=', math.multiply (3,7));
console.log('divide(20,4)=', math.divide(20,4));
console.log('power(2,8)=', math.power (2,8));
console.log('sqrt(16)=', math.sqrt(16));
console.log('factorial(5)=', math.factorial(5));

console.log("\n== Testing String Module ==");
console.log("reverse('hello') =", strings.reverse("hello"));
console.log("capitalize('javascript') =", strings.capitalize("javascript"));
console.log("countVowels('hello world') =", strings.countVowels("hello world"));
"test.js"
console.log('removeDuplicates =', arrays.removeDuplicates(duplicateArray));
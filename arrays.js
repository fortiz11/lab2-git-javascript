/**
 * Array utilities for Lab 2
 * @file 'arrays.js'
 * @author 'Francis Ortiz'
 */

/**
 * Sum all elements in array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Sum of all elements
 */
export function sum(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    return arr.reduce((acc, num) => acc + num, 0);
}

/**
 * Calculate average of array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Average value
 */
export function average(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array');
    }
    return sum(arr) / arr.length;
}

/**
 * Filter even numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number[]} Array of even numbers
 */
export function filterEven(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    return arr.filter(num => num % 2 === 0);
}
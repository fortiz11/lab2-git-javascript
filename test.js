/**
 * Start of test system 
 * @file 'test.js'
 * @author 'Francis Ortiz'
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as math from './math.js';
import * as strings from './strings.js';
import * as arrays from './arrays.js';

describe('Math Module', () => {
    describe('Basic arithmetic', () => {
        it('should add two numbers correctly', () => {
            assert.equal(math.add(5, 3), 8);
        });

        it('should throw error when dividing by zero', () => {
            assert.throws(() => math.divide(10, 0), /cannot divide by zero/);
        });
    });

    describe('Advanced operations', () => {
        it('should calculate power correctly', () => {
            assert.equal(math.power(2, 8), 256);
        });

        it('should throw error for negative square root', () => {
            assert.throws(() => math.sqrt(-4), /cannot calculate square root of negative number/);
        });
    });
});

describe('String Module', () => {
    describe('String manipulation', () => {
        it('should reverse strings correctly', () => {
            assert.equal(strings.reverse('hello'), 'olleh');
        });

        it('should throw error for non-string input to reverse', () => {
            assert.throws(() => strings.reverse(123), /Input must be a string/);
        });
    });
});

describe('Array Module', () => {
    describe('Array calculations', () => {
        it('should sum array elements correctly', () => {
            assert.equal(arrays.sum([1, 2, 3, 4, 5]), 15);
            assert.equal(arrays.sum([]), 0);
        });

        it('should throw error for empty array average', () => {
            assert.throws(() => arrays.average([]), /Input must be a non-empty array/);
        });
    });
});
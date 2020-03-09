# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zanthbr/lotide`

**Require it:**

`const _ = require('@zanthbr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `tail(array)`: returns the tail or all but first index values of an array
* `head(array)`: returns only the head or 0 index value of an array
* `middle(array)`: returns the middle index value or middle middle two index values if an array is equal
* `assertArrayEquals(array1, array2)`: Prints whether the two arryas passed are shallowEqual to each other.
* `assertEqual(primitive1, primitive2)`: Returns whether the two inputted primitive values are equals to one another
* `letterPositions(string)`: returns an object containing the index values of the positions of the various characters in the string
* `map(array, callback)`: returns all elements of the inputted array for which callback evaluates to true
* `takeUntil(array, callback)`: returns the values of the array until the the callback evaluates to true
* `flatten(array)`: returns an array with the all arrays one level deeper removed and their values placed into the inputted array
* `without(array, arrayOfItemstoRemove )`: returns the array without any elements identical to elements in the seconds array
* `eqObjects`: should return a boolean statement after it checks both objects values and compare the two objects to see if they're equal"
* `countLetters`: should return a number after it counts the number of characters in the string
* `countOnly`: should return an object with the names desired as the value and a count number value of how many time the name occured
* `assertObjectEqual`: should return an assert statement if true or false
* `findKey`: should return the key of the first value that satisfies the condition given
* `findKeyByValue`: should return the key of the value given
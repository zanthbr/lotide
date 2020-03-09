const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail('pog'),'og');
assertEqual(tail('keen'),'een');

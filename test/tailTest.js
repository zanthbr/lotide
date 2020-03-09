const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

assertEqual(tail('pog'),'og');
assertEqual(tail('keen'),'een');


describe("#tail", () => {
  it("returns [2, 3] for [1,2,3,]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns 'een' for 'keen'", () => {
    assert.strictEqual(tail('keen'), 'een'); 
  });
});

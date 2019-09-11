import { equal } from "assert";
import { fb } from "./fb";

describe('FizzBuzzGame', () => {
  it('should return original number when normal number', () => {
    equal(fb(1), '1');
    equal(fb(2), '2');
  })

  it('should return fizz when divide by 3 or contains 3', () => {
    equal(fb(3), 'fizz');
    equal(fb(13), 'fizz');
  })
  it('should return buzz when divide by 5', () => {
    equal(fb(5), 'buzz');
    equal(fb(25), 'buzz');
  })
  it('should return fizzbuzz when divide by 3 and divide by 5', () => {
    equal(fb(15), 'fizzbuzz');
    equal(fb(35), 'fizzbuzz');
  })
})
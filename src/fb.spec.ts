import { equal } from "assert";
import { fb } from "./fb";

describe('FizzBuzzGame', () => {
  it('should return original number when normal number', () => {
    equal(fb(1), '1');
    equal(fb(2), '2');
    equal(fb(8), '8');
  })

  it('should return Fizz when divide by 3 or contains 3', () => {
    equal(fb(3), 'Fizz');
    equal(fb(13), 'Fizz');
  })
  it('should return Buzz when divide by 5', () => {
    equal(fb(5), 'Buzz');
    equal(fb(25), 'Buzz');
  })
  it('should return FizzBuzz when divide by 3 and divide by 5', () => {
    equal(fb(15), 'FizzBuzz');
    equal(fb(30), 'FizzBuzz');
  })
  it('should return FizzBuzz when contains 3 and contains 5', () => {
    equal(fb(53), 'FizzBuzz');
    equal(fb(253), 'FizzBuzz');
  })

  it('should return Mezz when divde by 7 and contains 7', () => {
    equal(fb(7), 'Mezz');
    equal(fb(17), 'Mezz');
    equal(fb(49), 'Mezz');
  })

  it('should return FizzMezz when related 3 and 7', () => {
    equal(fb(21), 'FizzMezz');
    equal(fb(42), 'FizzMezz');
    equal(fb(37), 'FizzMezz');
  })

  it('should return FizzMezz when related 5 and 7', () => {
    equal(fb(70), 'BuzzMezz');
  })

  it('should return FizzBuzzMezz when related 3, 5 and 7', () => {
    equal(fb(35), 'FizzBuzzMezz');
  })


  it("should test fb correct as fizzbuzz same test case", () => {
    equal(fb(0), "FizzBuzzMezz");
    equal(fb(1), "1");
    equal(fb(2), "2");
    equal(fb(3), "Fizz");
    equal(fb(5), "Buzz");
    equal(fb(7), "Mezz");
    equal(fb(13), "Fizz");
    equal(fb(14), "Mezz");
    equal(fb(15), "FizzBuzz");
    equal(fb(21), "FizzMezz");
    equal(fb(35), "FizzBuzzMezz");
    equal(fb(51), "FizzBuzz");
    equal(fb(52), "Buzz");
    equal(fb(53), "FizzBuzz");
    equal(fb(55), "Buzz");
    equal(fb(70), "BuzzMezz");
    equal(fb(74), "Mezz");
    equal(fb(75), "FizzBuzzMezz");
    equal(fb(100), "Buzz");
    equal(fb(101), "101");
    equal(fb(105), "FizzBuzzMezz");
  });
})
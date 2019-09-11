import { equal } from "assert";
import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz Game Test Suite", () => {
  it("should test fizzbuzz correct", () => {
    equal(fizzbuzz(0), "FizzBuzzMezz");
    equal(fizzbuzz(1), "1");
    equal(fizzbuzz(2), "2");
    equal(fizzbuzz(3), "Fizz");
    equal(fizzbuzz(5), "Buzz");
    equal(fizzbuzz(7), "Mezz");
    equal(fizzbuzz(13), "Fizz");
    equal(fizzbuzz(14), "Mezz");
    equal(fizzbuzz(15), "FizzBuzz");
    equal(fizzbuzz(21), "FizzMezz");
    equal(fizzbuzz(35), "FizzBuzzMezz");
    equal(fizzbuzz(51), "FizzBuzz");
    equal(fizzbuzz(52), "Buzz");
    equal(fizzbuzz(53), "FizzBuzz");
    equal(fizzbuzz(55), "Buzz");
    equal(fizzbuzz(70), "BuzzMezz");
    equal(fizzbuzz(74), "Mezz");
    equal(fizzbuzz(75), "FizzBuzzMezz");
    equal(fizzbuzz(100), "Buzz");
    equal(fizzbuzz(101), "101");
    equal(fizzbuzz(105), "FizzBuzzMezz");
  });
});
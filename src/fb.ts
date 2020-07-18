export function fb(n: number) {
  function isRelated(d: number) {
    return n % d === 0 || ('' + n).indexOf('' + d) > -1
  }
  if (isRelated(3) && isRelated(5) && isRelated(7)) {
    return 'FizzBuzzMezz';
  }
  if (isRelated(3) && isRelated(5)) {
    return 'FizzBuzz';
  }
  if (isRelated(3) && isRelated(7)) {
    return 'FizzMezz';
  }
  if (isRelated(5) && isRelated(7)) {
    return 'BuzzMezz';
  }
  if (isRelated(3)) {
    return 'Fizz';
  }
  if (isRelated(5)) {
    return 'Buzz';
  }
  if (isRelated(7)) {
    return 'Mezz';
  }
  return '' + n;
}
export function fb(n: number) {
  function isRelated(d: number) {
    return n % d === 0 || ('' + n).indexOf('' + d) > -1
  }
  if (isRelated(3) && isRelated(5)) {
    return 'fizzbuzz';
  }
  if (isRelated(3)) {
    return 'fizz';
  }
  if (isRelated(5)) {
    return 'buzz';
  }
  return '' + n;
}
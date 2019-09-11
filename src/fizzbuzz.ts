import { reduce } from "ramda";

const nmap = [{
  'd': 3,
  'v': 'Fizz'
}, {
  'd': 5,
  'v': 'Buzz'
}, {
  'd': 7,
  'v': 'Mezz'
}]

function isDivable(d: number, n: number): boolean {
  return n % d === 0;
}

function isContain(d: number, n: number) {
  return ('' + n).indexOf('' + d) > -1;
}

function isRelated(d: number, n: number) {
  return isDivable(d, n) || isContain(d, n);
}

export default function fizzbuzz(n: number) {
  let r = '';

  r = reduce((a, e)=> {
    return (isRelated(e.d, n)) ? a += e.v : a;
  }, '', nmap)

  if (r.length === 0) {
    r += n;
  }
  return r;
}
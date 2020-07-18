import { fb } from "./fb";
import { range } from "ramda";
import fizzbuzz from "./fizzbuzz";

for (const i of range(1, 100)) {
  const fbResult = fb(i);
  const fizzbuzzResult = fizzbuzz(i);
  const eq = fbResult === fizzbuzzResult;
  console.log(eq + ' | ' + i + ' | ' + fbResult + '  ==  ' + fizzbuzzResult);
}
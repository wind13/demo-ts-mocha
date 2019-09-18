import { CommonPlay } from "./common-play";

export class Tragedy extends CommonPlay {
  credits(audience: number) {
    return Math.max(audience - 30, 0)
  }
  amount(audience: number) {
    let result = 40000;
    if (audience > 30) {
      result += 1000 * (audience - 30)
    }
    return result;
  }
}
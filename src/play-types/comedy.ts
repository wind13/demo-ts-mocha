import { CommonPlay } from "./common-play";

export class Comedy extends CommonPlay {
  credits(audience: number) {
    return Math.max(audience - 30, 0) + Math.floor(audience / 5)
  }
  amount(audience: number) {
    let result = 30000;
    if (audience > 20) {
      result += 10000 + 500 * (audience - 20);
    }
    result += 300 * audience;
    return result;
  }
}

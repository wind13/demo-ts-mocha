import { IPerfInfo } from "./intf-perf-info";
import { playType } from "../play-type";
import { usd } from "../usd";

export class CommonPlay implements IPerfInfo {

  amount(audience: number) {
    return audience
  }

  genPerfInfoText(audience: number, play: any){
    const aType = playType[play.type]
    const perfAmount = usd(aType.amount(audience))
    return `  ${play.name}: ${perfAmount} (${audience} seats)\n`;
  }

  genPerfInfoHTML(audience: number, play: any){
    const aType = playType[play.type]
    const perfAmount = usd(aType.amount(audience))
    let result = ''
    result += ` <tr><td>${play.name}</td><td>${audience}</td>`
    result += `<td>${perfAmount}</td></tr>\n`
    return result
  }
}
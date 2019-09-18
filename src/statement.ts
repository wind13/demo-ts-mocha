import { plays } from "./plays";
import { invoices } from "./invoices";
import { playType } from "./play-type";
import { usd } from "./usd";

export function statement(invoice:any, plays: any) {
  return {
    customer: invoice.customer,
    totalAmount: totalOf('amount')(invoice.performances, plays),
    totalCredits: totalOf('credits')(invoice.performances, plays),
    perfInfo: totalOf('genPerfInfoText')(invoice.performances, plays),
    perfInfoHTML: totalOf('genPerfInfoHTML')(invoice.performances, plays)
  };
}

export function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  result += data.perfInfo;
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalCredits} credits`;
  return result;
}

export function renderHTML(data) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`
  result += "<table>\n"
  result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>"
  result += data.perfInfoHTML;
  result += "</table>\n"
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`
  result += `<p>You earned <em>${data.totalCredits}</em> credits</p>`
  return result
}

const r = renderPlainText(statement(invoices[0], plays))
console.log(r)

function totalOf(fnName: string) {
  const init = fnName.startsWith('gen') ? '' : 0
  return (performances: any, plays: any) => {
    return performances.reduce((total, perf) => {
      const play = plays[perf.playID]
      const aType = playType[play.type]
      const fnTotal = aType[fnName]
      return total + fnTotal(perf.audience, play)
    }, init)
  }
}
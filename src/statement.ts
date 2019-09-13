import { invoices } from "./invoices";
import { createStatementData } from "./createStatementData";

function usd(aNumber:number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD",
    minimumFractionDigits: 2
  }).format(aNumber/100);
}

export function statement(invoice) {
  return renderPlainText(createStatementData(invoice));
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  for (const perf of data.performances) {
    // print line for this order
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumnCredits} credits`;
  return result;
}

export function htmlStatement(invoice:any) {
  return renderHTML(createStatementData(invoice))
}

function renderHTML(data:any) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`
  result += "<table>\n"
  result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>"
  for (const perf of data.performances) {
    result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`
    result += `<td>${usd(perf.amount)}</td></tr>\n`
  }
  result += "</table>\n"
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`
  result += `<p>You earned <em>${data.totalVolumnCredits}</em> credits</p>`
  return result
}

const r = statement(invoices[0])
console.log(r)

const h = htmlStatement(invoices[0])
console.log(h)
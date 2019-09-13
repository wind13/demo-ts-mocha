import { plays } from "./plays";

class PerformanceCalculator {
  performance: any;
  play: any;

  constructor(aPerformance, aPlay) {
    this.performance = aPerformance
    this.play = aPlay
  }
  
  public get amount(): any {
    throw new Error('subclass responsibility');
  }

  public get volumeCredits(): number {
    return Math.max(this.performance.audience - 30, 0);
  }
}

class TragedyCalculator extends PerformanceCalculator {
  
  public get amount(): number {
    let result = 0;
    result = 40000;
    if (this.performance.audience > 30) {
      result += 1000 * (this.performance.audience - 30);
    }
    return result
  }
  
}
class ComedyCalculator extends PerformanceCalculator {

  public get amount(): number {
    let result = 0;
    result = 30000;
    if (this.performance.audience > 20) {
      result += 10000 + 500 * (this.performance.audience - 20);
    }
    result += 300 * this.performance.audience;
    return result
  }
  
  public get volumeCredits() : number {
    return Math.max(this.performance.audience - 30, 0) + Math.floor(this.performance.audience / 5);
  }
  
}

function playFor(aPerformance:any) {
  return plays[aPerformance.playID]
}

function createPerformanceCalculator(aPerformance:any, aPlay: any) {
  switch (aPlay.type) {
    case "tragedy":
      return new TragedyCalculator(aPerformance, aPlay)
    case "comedy":
      return new ComedyCalculator(aPerformance, aPlay)
    default:
      throw new Error(`unkown type: ${aPlay.type}`)
  }
}

export function enrichPerformance(aPerformance) {
  const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance))
  return Object.assign({
    play: calculator.play,
    amount: calculator.amount,
    volumeCredits: calculator.volumeCredits
  }, aPerformance)
}

export function totalAmount(data: any) {
  return data.performances.reduce((total, p) => total + p.amount, 0)
}

export function totalVolumnCredits(data: any) {
  return data.performances.reduce((total, p) => total + p.volumeCredits, 0)
}

export function createStatementData(invoice: any) {
  const statementData = {
    customer: invoice.customer,
    performances: invoice.performances.map(enrichPerformance),
    totalAmount: null,
    totalVolumnCredits: null
  };
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumnCredits = totalVolumnCredits(statementData);
  return statementData;
}

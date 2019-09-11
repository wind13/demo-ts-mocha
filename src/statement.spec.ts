import { equal } from "assert";
import { plays, invoices, statement } from "./statement";

const result = `Statement for BigGo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits`

describe ('statement test suit', () => {
  it('should load js okay', () => {
    equal(plays.hamlet.name, "Hamlet")
    equal(invoices.length, 1)
    equal(statement(invoices[0], plays), result)
  });
});
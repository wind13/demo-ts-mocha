import { equal } from "assert";
import { statement, htmlStatement } from "./statement";
import { invoices } from "./invoices";
import { plays } from "./plays";

const result = `Statement for BigGo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits`

const html = `<h1>Statement for BigGo</h1>
<table>
<tr><th>play</th><th>seats</th><th>cost</th></tr> <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
 <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
 <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,730.00</em></p>
<p>You earned <em>47</em> credits</p>`

describe ('statement test suit', () => {
  it('should load js okay', () => {
    equal(plays.hamlet.name, "Hamlet")
    equal(invoices.length, 1)
  });

  it ('should render text okay', () => {
    equal(statement(invoices[0]), result)
  });

  it ('should render html okay', () => {
    equal(htmlStatement(invoices[0]), html)
  });
});
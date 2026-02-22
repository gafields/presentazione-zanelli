import { test } from "node:test";
import assert from "node:assert";
import { somma } from "./math.js";

test("deve sommare correttamente due numeri", () => {
  const risultato = somma(2, 3);
  assert.strictEqual(risultato, 5);
});

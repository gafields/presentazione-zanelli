import { test } from "node:test";
import assert from "node:assert";
import { somma } from "./math.js";

test("deve sommare correttamente due numeri", () => {
  const risultato = somma(2, 3);
  assert.strictEqual(risultato, 5);
});

test("deve sommare correttamente due numeri negativi", () => {
  const risultato = somma(-2, -3);
  assert.strictEqual(risultato, -5);
});

// Estendi implementazione della funzione somma per gestire anche stringhe che rappresentano numeri
test.skip("deve restituire NaN se uno dei parametri non è un numero", () => {
  const risultato1 = somma("a", 3);
  const risultato2 = somma(2, "b");
  assert.strictEqual(Number.isNaN(risultato1), true);
  assert.strictEqual(Number.isNaN(risultato2), true);
});

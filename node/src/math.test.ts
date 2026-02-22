import { somma, divisione } from "./math";

describe("somma", () => {
  test("deve sommare correttamente due numeri", () => {
    expect(somma(2, 3)).toBe(5);
  });

  test("deve sommare numeri negativi", () => {
    expect(somma(-2, -3)).toBe(-5);
  });
});

// describe("divisione", () => {
//   test("deve dividere correttamente due numeri", () => {
//     expect(divisione(9, 3)).toBe(3);
//   });

//   test("deve dividere correttamente due numeri invertendo ordine", () => {
//     expect(divisione(4, 2, true)).toBe(0.5);
//   });

//   test("deve tornare NaN quando si divide per zero", () => {
//     expect(divisione(4, 0)).toBeNaN();
//   });
// });

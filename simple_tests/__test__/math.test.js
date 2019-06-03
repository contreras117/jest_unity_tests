import { sumar, multiplicar, restar, dividir } from "../src/math.js";

describe("Calculos matematicos", () => {
  test("Prueba suma", () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test("Prueba de multiplicar", () => {
    expect(multiplicar(2, 5)).toBe(10);
  });
  test("Prueba de resta", () => {
    expect(restar(5, 1)).toBe(4);
  });
  test("Prueba de division", () => {
    expect(dividir(10, 2)).toBe(5);
  });
});

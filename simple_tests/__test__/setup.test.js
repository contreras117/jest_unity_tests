//Despues de las pruebas
afterAll(() => console.log("Despues de todas las pruebas"));
afterEach(() => console.log("Despues de cada prueba"));

//Antes de las pruebas
beforeAll(() => console.log("Antes de todas las pruebas"));
beforeEach(() => console.log("Antes de cada prueba"));

describe("Probando el setup", () => {
  test("Valor verdadero", () => {
    expect(true).toBeTruthy();
  });
  test("Valor falso", () => {
    expect(false).toBeFalsy();
  });
});

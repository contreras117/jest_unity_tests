describe("Comapardores comunes", () => {
  const user = {
    name: "Daniel",
    lastName: "Contreras"
  };
  const user2 = {
    name: "Daniel",
    lastName: "Contreras"
  };
  const user3 = {
    name: "Carlos",
    lastName: "Suarez"
  };

  test("igualdad de elementos", () => {
    expect(user).toEqual(user2);
  });

  test("No son exactamente iguales", () => {
    expect(user).not.toEqual(user3);
  });
});

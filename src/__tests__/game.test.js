const { roll } = require("../game");

describe("game tests suites - roll", () => {
  test("should return a random int between 0 and 10", () => {
    const result = roll();
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toContain(result);
  });
});


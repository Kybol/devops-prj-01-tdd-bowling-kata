const { roll } = require("../game");
const { isASpare } = require("../game");

describe("game tests suites - roll", () => {
  test("should return a random int between 0 and 10", () => {
    const result = roll();
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toContain(result);
  });
});


describe("game tests suites - isASpare", () => {
    test("should return false because roll 1 + roll 2 != 10", () => {
      const result = isASpare(2,1);
      expect(result).toBe(false);
    });

    test("should return true because roll1 + roll2 === 10 and roll1 or roll2 != 0 ", () => {
        const result = isASpare(4,6);
        expect(result).toBe(true);
      });

  });
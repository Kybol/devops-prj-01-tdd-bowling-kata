const { roll } = require("../game");
const { isASpare } = require("../game");
const { isAStrike } = require("../game");
const { addPlayer } = require("../game");

describe("game tests suites - roll", () => {
  test("should return a random int between 0 and 10", () => {
    const result = roll(11);
    expect([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toContain(result);
  });
});

describe("game tests suites - isASpare", () => {
  test("should return false because roll 1 + roll 2 != 10", () => {
    const result = isASpare(2, 1);
    expect(result).toBe(false);
  });

  test("should return true because roll1 + roll2 === 10 ", () => {
    const result = isASpare(4, 6);
    expect(result).toBe(true);
  });

  test("should return false because roll1 === 10 ", () => {
    const result = isASpare(10, 0);
    expect(result).toBe(false);
  });
});

describe("game tests suites - isAStrike", () => {
  test("should return false", () => {
    const result = isAStrike(2);
    expect(result).toBe(false);
  });

  test("should return true", () => {
    const result = isAStrike(10);
    expect(result).toBe(true);
  });
});

describe("game tests suites - addPlayer", () => {
  test("should return because player was not added", () => {
    const result = addPlayer("");
    expect(result).toBe(false);
  });
});

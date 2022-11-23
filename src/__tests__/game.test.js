const { roll, players } = require("../game");
const { isASpare } = require("../game");
const { isAStrike } = require("../game");
const { addPlayer } = require("../game");
const { addFrameToPlayer } = require("../game");

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
  test("should return false because player was not added", () => {
    const result = addPlayer(null);
    expect(result).toBe(false);
  });

  test("should return true because player was added", () => {
    const result = addPlayer("Kim");
    expect(result).toBe(true);
  });
});

describe("game tests suites - addFrameToPlayer", () => {
  test("should return false beacause name is null", () => {
    const result = addFrameToPlayer("", 0, 0);
    expect(result).toBe(false);
  });

  test("should return false beacause player doesn't exist", () => {
    const result = addFrameToPlayer("BOBO", 0, 0);
    expect(result).toBe(false);
  });

  test("should return the frame with the rolls and the score (rolls:[1,1],score:2)", () => {
    addPlayer("Kim");
    const result = addFrameToPlayer("Kim", 1, 1);
    expect(result).toEqual({ rolls: [1, 1], score: 2 });
  });

  test("should return the frame with correct score for secund frames", () => {
    addPlayer("Kim");
    addFrameToPlayer("Kim", 1, 1);
    console.log(players);
    const result = addFrameToPlayer("Kim", 1, 1);
    expect(result.score).toBe(4);
  });
});

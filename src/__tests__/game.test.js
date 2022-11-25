const { roll, players } = require("../game");
const { isASpare } = require("../game");
const { isAStrike } = require("../game");
const { addPlayer } = require("../game");
const { addFrameToPlayer } = require("../game");

beforeEach(() => {
  // Clears the database and adds some testing data.
  // Jest will wait for this promise to resolve before running tests.
});

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
    addPlayer("Tim");
    addFrameToPlayer("Tim", 1, 1);
    const result = addFrameToPlayer("Tim", 1, 1);
    expect(result.score).toBe(4);
  });

  test("should return the correct score for the whole game (rolls = 1)", () => {
    addPlayer("Jim");
    let result;
    for (let i = 0; i < 10; i++) {
      result = addFrameToPlayer("Jim", 1, 1);
    }
    expect(result.score).toBe(20);
  });

  test("should return right score for spare on frame1 and 2", () => {
    addPlayer("Pim");
    let result;
    addFrameToPlayer("Pim", 6, 4);
    result = addFrameToPlayer("Pim", 1, 1);
    expect(result.score).toBe(13);
  });

  test("should return right score on strike on frame 1 for frame 2", () => {
    addPlayer("Lim");
    let result;
    addFrameToPlayer("Lim", 10, 0);
    result = addFrameToPlayer("Lim", 1, 1);
    expect(result.score).toBe(14);
  });

  test("should return right score for strikes on frame 1,2,3", () => {
    addPlayer("Aim");
    let result;
    for (let i = 0; i < 3; i++) {
      result = addFrameToPlayer("Aim", 10, 0);
    }
    expect(result.score).toBe(60);
  });

  test("should return right score for spare at last frame", () => {
    addPlayer("Bim");
    for (let i = 0; i < 9; i++) {
      addFrameToPlayer("Bim", 0, 0);
    }
    let result = addFrameToPlayer("Bim", 9, 1, 1);
    expect(result.score).toBe(11);
  });

  test("should return right score for strike at last frame", () => {
    addPlayer("Vim");
    for (let i = 0; i < 9; i++) {
      addFrameToPlayer("Vim", 0, 0);
    }
    let result = addFrameToPlayer("Vim", 10, 1, 1);
    expect(result.score).toBe(12);
  });

  test("should return right score for 2 strike at last frame", () => {
    addPlayer("Zim");
    for (let i = 0; i < 9; i++) {
      addFrameToPlayer("Zim", 0, 0);
    }
    let result = addFrameToPlayer("Zim", 10, 10, 5);
    expect(result.score).toBe(25);
  });

  test("should return right score for perfect game", () => {
    addPlayer("Gim");
    for (let i = 0; i < 9; i++) {
      addFrameToPlayer("Gim", 10);
    }
    let result = addFrameToPlayer("Gim", 10, 10, 10);
    expect(result.score).toBe(300);
  });
});

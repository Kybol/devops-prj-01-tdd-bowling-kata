let players = [];

const roll = (max) => {
  return Math.floor(Math.random() * max);
};

const isASpare = (roll1, roll2) => {
  if (roll1 === 10) return false;
  if (roll1 + roll2 === 10) return true;
  return false;
};

const isAStrike = (roll1) => {
  if (roll1 === 10) return true;
  return false;
};

const addPlayer = (name) => {
  if (!name) {
    return false;
  }
  players.push({
    name: name,
    frames: [],
  });
  return true;
};

const addFrameToPlayer = (name, roll1, roll2) => {
  if (!name) return false;
  const player = players.find((player) => player.name === name);
  if (!player) return false;
  let lastIndex = player.frames.length - 1;

  //update score with bonuses
  if (lastIndex >= 0) {
    let previousFrame = player.frames[lastIndex];
    if (isAStrike(previousFrame.rolls[0])) {
      player.frames[lastIndex].score += roll1 + roll2;
    } else if (isASpare(previousFrame.rolls[0], previousFrame.rolls[1])) {
      player.frames[lastIndex].score += roll1;
    }
  }

  //get previous score
  let previousScore = lastIndex < 0 ? 0 : player.frames?.[lastIndex].score;

  player.frames.push({
    rolls: [roll1, roll2],
    score: previousScore + roll1 + roll2,
  });
  let frame = player.frames[player.frames.length - 1];

  return frame;
};

exports.roll = roll;
exports.isASpare = isASpare;
exports.isAStrike = isAStrike;
exports.addPlayer = addPlayer;
exports.players = players;
exports.addFrameToPlayer = addFrameToPlayer;

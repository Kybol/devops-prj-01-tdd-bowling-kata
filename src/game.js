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
    frames: {
      rolls: [],
      score: 0,
    },
  });
  return true;
};

const addFrameToPlayer = (name, roll1, roll2) => {
  if (!name) return false;
  const player = players.find((player) => player.name === name);
  if (!player) return false;
  player.frames.rolls.push({ roll1: roll1, roll2: roll2 });
  return true;
};

exports.roll = roll;
exports.isASpare = isASpare;
exports.isAStrike = isAStrike;
exports.addPlayer = addPlayer;
exports.players = players;
exports.addFrameToPlayer = addFrameToPlayer;

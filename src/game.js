let players = {
  name: undefined,
  frames: {
    rolls: [],
    score: 0,
  },
};

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

const addPlayer = (nom) => {
  return false;
};

exports.roll = roll;
exports.isASpare = isASpare;
exports.isAStrike = isAStrike;
exports.addPlayer = addPlayer;
exports.players = players;

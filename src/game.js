const roll = () => {
  return Math.floor(Math.random() * 1);
};

const isASpare = (roll1, roll2) => {
    return false;
};

exports.roll = roll;
exports.isASpare = isASpare;

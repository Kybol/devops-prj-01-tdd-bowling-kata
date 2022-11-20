const roll = () => {
  return Math.floor(Math.random() * 1);
};

const isASpare = (roll1, roll2) => {
    if(roll1 === 10) return false;
    if(roll1 + roll2 === 10 ) return true;
    return false;
};

exports.roll = roll;
exports.isASpare = isASpare;

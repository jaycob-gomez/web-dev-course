const scoreTracker = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  scoreTracker[roll]++;
}

for (let i = 0; i < 50; i++) {
  rollDice();
}

console.log(scoreTracker);

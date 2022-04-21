import { getEndTime } from './index.js';

const endTime = getEndTime(() => {
  let sum = 0;
  for (let i = 1; i <= 1000000; i++) {
    sum = sum + i;
  }
});

console.log(endTime);
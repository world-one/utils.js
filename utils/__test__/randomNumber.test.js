const { randomNumber } = require('../randomNumber');


describe('random number', () => {
  test('number', () => {
    for (let i = 0; i < 10; i++) {
      const result = randomNumber(i, i + 5);
      expect(result).toBeGreaterThan(i - 1);
      expect(result).toBeLessThan(i + 6);
    }
  });
});

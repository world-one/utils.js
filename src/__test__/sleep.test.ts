import sleep from '../sleep';

test('sleep', () => {
  const ms = 400;
  const now = Date.now();
  sleep(ms);
  expect(Date.now()).toBe(now + ms);
});
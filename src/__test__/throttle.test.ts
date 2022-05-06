import Throttle from '../throttle';

jest.useFakeTimers();
describe('debouncer', () => {
  test('action', () => {
    const debouncer = new Throttle(100);
    let func = jest.fn();

    for (let i = 0; i < 100; i++) {
      debouncer.set(func)
      jest.advanceTimersByTime(5);
    }

    jest.runAllTimers();

    expect(func).toBeCalledTimes(5);
  });
});

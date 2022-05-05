import Debouncer from '../debouncer';

jest.useFakeTimers();
describe('debouncer', () => {
  test('action', () => {
    const debouncer = new Debouncer(200);
    let func = jest.fn();

    for (let i = 0; i < 100; i++) {
      debouncer.set(func)
    }

    jest.runAllTimers();

    expect(func).toBeCalledTimes(1);
  });
});

import addCommaToNumber from '../addCommaToNumber'

describe('add comma', () => {
  test('number', () => {
    expect(addCommaToNumber('100000')).toEqual('100,000');
    expect(addCommaToNumber(100000)).toEqual('100,000');
    expect(addCommaToNumber(undefined)).toEqual(undefined);
    expect(addCommaToNumber(false)).toEqual(false);
    expect(addCommaToNumber(0)).toEqual(0);
  });
});

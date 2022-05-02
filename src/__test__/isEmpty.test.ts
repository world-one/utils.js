import isEmpty from '../isEmpty'

describe('is Empty', () => {
  test('Object', () => {
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty({ a: 1 })).toBeFalsy();
  });

  test('Array', () => {
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty([1])).toBeFalsy();
  });

  test('String', () => {
    expect(isEmpty(' ')).toBeTruthy();
    expect(isEmpty('string')).toBeFalsy();
  });

  test('null, undefined', () => {
    expect(isEmpty(null)).toBeNull();
    expect(isEmpty(undefined)).toBeUndefined();
  });
});

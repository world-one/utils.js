import Stack from '../stack';

describe('stack', () => {
  test('action', () => {
    const data = [1, 2, 3, 4, 5];
    const stack = new Stack(data);

    expect(stack.value).toEqual(data);
    expect(stack.peek).toEqual(5);
    expect(stack.pop()).toEqual(5);
    expect(stack.value).toStrictEqual([1, 2, 3, 4]);

    stack.push(7);
    expect(stack.value).toStrictEqual([1, 2, 3, 4, 7]);
  });
});

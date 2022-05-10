import createVariableString from '../createVariableString'

describe('create variable string', () => {
  const myName = 'My name is {name}';

  test('string', () => {
    expect(createVariableString(myName, { name: 'se-il' })).toEqual('My name is se-il');

  });
});

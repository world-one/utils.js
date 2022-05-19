import { isEmail } from '../validation';

describe('validation', () => {
  test('isEmail', () => {
    expect(isEmail('world-one@mail.com')).toBeTruthy();
    expect(isEmail('world-on#email.com')).toBeFalsy();
  });
});

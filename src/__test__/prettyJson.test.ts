import prettyJson from "../prettyJson";

describe('is Empty', () => {
  test('Object', () => {
    console.log(prettyJson({name: 'world-one'}));
  });
});
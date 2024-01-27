import { helloMutation } from '../../../src/graphql/resolvers/mutations/hello';

describe('Hello mutation', () => {
  it('1. Should return message', () => {
    const result = helloMutation();

    expect(result).toEqual({ message: 'hello mutation' });
  });
});

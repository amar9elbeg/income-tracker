import { helloQuery } from '../../../src/graphql/resolvers/queries/hello';

describe('Hello query', () => {
  it('1. Should return message', () => {
    const result = helloQuery();

    expect(result).toEqual({ message: 'hello query' });
  });
});

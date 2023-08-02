import { publicApi } from './public-api';

describe('publicApi', () => {
  it('should work', () => {
    expect(publicApi()).toEqual('public-api');
  });
});

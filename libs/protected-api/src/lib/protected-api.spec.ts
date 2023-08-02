import { protectedApi } from './protected-api';

describe('protectedApi', () => {
  it('should work', () => {
    expect(protectedApi()).toEqual('protected-api');
  });
});

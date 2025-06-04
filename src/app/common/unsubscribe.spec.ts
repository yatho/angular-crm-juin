import { Unsubscribe } from './unsubscribe';

describe('Unsubscribe', () => {
  it('should create an instance', () => {
    const directive = new Unsubscribe();
    expect(directive).toBeTruthy();
  });

  it('should initialize subscriptionList as an empty array', () => {
    const directive = new Unsubscribe();
    expect(directive['subscriptionList']).toEqual([]);
  });
});

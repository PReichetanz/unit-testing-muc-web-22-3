import { getGreeting } from './getGreeting.js';

describe('getGreeting', () => {
  it('returns a string "Hello Jane!" if called with getGreeting("Jane")', () => {
    const result = getGreeting('Jane');
    expect(result).toBe('Hello Jane!');
  });

  it('returns a string "Hello you!" if called without arguments', () => {
    const result = getGreeting();
    expect(result).toBe('Hello you!');
  });

  it('returns a string "Hello Coach!" if called with a Coaches name as argument', () => {
    const resultPaul = getGreeting('Paul');
    const resultThomas = getGreeting('Thomas');

    expect(resultPaul).toBe('Hello Coach!');
    expect(resultThomas).toBe('Hello Coach!');
  });
});

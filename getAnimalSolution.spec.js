import { getAnimalSolution } from './getAnimalSolution.js';

describe('getAnimal', () => {
  it('returns a string "I really like cats!" if called with getAnimals("cat")', () => {
    const result = getAnimalSolution('cat');
    expect(result).toBe('I really like cats!');
  });

  it('returns a string "I like dogs!" if called with getAnimals("dog")', () => {
    const result = getAnimalSolution('dog');
    expect(result).toBe('I like dogs!');
  });

  it('returns a string "I don\'t like animals!" if called with getAnimals()', () => {
    const result = getAnimalSolution();
    expect(result).toBe("I don't like animals!");
  });
});

/*

- if getAnimal is called with "cat" as argument -> return "I really like cats!"
- if getAnimal is called with an argument -> "I like [animal]!"
- if called without animals -> "I don't like animals"
*/

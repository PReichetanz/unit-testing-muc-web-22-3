export function getAnimalSolution(name) {
  if (name === 'cat') {
    return 'I really like cats!';
  }
  if (name === undefined) {
    return "I don't like animals!";
  }
  return `I like ${name}s!`;
}

export function getGreeting(name = 'you') {
  if (name === 'Paul' || name === 'Thomas') {
    return 'Hello Coach!';
  }
  return `Hello ${name}!`;
}

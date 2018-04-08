export function capitalize(str) {
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1)
}

export function printDate(timestamp) {
  const date = new Date(timestamp);
  return date.toDateString();
}

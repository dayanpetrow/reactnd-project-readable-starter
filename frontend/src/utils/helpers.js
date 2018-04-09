export function capitalize(str) {
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1)
}

export function printDate(timestamp) {
  const date = new Date(timestamp);
  return date.toDateString();
}

export function generateId() {
  function fragment() {
    return Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1)
  }
  return fragment() + fragment() + fragment() + fragment() + fragment()
}

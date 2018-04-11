/* capitalize a category */
export function capitalize(str) {
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1)
}

/* convert timestamp to string */
export function printDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.toDateString()} at ${date.toLocaleTimeString()}`;
}

/* generate ID for a post or a comment */
export function generateId() {
  function fragment() {
    return Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1)
  }
  return fragment() + fragment() + fragment() + fragment() + fragment()
}

/* sort by timestamp e.g. Array.sort(sort_by_timestamp) */
export function sort_by_timestamp(a, b) {
  if(a.timestamp < b.timestamp) {
    return 1;
  } else {
    return -1;
  }
}

/* sort by voteScore e.g. Array.sort(sort_by_voteScore) */
export function sort_by_voteScore(a, b) {
  if(a.voteScore < b.voteScore) {
    return 1;
  } else {
    return -1;
  }
}

/* sort by commentCount e.g. Array.sort(sort_by_ccount) */
export function sort_by_ccount(a, b) {
  if(a.commentCount < b.commentCount) {
    return 1;
  } else {
    return -1;
  }
}

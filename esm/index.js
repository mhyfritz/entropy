export function entropy (str, base = 2) {
  const counter = {}
  for (const char of str) {
    if (counter[char] === undefined) {
      counter[char] = 0
    }
    counter[char] += 1
  }
  let ret = 0
  for (const char in counter) {
    const freq = counter[char] / str.length
    ret += freq * (Math.log(freq) / Math.log(base))
  }
  return ret === 0 ? 0 : -ret
}

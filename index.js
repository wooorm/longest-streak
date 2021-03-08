// Get the count of the longest repeating streak of `character` in `value`.
export function longestStreak(source, character) {
  var value = String(source)
  var index = value.indexOf(character)
  var expected = index
  var count = 0
  var max = 0

  if (typeof character !== 'string' || character.length !== 1) {
    throw new Error('Expected character')
  }

  while (index !== -1) {
    if (index === expected) {
      if (++count > max) {
        max = count
      }
    } else {
      count = 1
    }

    expected = index + 1
    index = value.indexOf(character, expected)
  }

  return max
}

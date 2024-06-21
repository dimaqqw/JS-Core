function findUniqueSymbol(str) {
  const charCount = {}
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1
  }
  for (let char of str) {
    if (charCount[char] === 1) {
      return char
    }
  }
  return null
}

// Tests
console.log(findUniqueSymbol('qweq')) //w
console.log(findUniqueSymbol('qwe')) //q
console.log(findUniqueSymbol('qqqqwwweeez')) //z

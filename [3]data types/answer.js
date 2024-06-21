function twoIntegersAndMod(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return 'Параметры не целые числа'
  }
  return a % b === 0 ? true : false
}

// Tests
console.log(twoIntegersAndMod(4, 2))
console.log(twoIntegersAndMod(4, 3))

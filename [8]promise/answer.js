function squareAfter3Seconds(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * number)
    }, 3000)
  })
}

const initialPromise = Promise.resolve(2)

initialPromise
  .then((result) => {
    console.log(`Первый результат: ${result}`)
    return squareAfter3Seconds(result)
  })
  .then((result) => {
    console.log(`Второй результат (после возведения в квадрат): ${result}`)
    return squareAfter3Seconds(result)
  })
  .then((result) => {
    console.log(`Третий результат (после возведения в квадрат): ${result}`)
    return squareAfter3Seconds(result)
  })
  .then((result) => {
    console.log(
      `Четвертый(Финальный) результат (после возведения в квадрат): ${result}`
    )
  })
  .catch((error) => {
    console.error(`Ошибка: ${error}`)
  })

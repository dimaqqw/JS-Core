function processData(data) {
  return new Promise((resolve, reject) => {
    if (typeof data !== 'number') {
      reject(new Error('Error: Параметр должен быть числом'))
    } else {
      setTimeout(() => {
        if (data % 2 !== 0) {
          setTimeout(() => {
            resolve('Odd')
          }, 1000)
        } else {
          setTimeout(() => {
            resolve('Even')
          }, 2000)
        }
      }, 1000)
    }
  })
}

processData(5)
  .then((result) => {
    console.log('Результат:', result) // 'Odd'
  })
  .catch((error) => {
    console.error('Ошибка:', error.message) // Не выполнится в этом примере
  })

processData(10)
  .then((result) => {
    console.log('Результат:', result) // 'Even'
  })
  .catch((error) => {
    console.error('Ошибка:', error.message) // Не выполнится в этом примере
  })

processData('abc')
  .then((result) => {
    console.log('Результат:', result) // Не выполнится в этом примере
  })
  .catch((error) => {
    console.error('Ошибка:', error.message) // 'Ошибка: Параметр должен быть числом'
  })

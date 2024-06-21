function handleReferenceError() {
  try {
    const message = 'Hello my name is Dmtiriy'
    console.log(message)
    // throw SyntaxError('Syntax error')
    console.log(nonExistentVariable)
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('Ошибка: Доступ к неопределенной переменной.')
    } else {
      console.log('Произошла другая ошибка:', error.message)
    }
  }
}

handleReferenceError()

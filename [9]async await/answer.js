async function fetchAndProcessData(url) {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(`Произошла ошибка: ${error.message}`)
    return `Произошла ошибка: ${error.message}`
  }
}

const url = 'https://randomuser.me/api/'
// const url = 'https://randomuser.me/api21/'

fetchAndProcessData(url)
  .then((data) => {
    console.log('Данные, полученные с сервера:', data)
  })
  .catch((error) => {
    console.error('Ошибка при выполнении запроса:', error)
  })

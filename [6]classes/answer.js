class University {
  constructor(name) {
    this.name = name
    this.faculties = []
  }

  addFaculty(faculty) {
    this.faculties.push(faculty)
    console.log(`Отдел '${faculty}' добавлен в университет '${this.name}'.`)
  }

  removeFaculty(faculty) {
    const index = this.faculties.indexOf(faculty)
    if (index !== -1) {
      this.faculties.splice(index, 1)
      console.log(`Отдел '${faculty}' удален из университета '${this.name}'.`)
    } else {
      console.log(`Отдел '${faculty}' не найден в университете '${this.name}'.`)
    }
  }

  showFaculties() {
    if (this.faculties.length === 0) {
      console.log(`В университете '${this.name}' нет отделов.`)
    } else {
      console.log(`Отделы в университете '${this.name}':`)
      this.faculties.forEach((faculty) => {
        console.log(`- ${faculty}`)
      })
    }
  }
}

const myUniversity = new University('Мой Университет')

myUniversity.addFaculty('Факультет математики')
myUniversity.addFaculty('Факультет физики')
myUniversity.addFaculty('Факультет информатики')

myUniversity.showFaculties()

myUniversity.removeFaculty('Факультет физики')

myUniversity.showFaculties()

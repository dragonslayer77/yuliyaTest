import employees from './employees'

const data = { employees }
const dataHandler = {}

dataHandler.getAll = (domain) => {
  const items = JSON.parse(localStorage.getItem(domain))
  if (items) {
    return items
  }
  localStorage.setItem(domain, JSON.stringify(data[domain]))
  return JSON.parse(localStorage.getItem(domain))
}

dataHandler.get = (domain, id) => {
  const employees = JSON.parse(localStorage.getItem(domain))
  return employees ? employees.find(employee => employee.key === id) : false
}

dataHandler.set = (domain, id, data) => {
  // Get localstorage employees
  const employees = JSON.parse(localStorage.getItem(domain))

  // delete the employee with id
  const objIndex = employees.findIndex(e => e.key === id)
  if (objIndex > -1) {
    employees.splice(objIndex, 1)
  }
  employees.push(data)

  // save changes to localstorage
  localStorage.setItem(domain, JSON.stringify(employees))
}

export default dataHandler

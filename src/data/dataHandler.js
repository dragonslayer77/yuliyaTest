import currentEmployees from "./employees";

const dataHandler = {};

dataHandler.getAll = domain => {
  switch (domain) {
    case "employees":
      const employees = JSON.parse(localStorage.getItem("employees"));
      if (employees) {
        return employees;
      }
      localStorage.setItem("employees", JSON.stringify(currentEmployees));
      return JSON.parse(localStorage.getItem("employees"));
    default:
      return null;
  }
};

dataHandler.get = (domain, id) => {
  switch (domain) {
    case "employees":
      const employees = JSON.parse(localStorage.getItem("employees"));
      return employees.find(employee => employee.key == id);
    default:
      return false;
  }
};

dataHandler.set = (domain, id, data) => {
  switch (domain) {
    case "employees":
        // Get localstorage employees
      let employees = JSON.parse(localStorage.getItem("employees"));

      // delete the employee with id
      const objIndex = employees.findIndex(e => e.key == id);
      if (objIndex > -1) {
        employees.splice(objIndex, 1);
      }
      employees.push(data)

      // save changes to localstorage
      localStorage.setItem("employees", JSON.stringify(employees));
    default:
      return false;
  }
};

export default dataHandler;

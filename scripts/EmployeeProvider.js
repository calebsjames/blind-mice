//declare an empty variable for useEmployees()
let employees = []

//export getEmployees function
export const getEmployees = () => {
    //fetch from loacl API
    return fetch('http://localhost:8088/employees')
    //parse to json
        .then(response => response.json())
        //give parsed responsed to previously declared empty variable (employees)
        .then(parsedEmployees => {
            employees = parsedEmployees
        })

}

//export function to return employees.slice()
export const useEmployees = () => employees.slice();


//declare an empty variable for useEmployeeCustomers()
let employeeCustomers = []

//export getEmployeeCustomers function
export const getEmployeeCustomers = () => {
    //fetch from loacl API
    return fetch('http://localhost:8088/employeeCustomers')
    //parse to json
        .then(response => response.json())
        //give parsed responsed to previously declared empty variable (employeeCustomers)
        .then(parsedEmployeeCustomers => {
            employeeCustomers = parsedEmployeeCustomers
        })

}

//export function to return employeeCustomers.slice()
export const useEmployeeCustomers = () => employeeCustomers.slice();
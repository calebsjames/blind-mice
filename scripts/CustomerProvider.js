//declare an empty variable for useCustomers()
let customers = []

//export getCustomers function
export const getCustomers = () => {
    //fetch from loacl API
    return fetch('http://localhost:8088/customers')
    //parse to json
        .then(response => response.json())
        //give parsed responsed to previously declared empty variable (customers)
        .then(parsedCustomers => {
            customers = parsedCustomers
        })

}

//export function to return customers.slice()
export const useCustomers = () => customers.slice();
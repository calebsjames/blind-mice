//declare an empty variable for useDepartments()
let departments = []

//export getDepartments function
export const getDepartments = () => {
    //fetch from loacl API
    return fetch('http://localhost:8088/departments')
    //parse to json
        .then(response => response.json())
        //give parsed responsed to previously declared empty variable (departments)
        .then(parsedDepartments => {
            departments = parsedDepartments
        })

}

//export function to return departments.slice()
export const useDepartments = () => departments.slice();


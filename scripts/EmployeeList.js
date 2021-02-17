//import statements
import { getComputers, useComputers } from "./ComputerProvider.js";
import { getDepartments, useDepartments } from "./DepartmentProvider.js";
import { employees } from "./Employee.js";
import { getEmployees, useEmployees } from "./EmployeeProvider.js";

//define event hub for listening
const eventHub = document.querySelector("main")

//define location that will house employeeCards
const contentTarget = document.querySelector(".employees")

export const employeesList = () => {
    
    //fetch employeess
    getEmployees()
        //fetch employeess
        .then(getComputers)
        .then(getDepartments)
        .then(() => {
        //assign the fetch call to a variable
        const employeesArray = useEmployees()
        const computerArray = useComputers()
        const departments = useDepartments()
        //render to DOM with said variable
        employeesToDom(employeesArray, computerArray, departments)
        }
    )}



//export function to put employee slices on DOM
const employeesToDom = (allEmployees, allComputers, allDepartments) => {
    debugger
    //Iterate through the employees with .map and insert it into innerHTML
    //This will be the main content of the cards
    contentTarget.innerHTML = allEmployees.map(
        //(variable) to reference values in allEmployees and pass to employees()
        (employeeObject) => {
            //declare a new variable and filter allComputers to get comp.id that is equal to employeeObject.computerId
            const employeeComputer = allComputers.filter(
                comp => comp.id === employeeObject.computerId)
            
            const employeeDapartment = allDepartments.find(
                dep => dep.id === employeeObject.departmentId
            )
                console.log(employeeObject, employeeComputer, employeeDapartment)
                return employees(employeeObject, employeeComputer, employeeDapartment)
            }).join("")

            //pass employeeObject and the matching computer to employees()

}







// //export function to put employee slices on DOM
// const employeesToDom = (allEmployees, allComputers) => {
//     debugger
//     //Iterate through the employees with .map and insert it into innerHTML
//     //This will be the main content of the cards
//     contentTarget.innerHTML = allEmployees.map(
//         //(variable) to reference values in allEmployees and pass to employees()
//         (employeeObject) => {
//             //declare a new variable and filter allComputers to get comp.id that is equal to employeeObject.computerId
//             const employeeComputer = allComputers.filter(
//                 comp => comp.id === employeeObject.computerId)

//                 console.log(employeeObject, employeeComputer)
//                 return employees(employeeObject, employeeComputer)
//             }).join("")

//             //pass employeeObject and the matching computer to employees()

// }
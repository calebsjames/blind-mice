//import statements
import { getComputers, useComputers } from "./ComputerProvider.js";
import { getCustomers, useCustomers } from "./CustomerProvider.js";
import { getDepartments, useDepartments } from "./DepartmentProvider.js";
import { employees } from "./Employee.js";
import { getEmployeeCustomers, useEmployeeCustomers } from "./EmployeeCustomerProvider.js";
import { getEmployees, useEmployees } from "./EmployeeProvider.js";
import { getLocations, useLocations } from "./LocationProvider.js";

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
        .then(getLocations)
        .then(getCustomers)
        .then(getEmployeeCustomers)
        .then(() => {
        //assign the fetch calls to variables
        const employeesArray = useEmployees()
        const computerArray = useComputers()
        const departmentsArray = useDepartments()
        const locationsArray = useLocations()
        const customers = useCustomers()
        const customerRelationships = useEmployeeCustomers()

        //render to DOM with said variable
        employeesToDom(employeesArray, computerArray, departmentsArray, locationsArray, customers, customerRelationships)
        }
    )}



//export function to put employee slices on DOM
const employeesToDom = (allEmployees, allComputers, allDepartments, allLocations, allCustomers, allCustomerRelationships) => {
    // debugger

    //Iterate through the employees with .map and insert it into innerHTML
    //This will be the main content of the cards
    contentTarget.innerHTML = allEmployees.map(
        //(variable) to reference values in allEmployees and pass to employees()
        (employeeObject) => {
            //declare a new variable and filter allComputers to get comp.id that is equal to employeeObject.computerId
            const employeeComputer = allComputers.find(
                comp => comp.id === employeeObject.computerId)
            
            const employeeDapartment = allDepartments.find(
                dep => dep.id === employeeObject.departmentId
            )

            const employeeLocation = allLocations.find(
                loc => loc.id === employeeObject.locationId
            )
            
            debugger
            const relationships = allCustomerRelationships.filter(
                rel => rel.employeeId === employeeObject.id
            )
            console.log(relationships)
        

            const assignedCustomers = relationships.map(
                rel => {
                    return allCustomers.find(customer => customer.id === rel.customerId)
                })
                //pass all arguements to employees()
                return employees(employeeObject, employeeComputer, employeeDapartment, employeeLocation, assignedCustomers)
            }).join("")


}

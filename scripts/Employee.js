//export function to put all gathered data into HTML format
export const employees = (employeeObject, employeeComputer, employeeDepartment, employeeLocation, assignedCustomers) => {
        
    return `
    <div class="employee">
        <h3>${employeeObject.firstName} ${employeeObject.lastName}</h3>
        <div class="employeeDetails">
            <p>Age: ${employeeObject.age}</p>
            <p>Computer: ${employeeComputer.year} ${employeeComputer.model}</p>
            <p>Department: ${employeeDepartment.name}</p>
            <p>Location: ${employeeLocation.name}</p>
            <p>Customers: ${assignedCustomers.name}</p>
            </div>
            `
}

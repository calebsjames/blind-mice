export const employees = (employeeObject, employeeComputer, employeeDepartment) => {
        
    return `
    <div class="employee">
        <h3>${employeeObject.firstName} ${employeeObject.lastName}</h3>
        <div class="employeeDetails">
            <p>Age: ${employeeObject.age}</p>
            <p>Computer: ${employeeComputer[0].year} ${employeeComputer[0].model}</p>
            <p>Department: ${employeeDepartment.name}</p>
            </div>
            `
}

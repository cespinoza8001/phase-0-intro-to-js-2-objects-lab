var employee = {
    name: "value1",
    streetAddress: "123",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    let updEmployee = {...employee};
    updEmployee[key] = value;
    return updEmployee;
}
console.log(employee);
var newEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Mike');
console.log(newEmployee);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, { [key]: value})
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign(employee)
    delete newObject[key]
    return newObject;
}

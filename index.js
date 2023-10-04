/* Your Code Here */
function createEmployeeRecord(employeeArray){
    const [firstName, familyName, title, payRate] = employeeArray;
    const employee = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}
function createEmployeeRecords(arrayOfEmployeeArrays) {
return arrayOfEmployeeArrays.map((employeeArray)=> createEmployeeRecord(employeeArray))
 }
 function createTimeInEvent(dateStamp){
    const [date, time] = dateStamp.split(' ');
    const hour = parseInt(time, 10);
    this.timeInEvents.push({
        type: "TimeIn",
        hour,
        date
    })
    return this
 }
 function createTimeOutEvent (dateStamp){
    const [date, time] = dateStamp.split(' ');
    const hour = parseInt(time,10);
    this.timeOutEvents.push({
        type: "TimeOut",
        hour,
        date
    })
    return this
 }
 function hoursWorkedOnDate(date){
    const dateIn = this.timeInEvents.find((event) => event.date === date)
    const dateOut = this.timeOutEvents.find((event) => event.date === date)
    // if (dateIn && dateOut) {
    const dateHours = (dateOut.hour-dateIn.hour) / 100;
    // }
    return dateHours
 }
function wagesEarnedOnDate(date){
    const wagesEarned = this.payPerHour*hoursWorkedOnDate.call(this, date);
    return wagesEarned
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find((employee)=>employee.firstName === firstName);
    }
function calculatePayroll(employees){
return employees.reduce((total,employee) => total + allWagesFor.call(employee), 0)
}    


export const csvHeaders = [
    { headerName: 'Name', field: 'name' , sortable: true, filter: true, checkboxSelection: true, resizable: true, cellRenderer: "LinkComponent" },
    { headerName: 'Description', field: 'description' , sortable: true, filter: true, resizable: true },
    // { headerName: 'Material', field: 'material' , sortable: true, filter: true, resizable: true },
    // { headerName: 'Learning-Resource', field: 'learningResource' , sortable: true, filter: true, resizable: true },
    // { headerName: 'Frequency', field: 'frequency' , sortable: true, filter: true, resizable: true },
    { headerName: 'Region', field: 'region' , sortable: true, filter: true, resizable: true },
    // { headerName: 'Expense-Code', field: 'expenseCode' , sortable: true, filter: true, resizable: true },
    // { headerName: 'GroupSizeMin', field: 'groupSizeMin' , sortable: true, filter: true, resizable: true },
    // { headerName: 'GroupSizeMax', field: 'groupSizeMax' , sortable: true, filter: true, resizable: true },
    // { headerName: 'Experience-Min', field: 'experienceMin' , sortable: true, filter: true, resizable: true },
    // { headerName: 'Experience-Max', field: 'experienceMax' , sortable: true, filter: true, resizable: true },
    // { headerName: 'SuggestedRoles', field: 'suggestedRoles' , sortable: true, filter: true, resizable: true },

    { headerName: 'EmpName', field: 'participantsName' , sortable: true, filter: true, resizable: true },
    { headerName: 'EmpId', field: 'participantsEmpId' , sortable: true, filter: true, resizable: true },
    { headerName: 'EmpEmail', field: 'participantsEmail' , sortable: true, filter: true, resizable: true },
    { headerName: 'EmpLocation', field: 'employeeLocation' , sortable: true, filter: true, resizable: true },


    // { headerName: 'Event-Id', field: 'eventId' , sortable: true, filter: true, resizable: true },
    { headerName: 'Event Start Date', field: 'fromDate' , sortable: true, filter: true, resizable: true },
    { headerName: 'Event End Date', field: 'toDate' , sortable: true, filter: true, resizable: true },
    { headerName: 'Room', field: 'room' , sortable: true, filter: true, resizable: true },
    // { headerName: 'Disable Self-SignUp', field: 'disableSelfSignUp' , sortable: true, filter: true, resizable: true },
    // { headerName: 'SignUp LastDate', field: 'signUpLastDate' , sortable: true, filter: true, resizable: true },
  
    { headerName: 'Participant-Status', field: 'participantStatus' , sortable: true, filter: true, resizable: true }]
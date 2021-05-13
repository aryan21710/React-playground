export const csvHeaders = [
	{
		headerName: 'Name',
		field: 'name',
        cellRenderer: 'LinkComponent',
        filter: true,
	},
	{ headerName: 'Description', field: 'description', sortable: true, resizable: true },
	{ headerName: 'Region', field: 'region', sortable: true, resizable: true },
	{ headerName: 'EmpName', field: 'employeeName', sortable: true, resizable: true },
	{ headerName: 'EmpId', field: 'employeeId', sortable: true, resizable: true },
	{ headerName: 'EmpEmail', field: 'employeeEmail', sortable: true, resizable: true },
	{ headerName: 'EmpLocation', field: 'employeeLocation', sortable: true, resizable: true },
	{ headerName: 'Event Start Date', field: 'fromDate', sortable: true, resizable: true },
	{ headerName: 'Event End Date', field: 'toDate', sortable: true, resizable: true },
	{ headerName: 'Room', field: 'room', sortable: true, resizable: true },
	{ headerName: 'Participant-Status', field: 'participantStatus', sortable: true, resizable: true },
];

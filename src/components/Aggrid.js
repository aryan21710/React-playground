import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { csvData1 } from './data';
import { csvHeaders } from './csvHeaders';

function 	 LinkComponent(props) {
	return (
	  <a href={"www.google.com"}>
		{props.value}
	  </a>
	);
  }

class Aggrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// columnDefs: [
			// 	{
			// 		headerName: 'Name',
			// 		field: 'name',
			// 		sortable: true,
			// 		filter: true,
			// 		checkboxSelection: true,
			// 		resizable: true,
			// 		cellRenderer: 'LinkComponent',
			// 	},
			// 	{ headerName: 'Description', field: 'description', sortable: true, filter: true, resizable: true },
			// ],
			// defaultColDef: {
			// 	flex: 1,
			// 	minWidth: 150,
			// 	filter: true,
			// },
			rowData: [],
		};
	}

	// onGridReady = params => {
	// 	this.gridApi = params.api;
	// 	this.gridColumnApi = params.columnApi;

	// 	const httpRequest = new XMLHttpRequest();
	// 	const updateData = data => {
	// 		this.setState({ rowData: data });
	// 	};

	// 	httpRequest.open('GET', 'https://www.ag-grid.com/example-assets/olympic-winners.json');
	// 	httpRequest.send();
	// 	httpRequest.onreadystatechange = () => {
	// 		if (httpRequest.readyState === 4 && httpRequest.status === 200) {
	// 			updateData(JSON.parse(httpRequest.responseText));
	// 		}
	// 	};
	// };





	render() {
		return (
			<div style={{ width: '100vw', height: '100vh' }}>
				<div
					id="myGrid"
					style={{
						height: '100%',
						width: '100%',
					}}
					className="ag-theme-alpine"
				>
					<h1>AG GRID EXAMPLE</h1>
					<AgGridReact
						columnDefs={csvHeaders}
						// defaultColDef={this.state.defaultColDef}
						onGridReady={this.onGridReady}
						rowData={csvData1}
						frameworkComponents={{
							LinkComponent
						  }}
					/>
				</div>
			</div>
		);
	}
}

// var filterParams = {
// 	comparator: function(filterLocalDateAtMidnight, cellValue) {
// 		var dateAsString = cellValue;
// 		if (dateAsString == null) return -1;
// 		var dateParts = dateAsString.split('/');
// 		var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
// 		if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
// 			return 0;
// 		}
// 		if (cellDate < filterLocalDateAtMidnight) {
// 			return -1;
// 		}
// 		if (cellDate > filterLocalDateAtMidnight) {
// 			return 1;
// 		}
// 	},
// 	browserDatePicker: true,
// 	minValidYear: 2000,
// };

export { Aggrid };

import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { csvData } from './data';
import { csvHeaders } from './csvHeaders';


function LinkComponent(props) {
	return (
		<a href={'www.google.com'}>
			{props.value}
		</a>
	);
}

class Aggrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rowData: [],
			gridApi: null,
			gridColumnApi: null,
			selectedRow: '',
		};
	}

	onGridReady = params => {
		this.setState({
			gridApi: params.api,
			gridColumnApi: params.columnApi,
		});
	};

	onSelectionChanged = () => {
		this.setState({
			selectedRow:
				this.state.gridApi.getSelectedRows().length > 0
					? this.state.gridApi.getSelectedRows()[0].name
					: 'error',
		});
	};

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
					<p>
						Selection: {this.state.selectedRow}
					</p>
					<AgGridReact
						columnDefs={csvHeaders}
						suppressMenuHide={true}
						onGridReady={this.onGridReady}
						onSelectionChanged={this.onSelectionChanged}
						rowSelection={'single'}
						rowData={csvData}
						frameworkComponents={{
							LinkComponent,
						}}
					/>
				</div>
			</div>
		);
	}
}

export { Aggrid };

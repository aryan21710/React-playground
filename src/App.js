import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { CSVLink } from 'react-csv';

const App = () => {
	const csvData = [
		['firstname', 'lastname', 'email'],
		['Ahmed', 'Tomi', 'ah@smthing.co.com'],
		['Raed', 'Labes', 'rl@smthing.co.com'],
		['Yezzi', 'Min l3b', 'ymin@cocococo.com'],
	];

	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<CSVLink
				data={csvData}
				filename={'my-file.csv'}
				target="_blank"
				style={{ margin: '2vh 0vw', textDecoration: 'none', outline: 'none' }}
			>
				<Button variant="contained" color="primary">
					{' '}Download CSV
				</Button>
			</CSVLink>
		</Grid>
	);
};

export default App;

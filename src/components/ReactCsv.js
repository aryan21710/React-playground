import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { csvData } from './data';
import { Button } from '@material-ui/core';
import moment from 'moment';


export const ReactCsv = () => {
	const [csvFormattedData, setCsvFormattedData] = useState([]);

    const createCsvFileName = ()=> `learnr_data_${moment().format()}.csv`;

    useEffect(()=>{
        findIndexOfArr(csvData);
	}, []);


    let ArrayIndexes=[];
    const findIndexOfArr=(csvData)=>{
            csvData.forEach((data,idx)=>{
                for (let i in data) {
                    if (Array.isArray(data[i])) {
                        ArrayIndexes=[...ArrayIndexes,{[i]:data[i].length}]
                        console.log('ArrayIndexes',ArrayIndexes);
                        return findIndexOfArr(data[i]);
                     }
            }
        })
    }


	const formatCsvData=()=>{
		let eventArr=[];
		let formatedCsvData=[];
		csvData.forEach((data)=>{
			 if (data.events.length > 0 ) {
				 eventArr=[...data.events]
				 eventArr.forEach((arr)=>{
					let obj={};
					for (let i in data) {
						if (i !== "events") {
							obj[i]=data[i]
						}
					}
					obj={...obj,events: [arr]}
					formatedCsvData.push(obj)
				 })
			 } else {
				let obj={};
				for (let i in data) {
					if (i !== "events") {
						obj[i]=data[i]
					}
				}
				obj={...obj,events: []}
				formatedCsvData.push(obj)
			 }
			
		})

		console.log('formatedCsvData',formatedCsvData);
	}
	
	const headers = [
		{ label: 'Name', key: 'name' },
		{ label: 'Description', key: 'description' },
		{ label: 'Room', key: 'room' },		
		{ label: 'Participants', key: 'participants' },
	];

	const data = csvData.map(item => ({
		name: item.name,
		description: item.description,
		room: item.events.map(_ => _.room),
		participants: item.events.map(event => event.participants.map(pariticipant => pariticipant.employeeId)),
	}));


	return (
		<CSVLink
			data={data}
			headers={headers}
			filename={createCsvFileName()}
			target="_blank"
			style={{ textDecoration: 'none', outline: 'none', height: '5vh' }}
		>
			<Button variant="contained" color="secondary" style={{ height: '100%' }}>
				DOWNLOAD-CSV
			</Button>
		</CSVLink>
		
	);
};

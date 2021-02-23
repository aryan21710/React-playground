import React from "react";
import ReactExport from "react-export-excel";
import {csvData} from './data';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    }
];


export class Download extends React.Component {
    render() {
        return (
            <ExcelFile>
                <ExcelSheet data={csvData} name="Employees">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Description" value="description"/>
              
                </ExcelSheet>
            </ExcelFile>
        );
    }
}
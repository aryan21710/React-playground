import React, { useState } from 'react';
import { InputBase, Grid, Card, Paper, Table, TableBody, TableCell, TableRow  } from '@material-ui/core';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';


export const AutoPopulateEmailWhenTyped = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    const FilteredEmployeesComponent = ({ filteredEmployees, classes, paperStyles, tableRowClass, populateSelectedEmail }) =>  {
        // eslint-disable-next-line no-console
        console.log('filteredEmployees', filteredEmployees);
        return (
            <Paper className={paperStyles}>
                <Table className={classes.table}>
                    <TableBody>
                        {
                            filteredEmployees && filteredEmployees
                                .map((emp, i) =>
                                    <TableRow
                                        align="center"
                                        key={i}
                                        className={tableRowClass}
                                        onClick={(() => populateSelectedEmail(emp))}>
                                        <TableCell>{emp.preferredName}</TableCell>
                                        <TableCell>{`${emp.loginName}@thoughtworks.com`}</TableCell>
                                    </TableRow>
                                )
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    };

    const handleChange = (e) => {
        let value = e.target.value;
        const returnedFilteredEmployees = getFilteredEmployees(value, employeeData);
        // eslint-disable-next-line no-console
        console.log('returnedFilteredEmployees', returnedFilteredEmployees);

        setInputValue(value);
        returnedFilteredEmployees ? setFilteredEmployees([ ...returnedFilteredEmployees ]) : setFilteredEmployees([...filteredEmployees]);

    };

    const getFilteredEmployees = (value, employeeData) => {
        const givenEmails = value.split(',');
        let stringToSearch = givenEmails[givenEmails.length - 1];
        let filteredEmployees = [];
        console.log('stringToSearch',stringToSearch)
        if (stringToSearch.length > 0) {
            filteredEmployees = employeeData.filter(employee => {
                if (_.startsWith(employee.preferredName.toLowerCase(), stringToSearch.toLowerCase()))
                    return true;
                const names = employee.preferredName.toLowerCase().split(' ');
                names.push(employee.loginName);
                for (let i = 0; i < names.length; i++) {
                    if (_.startsWith(names[i], stringToSearch.toLowerCase()))
                        return true;
                }
                return false;
            });
            return filteredEmployees;
        }
    };

    const populateSelectedEmailId = (trainersEmails, emp) => {
        const emails = trainersEmails.split(',');
        emails[emails.length - 1] = `${emp.loginName}@$thoughtworks.com`;
        return `${_.join(emails, ',')  },`;
    };


    const   populateSelectedEmail = emp => {
        const selectedEmailIds = populateSelectedEmailId(inputValue, emp);
        setInputValue(selectedEmailIds);
        setFilteredEmployees([]);
    };

    const employeeData = [
        { preferredName: 'Aryan Sharma', loginName: 'aryan.sharma', employeeId: 29145 },
        { preferredName: 'Ayan Sharma', loginName: 'sim.sharma', employeeId: 29144 },
        { preferredName: 'Anil sharma', loginName: 'ryan.sharma', employeeId: 29146 },
    ];

    const useStyles = makeStyles(theme => ({
        outerContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'pink',
            width: '100vw',
            height: '10vh',
            padding: '0',
            margin: '0',
        },
        input: {
            width: '20vw',
            height: '5vh',
            textAlign: 'center',
            position: 'relative',
            fullWidth: true,
            margin: 0,
        },
        autoSuggestionContainer: {
            width: '66.5%',
            marginLeft: 0,
        },
        autoSuggestionRow: {
            '&:hover': {
                backgroundColor: 'rgba(25, 155, 255, 0.10)',
                cursor: 'pointer'
            },
        },
        autosuggestion: {
            overflow: 'scroll',
            height: '30vh',
            position: 'relative',
            width: '100%'
        },
    }));
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item className={classes.outerContainer} xs={8} container>
                <Grid item xs={10}>
                    <InputBase multiline className={classes.input} placeholder="ENTER TEXT" fullWidth  value={inputValue}
                        onChange={handleChange}/>
                </Grid>
            </Grid>
            {filteredEmployees && filteredEmployees.length !== 0 &&
                <Card xs={20} className={classes.autoSuggestionContainer}>
                    <div className={classes.autosuggestion} id="autosuggestion-table"
                        data-testid="autosuggestion-table">
                        <FilteredEmployeesComponent
                            filteredEmployees={filteredEmployees}
                            classes={classes}
                            paperStyles={classnames(classes.input, classes.autosuggestion)}
                            tableRowClass={classes.autoSuggestionRow}
                            populateSelectedEmail={populateSelectedEmail}
                        />
                    </div>
                </Card>
            }

        </Grid>
    );
};


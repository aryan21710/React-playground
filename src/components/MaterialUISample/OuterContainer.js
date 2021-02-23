import React, { useState, useEffect } from 'react';
import { Button, Grid, Box, Typography, Container, InputBase } from '@material-ui/core';
import { css } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import ApartmentIcon from '@material-ui/icons/Apartment';

const useStyles = makeStyles(theme => ({
	headerBox: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'grey',
		width: '100vw',
		height: '10vh',
		position: 'absolute',
		top: '0vh',
	},

	footer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'grey',
		width: '100vw',
		height: '5vh',
		position: 'absolute',
		bottom: '0vh',
	},
	mainContainer: {
        display: 'flex',
        flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'yellow',
		width: '80vw',
		height: '90vh',
		margin: 'auto auto',
	},
	outerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'pink',
		width: '100vw',
		height: '100vh',
		padding: '0',
		margin: '0',
	},
	input: {
		height: '5vh',
		color: 'black',
		textAlign: 'center',
		background: 'grey',
	},
}));

export const OuterContainer = () => {
	const classes = useStyles();
	const Header = () => {
		return (
			<div className={classes.headerBox}>
				<ApartmentIcon style={{ width: '5vw', height: '4vh', color: 'green' }} />
				<Typography align="center" variant="h4">
					Material UI Sample Layout
				</Typography>
			</div>
		);
	};

	const MainContainer = () => {
		const [data, setData] = useState('');

		const onChangeHandler = e => setData(e.target.value);
		return (
			<Container className={classes.mainContainer}>
				<InputBase
					multiline
					className={classes.input}
					placeholder="ADD TEXT"
					value={data}
					onChange={onChangeHandler}
					fullWidth
				/>
				<h1>
				 {data}
				</h1>
			</Container>
		);
	};

	const Footer = () => {
		return (
			<Box className={classes.footer}>
				<Typography align="center" variant="h6">
					Copyrighted @Footer
				</Typography>
			</Box>
		);
	};
	return (
		<Box className={classes.outerContainer}>
			<Header />
			<MainContainer />
			<Footer />
		</Box>
	);
};

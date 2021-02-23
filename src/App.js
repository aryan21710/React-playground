import React from 'react';
import { Grid } from '@material-ui/core';
import { OuterContainer } from './components/MaterialUISample/OuterContainer';
import {HandlingStateInTextInput} from './components/HandlingStateInTextInput';
import DummyClassComp from './components/DummyClassComp';

const App = () => {
	return (
		<Grid container direction="column" justify="center" alignItems="center">
			<DummyClassComp />
		</Grid>
	);
};

export default App;

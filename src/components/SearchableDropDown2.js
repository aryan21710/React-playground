import React, { useState, useEffect } from 'react';

export const SearchableDropDown2 = () => {
	const [searchText, setSearchText] = useState('');
	const [dropdownOptions, setDropdownOptions] = useState(['audi', 'mercedes', 'bmw', 'maserati', 'ambassador']);
	const [copyOfdropdownOptions, setCopyOfDropdownOptions] = useState([...dropdownOptions]);


	useEffect(
		() => {
			searchText.length > 0 ? filterDropDown() : restoreDropDown();
		},
		[searchText]
	);

	const filterDropDown = () => {
		const filteredDropdown = dropdownOptions.filter(_ => _.startsWith(searchText.toLowerCase()));
		setDropdownOptions([...filteredDropdown]);
	};

	const restoreDropDown = () => {
		if (dropdownOptions.length !== copyOfdropdownOptions.length) {
			setDropdownOptions([...copyOfdropdownOptions]);
		}
	};


	const onSearchHandler = e => setSearchText(e.target.value.trim());
	return (
		<div style={styles.mainContainer}>
			<input type="search" value={searchText} onChange={onSearchHandler} style={styles.search} placeholder="search" />
			<div style={styles.dropdownContainer}>
				{dropdownOptions.map((_, idx) =>
					<span style={styles.dropdownOptions} data-myoptions={_} value={_}>
						{_}
					</span>
				)}
			</div>
		</div>
	);
};

const styles = {
	mainContainer: {
	},
	dropdownContainer: {
		width: '20.5vw',
		background: 'grey',
	},
	dropdownOptions: {
        width: '20vw',
        display: 'block',
        height: '2vh',
        color: 'white',
        padding: '0.2vh 0.5vw'
	},
	search: {
		width: '20vw',
	},
};

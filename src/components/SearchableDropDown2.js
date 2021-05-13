import React, { useState, useEffect, useCallback } from 'react';

export const SearchableDropDown2 = () => {
	const [searchText, setSearchText] = useState('');
	const [dropdownOptions, setDropdownOptions] = useState(['React','Angular','Vue','jQuery','Nextjs']);
	const [copyOfdropdownOptions, setCopyOfDropdownOptions] = useState([...dropdownOptions]);
	const [isExpand, setIsExpand] = useState(false);

	useEffect(
		() => {
			searchText.length > 0 ? filterDropDown() : restoreDropDown();
		},
		[searchText]
	);

	const onClickHandler = e =>  {
		setSearchText(e.target.dataset.myoptions);
		setIsExpand(false);
	}

	const onSearchDropDown = () => setIsExpand(true);

	const closeDropDownHandler = () => setIsExpand(false);

	const filterDropDown = useCallback(() => {
		const filteredDropdown = dropdownOptions.filter(_ => _.toLowerCase().includes(searchText.toLowerCase()));
		setDropdownOptions([...filteredDropdown]);
	},[dropdownOptions,searchText])

	const restoreDropDown = () => {
		if (dropdownOptions.length !== copyOfdropdownOptions.length) {
			setDropdownOptions([...copyOfdropdownOptions]);
		}
	}

	const onSearchHandler = e => setSearchText(e.target.value.trim());
	return (
		<div style={styles.mainContainer}>
			<input
				type="search"
				value={searchText}
				onClick={onSearchDropDown}
				onChange={onSearchHandler}
				style={styles.search}
				placeholder="search"
			/>
			<button disabled={!isExpand} onClick={closeDropDownHandler}>
				-
			</button>
			<div
				style={
					isExpand
						? styles.dropdownContainer
						: {
								...styles.dropdownContainer,
								height: '0vh',
							}
				}
			>
				{dropdownOptions.map((_, idx) =>
					<span onClick={onClickHandler} style={styles.dropdownOptions} data-myoptions={_} value={_}>
						{_}
					</span>
				)}
			</div>
		</div>
	);
};

const styles = {
	mainContainer: {
		padding: '1vh 1vw',
		width: '28vw',
		margin: 'auto auto'
	},
	dropdownContainer: {
		width: '25vw',
		background: 'grey',
		height: '10vh',
		overflow: 'scroll'
	},
	dropdownOptions: {
		display: 'block',
		height: '2vh',
		color: 'white',
		padding: '0.2vh 0.5vw',
		cursor: 'pointer',
	},
	search: {
		width: '25vw',
	},
};

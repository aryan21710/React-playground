import React, { useState, useEffect } from 'react';

export const SearchableDropDown1 = () => {
    const [inputValue, setInputValue] = useState('');
    const [searchText, setSearchText]=useState('');
    const [dropdownOptions, setDropdownOptions]=useState(['audi','mercedes','bmw','maserati','ambassador']);
    const [copyOfdropdownOptions, setCopyOfDropdownOptions]=useState([...dropdownOptions]);


	useEffect(
		() => {
			inputValue.length > 0 && alert(inputValue);
		},
		[inputValue]
    );


    useEffect(()=>{
        searchText.length > 0 ? filterDropDown() : restoreDropDown()
    },[searchText])

    const filterDropDown=()=>{
        const filteredDropdown=dropdownOptions.filter((_)=>_.startsWith(searchText.toLowerCase()));
        setDropdownOptions([...filteredDropdown])
    }
    
    const restoreDropDown=()=>{
        if (dropdownOptions.length !== copyOfdropdownOptions.length) {
            setDropdownOptions([...copyOfdropdownOptions])
        }
    }

	const onChangeHandler = e => setInputValue(e.target.options[e.target.selectedIndex].dataset.myoptions);
    
    const onSearchHandler=(e)=>setSearchText(e.target.value.trim());
	return (
        <div style={styles.mainContainer}>
        <input value={searchText} onChange={onSearchHandler} style={styles.search} placeholder="search"/>

            <select style={styles.dropdownContainer} onChange={onChangeHandler} name="cars" id="cars">
            {dropdownOptions.map((_,idx)=><option data-myoptions={_} value={_}>{_}</option>)}
			</select>
		</div>
	);
};

const styles = {
	mainContainer: {
		width: '50vw',
		height: '50vh',
        display: 'flex',
        flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid red',
	},
	dropdownContainer: {
		width: '10vw',
    },
    search: {
        width: '9.5vw'
    }
};

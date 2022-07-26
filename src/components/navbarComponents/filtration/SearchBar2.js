import React from 'react'
import { StyledSearchBar2 } from './Filtration.styles'

const SearchBar2 = ({ placeholder, setInputText }) => {
	const handleChange = e => {
		if (setInputText) {
			setInputText(e.target.value)
		}
	}
	return (
		<StyledSearchBar2>
			<input placeholder={placeholder} onChange={e => handleChange(e)}></input>
		</StyledSearchBar2>
	)
}

export default SearchBar2

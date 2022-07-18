import React from 'react'
import { StyledSearchBar2 } from './Filtration.styles'

const SearchBar2 = ({ placeholder }) => {
	return (
		<StyledSearchBar2>
			<input placeholder={placeholder}></input>
		</StyledSearchBar2>
	)
}

export default SearchBar2

import React, { useState } from 'react'
import { StyledSearchBar2 } from './Filtration.styles'

const SearchBar2 = ({ placeholder, handleSubmit }) => {
	const [userInput, setUserInput] = useState('')
	const handleChange = e => {
		setUserInput(e.target.value)
	}

	return (
		<StyledSearchBar2
			onSubmit={e => {
				setUserInput('')
				handleSubmit(e, userInput)
			}}
		>
			<input
				type={'text'}
				placeholder={placeholder}
				value={userInput}
				onChange={e => handleChange(e)}
			></input>
		</StyledSearchBar2>
	)
}

export default SearchBar2

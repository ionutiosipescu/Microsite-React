import React, { useState } from 'react'
import { Search } from '../../../assets/icons'
import { Form } from './Filtration.styles'

const SearchBar = ({ visible, handleClick, disappearOnMobile }) => {
	const [userInput, setUserInput] = useState(null)

	const handleChange = e => {
		setUserInput(e.target.value)
	}

	return (
		<Form visible={visible} disappearOnMobile={disappearOnMobile}>
			<input
				type={'text'}
				placeholder={'Search by name'}
				onChange={e => handleChange(e)}
			></input>
			<button onClick={e => handleClick(e, userInput)}>
				<Search />
			</button>
		</Form>
	)
}

export default SearchBar

import React, { useState } from 'react'
import { Search } from '../../../assets/icons'
import { Form } from './Filtration.styles'

const SearchBar = ({
	visible,
	disappearOnMobile,
	placeholder,
	handleSubmit,
	openBigNavbar,
}) => {
	const [userInput, setUserInput] = useState('')
	const handleChange = e => {
		setUserInput(e.target.value)
	}

	return (
		<Form
			visible={visible}
			disappearOnMobile={disappearOnMobile}
			onSubmit={e => {
				setUserInput('')
				handleSubmit(e, userInput, openBigNavbar)
			}}
		>
			<input
				type={'text'}
				placeholder={placeholder}
				value={userInput}
				onChange={e => handleChange(e)}
			></input>
			<button type="submit">
				<Search />
			</button>
		</Form>
	)
}

export default SearchBar

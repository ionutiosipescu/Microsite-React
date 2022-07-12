import React, { useState } from 'react'
import styled from 'styled-components'
import { Search } from '../../assets/icons'
import { size } from '../../utils/breakpoints'

const Form = styled.form`
	display: ${props => {
		return props.visible ? 'none' : 'flex'
	}};

	font-size: 1rem;

	height: 70px;

	margin-left: auto;

	input {
		display: ${props => (props.disappearOnMobile ? 'none' : 'initial')};

		background-color: var(--searchBarBlue);
		width: 100%;
		padding: 1rem;

		height: 100%;
		color: white;
		border: 0;

		::placeholder {
			color: white;
		}

		@media ${size.lg} {
			display: initial;
		}
	}

	button {
		width: 70px;
		border: 0;
		background-color: var(--searchBarBlue);
		transition: all 0.2s ease-in-out;

		img {
			width: 20px;
			color: white;
		}

		:hover {
			background-color: white;
		}
	}
`

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

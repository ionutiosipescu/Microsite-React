import React from 'react'
import styled from 'styled-components'
import { Search } from '../../assets/icons'

const Form = styled.form`
	/* height: 100%; */
	/* height: 200px; */
	/* padding: 1rem; */
	display: flex;
	height: 70px;

	/* background-color: red; */
	input {
		background-color: #003e6a;
		height: 100%;
		color: white;

		::placeholder {
			color: white;
		}
	}

	input[type='submit'] {
		/* background-color: red; */
		border: 0;

		:hover {
			background-color: white;
		}
	}

	input[type='text'] {
		/* background-color: red; */
		padding: 1rem;
	}

	button {
		width: 70px;
		img {
			width: 20px;
			color: white;
		}
	}
`

const SearchBar = () => {
	return (
		<Form>
			<input type={'text'} placeholder={'Search by name'}></input>
			{/* <input type={'submit'} placeholder={'asdf'} text="fuck"></input> */}
			<button type={'submit'} placeholder={'asdf'}>
				<Search />
			</button>
		</Form>
	)
}

export default SearchBar

import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
	button {
		border-radius: 5px;
		border: none;
		width: auto;
		height: auto;
		padding: 0 1.875rem; 
		line-height: 2.5rem;
		color: #000;
		background-color: #d9d9d9;
		transition: background-color 0.2s ease-out,color 0.2s ease-out;
		margin: 40px 0;
	}
	.firstlanguage:focus, .secondlanguage:focus {
		color: #fff;
   		background-color: #0085ca !important;
    	cursor: default;
	}
	button:hover {
		color: #fff;
   		background-color: #cf7f00;
	}

`


const TranslateButton = ({text1, text2}) => {

	return (
		<ButtonContainer>
			<button autoFocus className='firstlanguage'>{text1}</button>
			<button className='secondlanguage'>{text2}</button>
		</ButtonContainer>
	)
}

export default TranslateButton

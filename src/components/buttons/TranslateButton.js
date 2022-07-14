import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const {t, i18n } = useTranslation();
function handleClick(lang) {
    i18n.changeLanguage('lang')
}

const TranslateButton = () => {
	return (
		<Button className='btn btn-primary'>
			<button onClick={()=>handleClick('en')}>English</button>
			<button onClick={()=>handleClick('po')}>Portuguese</button>
		</Button>
	)
}

export default TranslateButton

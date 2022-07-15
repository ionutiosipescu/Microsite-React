import React from 'react'
import styled from 'styled-components'
import { size } from '../../../utils/breakpoints'

const NavigationCell = ({ children, href }) => {
	return (
		<>
			<a href={href}>{children}</a>
		</>
	)
}

export default NavigationCell

import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

export const NewsCell = styled.div`
	border-bottom: 1px solid #e6e6e6;
`

export const CardHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
`

export const CustomNavbar = styled(Navbar)`
	background-color: var(--darkBlue);
	font-size: 20px;

	color: white;

	// a {
	// 	color: white;
	// }

	// div {
	// 	color: white;
	// }
`

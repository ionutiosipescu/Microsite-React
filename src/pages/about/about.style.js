import styled from 'styled-components'
// import digital from '../../assets/images/digital.jpg'
import digital from '../../assets/images/digital'
import { size } from '../../utils/breakpoints'


export const CustomNavbar = styled.div`
	font-size: 1.5rem;
	background: var(--darkBlue);
	color: white;

	:hover {
		cursor: pointer;
	}
	@media ${size.smm} {
		text-align: center;
	}
	 @media ${size.md_m} {
		display: flex;
	 }
`

export const NavItem = styled.div`
	padding: 20px;

	// Check if Nav item is clicked
	background: ${props => (props.clicked ? 'white' : 'var(--darkBlue)')};
	color: ${props => (props.clicked ? 'black' : 'white')};
	border-bottom: 1px solid
		${props => (props.clicked ? 'var(--darkBlue1)' : 'none')};
`

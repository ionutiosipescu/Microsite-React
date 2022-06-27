import styled from 'styled-components'
// import digital from '../../components/images/digital.jpg'
import digital from '../../components/images/digital'

export const CustomNavbar = styled.div`
	display: flex;
	font-size: 1.5rem;
	background: var(--darkBlue);
	color: white;

	:hover {
		cursor: pointer;
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

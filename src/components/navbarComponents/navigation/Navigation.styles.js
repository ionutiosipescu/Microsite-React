import styled from 'styled-components'
import { size } from '../../../utils/breakpoints'

export const Container = styled.nav`
	display: column;

	background-color: var(--darkBlue);
	color: white;
	font-size: 1rem;
	min-height: 70px;

	a {
		color: white;
		text-decoration: none;
	}

	& > ul {
		flex-grow: 1;
		padding-left: 0;

		margin-bottom: 0;
		display: ${props => (props.toggle ? 'column' : 'none')};

		display: column;

		@media ${size.lg} {
			display: flex;

			justify-content: ${props =>
				props.spread ? 'space-between' : 'flex-start'};
		}
	}

	@media ${size.lg} {
		display: flex;
	}
`

export const MobileDropdown = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	transition: all 0.2s ease-in-out;
	min-height: 70px;

	flex-grow: 1;

	:hover {
		cursor: pointer;
		color: white;
	}

	@media ${size.lg} {
		display: none;
	}
`

export const Cell = styled.li`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;

	padding: 1rem 0;

	transition: all 0.2s ease-in-out;

	background: ${props => (props.highlight ? 'white' : 'none')};
	color: ${props => (props.highlight ? 'black' : 'white')};

	:hover {
		background: white;
		color: black;
		cursor: pointer;
	}

	@media ${size.lg} {
		padding: 0 2rem;
	}
`

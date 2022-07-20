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

	& > form {
		display: none;

		@media ${size.lg} {
			display: flex;
		}
	}

	& > ul {
		flex-grow: 1;

		margin-bottom: 0;
		display: ${props => (props.toggle ? 'column' : 'none')};

		display: column;

		@media ${size.lg} {
			display: flex;
			padding-left: 0;

			justify-content: ${props =>
				props.spread ? 'space-between' : 'flex-start'};
		}
	}

	@media ${size.lg} {
		display: flex;
	}
`

export const Form = styled.form`
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

export const StyledSearchBar2 = styled.div`
	display: none;
	align-items: center;
	padding: 0.5rem 3rem;

	input {
		color: red;
		height: 70%;
		border-radius: 5px;
		padding: 1rem;
	}

	@media ${size.lg} {
		display: flex;
	}
`

export const MobileDropdown = styled.div`
	display: flex;

	div {
		transition: all 0.2s ease-in-out;
		display: flex;
		align-items: center;
		padding-left: 2rem;
		min-height: 70px;

		flex-grow: 1;

		:hover {
			cursor: pointer;
			color: var(--orange2);
		}
	}

	@media ${size.lg} {
		display: none;
	}
`
export const Cell = styled.li`
	display: flex;
	height: 100%;
	align-items: center;

	padding: 0.5rem 1rem;

	transition: all 0.2s ease-in-out;

	:hover {
		background-color: var(--darkBlue1);
		cursor: pointer;
		color: var(--hover-blue);

		/* Without the css bellow if 'a' elem has a href, the color will not change. Anoying. Don't know a better way of fixing this*/
		a {
			transition: all 0.2s ease-in-out;
			color: var(--hover-blue);
		}
	}

	@media ${size.lg} {
		padding: 0 2rem;
	}
`
export const DropdownCell = styled(Cell)`
	padding: 1rem 2rem;
`

export const Dropdown = styled.ul`
	display: ${props => (props.show ? 'initial' : 'none')};

	padding: 0;
	margin: 0;

	@media ${size.lg} {
		display: ${props => (props.show ? 'initial' : 'none')};

		position: absolute;
		z-index: 2;
		background-color: var(--darkBlue1);

		display: ${props => (props.show ? 'grid' : 'none')};

		grid-template-columns: repeat(
			${props => props.columns || 2},
			minmax(200px, 1fr)
		);

		div {
			/* How the heck do i vertically align text? */
			padding: 0.5rem 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`

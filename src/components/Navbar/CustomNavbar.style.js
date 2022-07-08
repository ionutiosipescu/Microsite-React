import styled from 'styled-components'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

export const StyledNavbar = styled(Navbar)`
	padding: 0;

	/* This maybe */
	/* padding: 1rem 0 !important; */

	font-size: 1.5rem;

	background-color: var(--darkBlue);

	a {
		color: white !important;
		padding: 1rem 0;
	}
	a:hover {
		color: var(--hover-blue) !important;
		background-color: var(--darkBlue1);
	}

	div {
		/* margin: 1rem; */
	}
`

export const StyledDropdown = styled(NavDropdown)`
	margin: 0;
	height: 100%;

	div {
		background: var(--darkBlue1);
		font-size: 1.5rem !important;
		margin-top: 0 !important;
	}
`

// export const StyledNavbar = styled(Navbar)`
// 	background: var(--darkBlue);

// 	.navbarScrollingDropdown,
// 	.web-title {
// 		color: #fff;
// 		padding: 20px 12px !important;
// 	}
// 	.nav-item.show.dropdown {
// 		background-color: #002b49;
// 	}
// 	.nav-item.show.dropdown a {
// 		color: #fff !important;
// 	}
// 	.nav-item.show.dropdown div {
// 		background-color: #002b49;
// 		border-radius: 0;
// 		margin-top: 0;
// 		padding-bottom: 0.5rem;
// 		border: 0;
// 	}
// 	.nav-item.show.dropdown a {
// 		background-color: #002b49;
// 	}
// 	.nav-link {
// 		color: #fff !important;
// 	}
// 	.nav-item:hover .dropdown-menu {
// 		display: block !important;
// 	}
// `

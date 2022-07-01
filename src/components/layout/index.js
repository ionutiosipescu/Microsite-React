import React from 'react'
import styled from 'styled-components'
import Navbar from './NavBar'
import Footer from './Footer'
import { size } from '../../utils/breakpoints'

const Page = styled.div`
	margin: 0 auto;
	background-color: white;

	@media ${size.xl} {
		max-width: 80%;
	}

	/* @media ${size.laptopL} {
			max-width: 70%;
		} */
`
const Container = styled.div`
	background: var(--gray1);
`

const Content = styled.div``

const Layout = props => {
	return (
		<Container>
			<Page>
				<Navbar />
				<div {...props}>{props.children}</div>
				<Footer className="my-2" />
			</Page>
		</Container>
	)
}

export default Layout

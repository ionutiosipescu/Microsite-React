import React from 'react'
import styled from 'styled-components'
import Navbar from './NavBar'
import Footer from './Footer'

const Page = styled.div`
	max-width: 80%;
	margin: 0 auto;
	background-color: white;
	// border: 2px solid red;
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

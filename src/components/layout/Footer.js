import React from 'react'
import styled from 'styled-components'
import { Form, Button } from 'react-bootstrap'
import BulletinSignup from '../BulletinSignup'
import { LinkedIn, Facebook, Twitter, YouTube } from '../icons'
// import FacebookIcon from '@mui/icons-material/Facebook'

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	// align-items: space-between;

	justify-content: space-between;

	gap: 30px;
	// background: white;
	// height: 700px;
`

const LinksC = styled.div`
	display: flex;
	justify-content: space-around;
`

const Col = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 30px;

	p {
		font-weight: bold;
	}
`

const Copyright = styled.div`
	background: black;
	color: white;
	padding: 20px;
	// flex: 2;
	width: 50%;
`

const Footer = () => {
	return (
		<FooterContainer className="bg-light">
			<BulletinSignup />
			<LinksC>
				<Col>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
				</Col>
				<Col>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
				</Col>

				<Col>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
					<p>Lorem Ipsum</p>
				</Col>
				<Col>
					<div className="d-flex gap-3">
						<LinkedIn />
						<YouTube />
						<Facebook />
						<Twitter />
					</div>
				</Col>
			</LinksC>
			<Copyright>
				<p>Lorem Ipsum Dolor</p>
				<p>Lorem Ipsum Dolor</p>
				<p>Lorem Ipsum Dolor</p>
			</Copyright>
		</FooterContainer>
	)
}

export default Footer

import React from 'react'
import styled from 'styled-components'
import YellowButton from './buttons/YellowButton'
import { size } from '../utils/breakpoints'

const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
	padding: 20px;
	height: 310px;
	background: var(--gray2);
	flex-direction: column;
	align-self: center;
	h1 {
		flex: 2;
		text-transform: uppercase;
	}
	h3 {
		align-self: center;
	}
	@media ${size.md} {
		height: 207px;
		justify-content: center;
		h3 {
			align-self: flex-start;
		}
	}
	@media ${size.lg} {
		flex-direction: row;
		h3 {
			align-self: center;
		}
	}
`

const Input = styled.input`
	height: 50px;
	width: 100%;
	border: none;
	padding-left: 20px;
	margin-bottom: 20px;
	margin-left: 0;
	font-size: 1rem;

	@media ${size.lg} {
		font-size: 1.5rem;
		margin-left: 20px;
		margin-bottom: 0;
	}
`
const Form = styled.form`
	height: auto;
	display: flex;
	width: inherit;
	align-items: center;
	flex-direction: column;
	@media ${size.md} {
		flex-direction: row;
		align-items: flex-start;
	}
`
const BulletinSignup = () => {
	return (
		// <Container className="my-5">
		<Container>
			<h3 className="fw-bold mb-0">{'A&M BULLETIN SIGNUP'}</h3>
			<Form>
				<Input placeholder={'Email Address'} />
				<YellowButton text={'Subscribe'} radius={'5px'} width={'170px'} />
			</Form>
		</Container>
	)
}

export default BulletinSignup

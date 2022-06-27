import React from 'react'
import styled from 'styled-components'
import YellowButton from './buttons/YellowButton'

const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	height: 200px;
	background: var(--gray2);
	// background: red;

	h1 {
		flex: 2;
		text-transform: uppercase;
	}
`

const Input = styled.input`
	height: 100%;
	width: 100%;
	border: none;

	font-size: 1.5rem;
	padding-left: 20px;
`

const Form = styled.form`
	flex: 3;
	height: 50px;
	display: flex;
	justify-content: flex-end;
`
const BulletinSignup = () => {
	return (
		<Container className="my-5">
			<h1>{'A&M BUlletin SIGNUP'}</h1>
			<Form>
				<Input placeholder={'Email Address'} />
				<YellowButton text={'Subscribe'} radius={'0'} />
			</Form>
		</Container>
	)
}

export default BulletinSignup

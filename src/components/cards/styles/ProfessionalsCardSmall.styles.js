import styled from 'styled-components'

export const Container = styled.div`
	margin-bottom: ${({ margin }) => margin + 'px' || 0};
`

export const Card = styled.div`
	display: flex;
	background: var(--darkBlue);

	margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
	background: gray;
	flex: 1;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 2;
`

export const Content = styled.div`
	padding: 20px;
	text-transform: uppercase;
	color: var(--orange2);
	font-weight: bold;
	height: 100%;
	width: 200px;

	display: flex;
	flex-direction: column;
	justify-content: space-around;

	h5 {
		padding: 0;
		margin: 0;
		color: white;
		text-transform: uppercase;
		font-weight: bold;
	}

	div {
		font-size: 1rem;
	}
`

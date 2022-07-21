import styled from 'styled-components'
import { size } from '../../../utils/breakpoints'

export const StyledRow = styled.div`
	display: flex;
	flex-direction: column;

	@media ${size.lg} {
		flex-direction: row;
	}
`

export const StyledCol1 = styled.div`
	flex: 1 0 65%;

	padding: 2rem;
`

export const StyledCol2 = styled.div`
	flex: 1 0 35%;
`

export const Container = styled.div`
	padding: 2rem;
`

import styled from 'styled-components'
import { size } from '../../../utils/breakpoints'

export const Col_9 = styled.div`
	padding: 3rem !important;
	border-right: 2px solid var(--gray5);

	@media ${size.lg} {
		flex: 0 0 auto;
		width: 75%;
	}
`

export const Col_3 = styled.div`
	padding-right: 0 !important;
	padding-left: 0 !important;
	flex-grow: 1 !important;

	@media ${size.lg} {
		flex: 0 0 auto;
		width: 25%;
	}
`

export const Row_9_3 = styled.div`
	padding: 0 !important;
	margin: 0 !important;
	display: flex !important;
	flex-direction: column !important;

	@media ${size.lg} {
		flex-direction: row !important;
	}
`

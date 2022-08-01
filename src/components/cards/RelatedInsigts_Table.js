import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const NewsCell = styled.div`
	border-bottom: 1px solid #e6e6e6;
	padding-bottom: 22px;
	h4 {
		margin-bottom: 22px;
	}
`

const RelatedInsigts_Table = ({post}) => {
	return (
		<>
		<NewsCell>
			<h4>{post?.title}</h4>
			<span className="text-muted"> {post?.date}</span>
		</NewsCell>
		
		</>
	)
}

export default RelatedInsigts_Table


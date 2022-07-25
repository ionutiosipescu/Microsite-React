import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const CustomTitle = styled.h5`
	font-weight: bold;
	cursor: pointer;

	:hover {
		color: #0085ca;
	}
`

const PostCard = ({ date, id, teaserText, title }) => {
	const navigate = useNavigate()

	return (
		<div className="col-sm-12 col-md-11 col-lg-5 border-bottom h-100 py-3 ">
			<CustomTitle onClick={() => navigate(`/insights/case/${id}`)}>
				{title}
			</CustomTitle>
			<span className="text-muted">{date}</span>
			<p className="py-2 fs-6">{teaserText}</p>
		</div>
	)
}

export default PostCard

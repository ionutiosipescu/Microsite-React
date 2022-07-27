import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import PostCard from '../../../components/cards/PostCard'
import TranslateButton from '../../../components/buttons/TranslateButton'
import { StyledContainer } from '../../../components/layout/Rows&Collumns/Rows&Collumns.style'
import { getArticles } from '../../../API'

const PostsContainer = styled.div`
	padding: 2rem;
	margin: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const News = () => {
	const location = useLocation()
	const LocationName = location?.pathname.split('/').slice(1, 3)
	const [news, setNews] = useState([])

	useEffect(() => {
		getArticles(setNews, 'news', 10)
	}, [])

	console.log(news)

	return (
		<StyledContainer>
			<TranslateButton text1={'English'} text2={'Portuguese'} />
			<PostsContainer>
				{news.map(post => (
					<PostCard post={news} locationName={LocationName} />
				))}
			</PostsContainer>
		</StyledContainer>
	)
}

export default News

const arr = [
	{
		id: 1,
		title: 'lorem-ipsum.line1',
		date: new Date().toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}),
		category: 'expertise',
		desciption:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
	},
	{
		id: 2,
		title: 'lorem-ipsum.2',
		category: 'expertise',
		date: new Date().toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}),
		desciption:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
	},
	{
		id: 3,
		title: 'lorem-ipsum.3',
		category: 'industry',
		date: new Date().toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}),
		desciption:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
	},
	{
		id: 4,
		title: 'lorem-ipsum.4',
		category: 'country',
		date: new Date().toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		}),
		desciption:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
	},

	{
		id: 2,
		title: 'lorem-ipsum.2',
		category: 'country',
		date: new Date().toLocaleDateString(),
		desciption:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
	},
	{
		id: 1,
		title: 'lorem-ipsum.line1',
		category: 'country',
		date: new Date().toLocaleDateString(),
		desciption:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at illo ipsam, magni nostrum ad neque reprehenderit illum excepturi asperiores blanditiis dignissimos? Enim deserunt ea optio tempore. Est distinctio veritatis repellat! adipisicing elit. Praesentium at illo ipsam, magni nostrum ad neque reprehenderit illum excepturi asperiores blanditiis dignissimos? Enim deserunt ea optio tempore. Est distinctio veritatis repellat',
	},
	{
		id: 3,
		title: 'lorem-ipsum.3',
		category: 'buletin type',
		date: new Date().toLocaleDateString(),
		desciption:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
	},
	{
		id: 4,
		title: 'lorem-ipsum.4',
		category: 'country',
		date: new Date().toLocaleDateString(),
		desciption:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
	},
]

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { PostCard, HeroSection, CarouselSection } from '../../components/cards'
import {
	FiltrationNavbar,
	NavbarDropdown,
} from '../../components/navbarComponents'

import { BreadCrumb, FilterBy } from '../../components'
import { filtrationNavbarData, PostsArr } from '../../utils/data'

const PostsContainer = styled.div`
	padding: 2rem;
	margin: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const InsightLatest = () => {
	// const location = useLocation()
	// const locationName = location?.pathname.split('/').slice(1, 3)
	const [postContent, setPostContent] = useState([])
	const [filterByTags, setFilterByTags] = useState([
		'fuck',
		'fuck',
		'fuck2',
		'fuck3',
		'fuck4',
	])
	const baseApiUrl = process.env.REACT_APP_BASE_API_URL

	useEffect(() => {
		const link =
			baseApiUrl +
			'/node/article?include=field_primary_industry&filter[field_primary_industry.name]=healthcare&page[limit]=6&sort=-created'

		Axios.get(link).then(res => {
			console.log(res.data)
			const arr = []
			res.data.data.map(item => {
				let data = {}
				data.title = item.attributes.title
				data.teaserText = item.attributes.field_teaser_text
				data.date = item.attributes.created
				data.id = item.id
				arr.push(data)
			})
			setPostContent([...arr])
		})
	}, [])

	console.log(postContent)

	return (
		<>
			<HeroSection
				title=" Latest Studies"
				backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
			/>

			<FiltrationNavbar
				searchBar2={'search'}
				setFilterByTags={setFilterByTags}
				filterByTags={filterByTags}
			>
				{filtrationNavbarData.map((item, index) => (
					<NavbarDropdown data={item.tagNames} key={index}>
						{item.title}
					</NavbarDropdown>
				))}
			</FiltrationNavbar>

			<FilterBy setFilterByTags={setFilterByTags} filterByTags={filterByTags} />

			<BreadCrumb route={'Insights'} subRoute={'Latest Insights'} />

			<PostsContainer>
				{postContent.map((post, index) => (
					<PostCard post={post} key={index} />
				))}
			</PostsContainer>
			<CarouselSection
				categoryCarousel={'Healthcare & Live Sciences News'}
				backgroundColor="#002B49"
				arr={PostsArr}
				titleColor="#0085CA"
				textColor="#fff"
				textDate="#fff"
				carouselDotBackground="#002b49"
			/>
		</>
	)
}

export default InsightLatest

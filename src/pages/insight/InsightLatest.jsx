import React, { useState } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'

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
	const location = useLocation()
	const LocationName = location?.pathname.split('/').slice(1, 3)
	const [filterByTags, setFilterByTags] = useState([
		'fuck',
		'fuck',
		'fuck2',
		'fuck3',
		'fuck4',
	])

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
				{PostsArr.map((post, index) => (
					<PostCard post={post} locationName={LocationName} key={index} />
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

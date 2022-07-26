import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { PostCard, HeroSection, CarouselSection } from '../../components/cards'
import {
	FiltrationNavbar,
	NavbarDropdown,
} from '../../components/navbarComponents'
import { BreadCrumb, FilterBy } from '../../components'
import { getArticles } from '../../API'

import { filtrationNavbarData, PostsArr } from '../../utils/data'
import { StyledContainer } from '../../components/layout/Rows&Collumns/Rows&Collumns.style'

const PostsContainer = styled.div`
	margin: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const InsightCase = () => {
	const location = useLocation()
	const locationName = location?.pathname.split('/').slice(1, 3)
	const [filterByTags, setFilterByTags] = useState(['sunshine', 'sunshine1'])

	// Getting the latest articles from server
	const [postsContent, setPostsContent] = useState([])
	useEffect(() => {
		getArticles(setPostsContent, 'insights')
	}, [])

	return (
		<>
			<HeroSection
				title=" Case Studies"
				backgroundUrl={
					'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
				}
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
			<StyledContainer>
				<BreadCrumb route={'Insights'} subRoute={'Latest Case'} />
				<PostsContainer>
					{postsContent.map((post, index) => (
						<PostCard {...post} locationName={locationName} key={index} />
					))}
				</PostsContainer>
			</StyledContainer>
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

export default InsightCase

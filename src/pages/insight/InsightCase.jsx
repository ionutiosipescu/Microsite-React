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

const InsightCase = () => {
	const location = useLocation()
	const locationName = location?.pathname.split('/').slice(1, 3)
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

			<BreadCrumb route={'Insights'} subRoute={'Latest Case'} />

			<PostsContainer>
				{PostsArr.map((post, index) => (
					<PostCard post={post} locationName={locationName} key={index} />
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

export default InsightCase

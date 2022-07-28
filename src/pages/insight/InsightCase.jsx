import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { PostCard, HeroSection, CarouselSection } from '../../components/cards'
import {
	FiltrationNavbar,
	NavbarDropdown,
} from '../../components/navbarComponents'
import { BreadCrumb, FilterBy } from '../../components'
import { filtrationNavbarData, PostsArr } from '../../utils/data'
import { StyledContainer } from '../../components/layout/Rows&Collumns/Rows&Collumns.style'
// import Axios from 'axios'
// import { getLink } from './helper'

import {
	getCaseStudiesArticles,
	fetchHeroSectionDataHome,
	getCarouselArticles,
	getArticles
} from '../../API'

const PostsContainer = styled.div`
	margin: auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

const InsightCase = () => {
	const location = useLocation()
	const [loading, setLoading] = useState(false)
	const [heroSectionData, setHeroSectionData] = useState()
	const [articles, setArticles] = useState([])
	const [carouselData, setCarouelData] = useState([])
	const [getArticles1, setgetArticles1] = useState([])

	const locationName = location?.pathname.split('/').slice(1, 3)
	const [filterByTags, setFilterByTags] = useState([])

	useEffect(() => {
		setLoading(true)
		fetchHeroSectionDataHome(setHeroSectionData)
		getCaseStudiesArticles(setArticles)
		getCarouselArticles(setCarouelData)
		setLoading(false)
		getArticles(setgetArticles1)
	}, [])

	console.log(getArticles1)

	
	return (
		<>
			<HeroSection
				title={heroSectionData?.title}
				backgroundUrl={heroSectionData?.backgroundUrl}
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
				<BreadCrumb route={'Insights'} subRoute={'Case Studies'} />

				{loading ? (
					<div class="spinner-border text-primary" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				) : (
					<PostsContainer>
						{articles.map((post, index) => (
							<PostCard post={post} locationName={locationName} key={index} />
							))}
					</PostsContainer>
				)}
			</StyledContainer>

			<CarouselSection
				categoryCarousel={'Healthcare & Live Sciences News'}
				backgroundColor="#002B49"
				arr={carouselData}
				titleColor="#0085CA"
				textColor="#fff"
				textDate="#fff"
				carouselDotBackground="#002b49"
			/>
		</>
	)
}

export default InsightCase

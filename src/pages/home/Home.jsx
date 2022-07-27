import React, { useState, useEffect } from 'react'
import HeroSection from '../../components/cards/HeroSection'
import CarouselSection from '../../components/cards/CarouselSection'
import QualitiesSection from '../../components/section/QualitiesSection'
import RecongnitionSection from '../../components/section/RecongnitionSection'

//import data
import { arr2 } from '../../utils/data'
import {
  fetchHeroSectionDataHome,
  getCarouselArticles,
  getArticle,
} from "../../API";

const Home = () => {
	const [heroSectionData, setHeroSectionData] = useState()
	const [carouselData, setCarouselData] = useState([])

  useEffect(() => {
    fetchHeroSectionDataHome(setHeroSectionData);
    getCarouselArticles(setCarouselData);
  }, []);

	return (
		<div>
			<HeroSection
				title={heroSectionData?.title}
				backgroundUrl={heroSectionData?.backgroundUrl}
				buttonText="CONTACT"
			/>
			<CarouselSection
				categoryCarousel={carouselData[0]?.category}
				backgroundColor="white"
				arr={carouselData}
				titleColor="#0085CA"
				textColor="#000"
				textDate="#949494"
				carouselDotBackground="white"
			/>
			<QualitiesSection />
			<RecongnitionSection arr={arr2} titleSection="Recent Recongnition" />
			<CarouselSection
				categoryCarousel={carouselData[0]?.category}
				backgroundColor="#002B49"
				arr={carouselData}
				titleColor="#0085CA"
				textColor="#fff"
				textDate="#FFF"
				carouselDotBackground="#002b49"
			/>
		</div>
	)
}

export default Home

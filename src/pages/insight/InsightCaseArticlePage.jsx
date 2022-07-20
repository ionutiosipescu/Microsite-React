import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { BreadCrumb } from '../../components'

import { HeroSection, CarouselSection } from '../../components/cards'
import {
	ChevronRight,
	ChevronRightBlue,
	Facebook,
	LinkedIn,
	Twitter,
	YouTube,
	DocumentIcon,
	PdfIcon,
	ShareIcon,
	LetterIcon,
} from '../../assets/icons'
import { sizem } from '../../utils/breakpoints'

const PageContainer = styled.div`
	.textCategory {
		color: #0085ca;
	}

	h6 img {
		width: 13px;
		color: #0085ca;
		margin: 0px 10px;
	}
	.link {
		font-size: 14px;
	}
	.link img {
		font-size: 12px;
		border-radius: 50%;
	}
	.leftSection {
		img {
			width: 32px;
		}
	}
	@media ${sizem.mdm} {
		.secondSection {
			text-align: center;
		}
		.link {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center !important;
		}
	}
`

const InsightCaseArticlePage = ({ locationName }) => {
	const { id } = useParams()

	return (
		<PageContainer>
			<HeroSection
				title={id}
				pageTitle="Case Studies"
				backgroundUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
			/>
			<div className="container-fluid  bg-white  d-flex flex-direction-column">
				<div className="row pt-5 ">
					<div className="col-12 col-sm-12 col-md-9 col-lg-9 border-end border-2  py-5">
						<div className="p-2">
							<BreadCrumb route={'Insights'} subRoute={'Case Studies'} />
						</div>
						<div className="row">
							<div className="col-2 col-sm-2 col-md-2 col-lg-1  d-flex pt-5 justify-content-center  ">
								{/*------------------------------------------------------------- LeftSectionIcons */}
								<div className="leftSection">
									<div className="pt-2">
										<ShareIcon />
									</div>
									<div className="pt-4">
										<DocumentIcon />
									</div>
									<div className="pt-4">
										<LetterIcon />
									</div>
									<div className="pt-4">
										<PdfIcon />
									</div>
								</div>
							</div>
							<div className=" col-9 col-sm-10 col-md-10 col-lg-11">
								{/*---------------------------------------------------- SectionDescription */}
								<div>date</div>
								<p className="pt-3">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Tempore itaque perferendis provident ipsa et temporibus
									aspernatur architecto quaerat. Recusandae saepe perferendis
									quae temporibus iste excepturi eveniet debitis quidem placeat
									eos.
								</p>
								<p className="pt-3">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Tempore itaque perferendis provident ipsa et temporibus
								</p>
								{/*-------------------------------- imagesContainer */}
								<div className="d-flex pt-4 ">
									{arrImages.map(image => (
										<div className="px-2">
											<img
												src={image}
												width="150px"
												height="200px"
												className="img-rounded"
											/>
										</div>
									))}
								</div>
								<div className="pt-4 learnMore">
									<a href="#" className="text-info text-decoration-none">
										Learn mode now.
									</a>
								</div>
							</div>
						</div>
					</div>
					{/*--------------------------------------------- FEATURED PROFILES  */}
					<div className="col-12 col-sm-12 col-md-3 col-lg-3 border-2 pt-5 secondSection ">
						<div className="">
							<h3 className="text-align-center">title Section</h3>{' '}
						</div>
						<div className="managers">
							<div className="manager d-flex flex-column py-3">
								<span>Name</span>
								<span className="text-muted">Position</span>
							</div>
							<div className="manager d-flex flex-column py-3">
								<span>Name</span>
								<span className="text-muted">Position</span>
							</div>
							<div className="manager d-flex flex-column py-3">
								<span>Name</span>
								<span className="text-muted">Position</span>
							</div>
						</div>
						{/* -------------------------------------------------------Stay connnected */}
						<div className="linksContainer ">
							<h3> Stay Connected </h3>
							<div className="links container-fluid  ">
								<div className="link  py-2 d-flex justify-content-between ">
									<div className="image  col-md-2 col-lg-2 ">
										<LinkedIn className="img img-rounded " />
									</div>
									<div className=" col-md-9 col-lg-9 align-items-center d-flex px-sm-2 ">
										Join A&M on Linkedin
									</div>
								</div>
								<div className="link  py-2 d-flex justify-content-between ">
									<div className="image  col-md-2 col-lg-2 ">
										<LinkedIn className="img img-rounded " />
									</div>
									<div className=" col-md-9 col-lg-9 align-items-center d-flex px-sm-2 ">
										Join A&M on Linkedin
									</div>
								</div>
								<div className="link  py-2 d-flex justify-content-between ">
									<div className="image  col-md-2 col-lg-2 ">
										<LinkedIn className="img img-rounded " />
									</div>
									<div className=" col-md-9 col-lg-9 align-items-center d-flex px-sm-2 ">
										Join A&M on Linkedin
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <PostsContainer>
          {articles.map((post) => (
            <PostCard post={post} LocationName={LocationName} />
          ))}
        </PostsContainer> */}
			</div>
			<div>
				<CarouselSection
					categoryCarousel={'Healthcare & Live Sciences News'}
					backgroundColor="#002B49"
					arr={arr}
					titleColor="#0085CA"
					textColor="#fff"
					textDate="#FFFFFF"
					carouselDotBackground="#002b49"
				/>
			</div>
		</PageContainer>
	)
}

export default InsightCaseArticlePage

const arrImages = [
	'https://images.unsplash.com/photo-1657039875202-b7472f549b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
	//   "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
	//   "https://images.unsplash.com/photo-1536412597336-ade7b523ecfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
]
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

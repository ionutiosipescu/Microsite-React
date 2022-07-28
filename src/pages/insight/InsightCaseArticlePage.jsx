import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams, useLocation } from 'react-router-dom'
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
	// Envelope,
} from '../../assets/icons'
import { sizem } from '../../utils/breakpoints'
import { Cell } from '../../components/navbarComponents/navigation/Navigation.styles'
import {
	FiltrationNavbar,
	NavbarDropdown,
} from '../../components/navbarComponents'
import LeftSection from '../../components/cards/LeftSection'

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
	.nameAuthor {
		text-transform: uppercase;
		font-size: 1.25rem;
		line-height: 1.25rem;
		color: #000;
	}
	.positionAutho {
		text-transform: uppercase;
		font-size: 1rem;
		color: #666666;
		line-height: 1rem;
	}
	.link {
		:hover {
			.image {
				cursor: pointer;
				background-color: var(--hover-blue);
			}
			.textLinks {
				cursor: pointer;
				color: var(--hover-blue);
			}
		}
	}
	.image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background-color: var(--gray3);
		/* border: 2px solid red; */
	}

	.textLinks {
		:hover {
			cursor: pointer;
			color: var(--hover-blue);
		}
	}
`

const InsightCaseArticlePage = ({}) => {
	const { state } = useLocation()
	const { id } = useParams()
	

	const articleDescription = state.body

	
	return (
		<PageContainer>
			<HeroSection
				title={id.slice(0, 35)}
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
							<LeftSection/>
							<div className=" col-9 col-sm-10 col-md-10 col-lg-11">
								{/*---------------------------------------------------- SectionDescription */}
								<div>
									<span className="text-muted text-italic">
										{new Date(state?.date).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'short',
											day: 'numeric',
										})}
									</span>
								</div>
								{/* {[1, 2].map((x, index) => (
                  <p className="pt-3" key={index}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore itaque perferendis provident ipsa et temporibus
                    aspernatur architecto quaerat. Recusandae saepe perferendis
                    quae temporibus iste excepturi eveniet debitis quidem
                    placeat eos.
                  </p>
                ))} */}
								<h4 className="pt-5 fw-bold">{state.title} </h4>
								<div
									className="pt-3 text-decoration-none"
									dangerouslySetInnerHTML={{ __html: articleDescription }}
								></div>

								<p className=""></p>

								{/*-------------------------------- imagesContainer */}
								<div className="d-flex pt-4 ">
									{arrImages.map((image, index) => (
										<div className="px-2" key={index}>
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
						{/* -------------------------------------------------------Stay connnected */}
						<ListManagers
							titleSection={'Featured Profiles'}
							managers={state.authorsData}
						/>
						<LinksList
							titleSection={'Stay Connected'}
							linkIcons={iconsArr}
							className=""
						/>
					</div>
				</div>
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

const ListManagers = ({ titleSection, managers }) => {
	return (
		<>
			<div className="">
				<h3 className="text-align-center">{titleSection}</h3>{' '}
			</div>
			<div className="managers">
				{managers?.map((x, index) => (
					<div className="manager d-flex flex-column py-3" key={index}>
						<span className="nameAuthor">
							{x.firstName} {x.lastName}
						</span>
						{/* <span className="text-muted">{x.position}</span> */}
						<span className="text-muted positionAuthor">{x.profession}</span>
					</div>
				))}
			</div>
		</>
	)
}

const LinksList = ({ titleSection, linkIcons }) => {
	return (
		<div className="linksContainer pt-5">
			<h3> {titleSection} </h3>
			<div className="links container-fluid  ">
				{linkIcons.map((x, index) => (
					<div
						className="link  py-2 d-flex justify-content-between "
						key={index}
					>
						<div className="image  col-md-2 col-lg-2 ">{x.icon}</div>
						<div className=" col-md-9 col-lg-9 align-items-center d-flex px-sm-2 ">
							<span className="textLinks">Join A&M on {x.text} </span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

const iconsArr = [
	{ id: 1, icon: <Facebook />, text: 'Facebook' },
	{
		id: 2,
		icon: <LinkedIn />,
		text: 'Linkedin',
	},
	{
		id: 3,
		icon: <Twitter />,
		text: 'Twitter',
	},
	{
		id: 3,
		icon: <YouTube />,
		text: 'YouTube',
	},
	{
		id: 4,
		// icon: <Envelope />,
		text: 'Sign Up for A&M Newsletters',
	},
]

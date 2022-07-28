import React, {useState} from "react";
import styled from "styled-components";
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

const LeftSectionContainer = styled.div`
.containerIcons {
		display: flex;
		position: absolute;
		/* flex-direction: column; */
		/* top: -1rem; */
		margin: 0px 0px 0px 330px;
		width: 16.375rem;
		.iconDiv {
			height: 4.375rem;
			width: 100%;

			background-color: #0085ca;
			justify-content: center;
			align-items: center;
			display: flex;
			font-size: 1.125rem;
			text-transform: uppercase;
			line-height: 4.375rem;
			color: #fff;
			/* margin-left: -20px; */
			/* border: 2px solid red; */
			cursor: pointer;
			:hover {
				cursor: pointer;
				background-color: yellow;
			}
		}
	}
    .leftSection {
		.iconContainer {
			height: 4.375rem;
			width: 4.375rem;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
		}
		img {
			width: 32px;
		}
	}
    .menuIconActive {
		background-color: #0085ca;
		/* margin-right: 0px; */
	}
`



const LeftSection = () => {
    const [toggle, setToggle] = useState(false)
    const [openedState, setOpenedState] = useState(
		Array.from(leftSectionIcons, () => false)
	)

    const handleDisplay = index => {
		setToggle(!toggle)

		if (!openedState[index]) {
			let arr = Array.from(leftSectionIcons, () => false)
			arr[index] = true
			setOpenedState([...arr])
		} else {
			setOpenedState(Array.from(leftSectionIcons, () => false))
		}
	}

    return(
        <LeftSectionContainer className="col-2 col-sm-2 col-md-2 col-lg-1  d-flex pt-5 justify-content-center  ">
								<div className="leftSection pt-3">
									{leftSectionIcons.map((x, index) => (
										<div
											// className=""
											key={index}
											className={` iconContainer ${
												openedState[index] && 'menuIconActive'
											}`}
											onClick={() => {
												handleDisplay(index)
											}}
										>
											<div>{x.icon}</div>
											{openedState[index] && (
												<span className="containerIcons">
													{x?.children.map((icon, index) => (
														<div
															className="iconDiv"
															style={{ backgroundColor: `${icon.color}` }}
														>
															{icon.icon || icon.text}
														</div>
													))}
												</span>
											)}
										</div>
									))}
								</div>
        </LeftSectionContainer>
    )
}

export default LeftSection;

const leftSectionIcons = [
	{
		id: 0,
		icon: <ShareIcon />,
		children: [
			{
				color: '#0085CA',
				icon: <Facebook />,
			},
			{
				color: '#002B49',
				icon: <LinkedIn />,
			},
			{
				color: '#171717',
				icon: <Twitter />,
			},
		],
	},
	{
		id: 1,
		icon: <DocumentIcon />,
		children: [{ text: 'Printable Version', color: '#0085CA' }],
	},
	{
		id: 2,
		icon: <LetterIcon />,
		children: [{ text: 'SEND BY EMAIL', color: '#0085CA' }],
	},
	{
		id: 3,
		icon: <PdfIcon />,
		children: [{ text: 'PDF VERSION', color: '#0085CA' }],
	},
]

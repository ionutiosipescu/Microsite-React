import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import printJS from "print-js";
import {
  Facebook,
  LinkedIn,
  Twitter,
  DocumentIcon,
  PdfIcon,
  ShareIcon,
  LetterIcon,
  // Envelope,
} from "../../assets/icons";
import { size } from "../../utils/breakpoints";

const LeftSectionContainer = styled.div`
  .containerIcons {
    display: flex;
    position: absolute;
    /* flex-direction: column; */
    /* top: -1rem; */
    margin: 139px 0px 0px 192px;
    width: 14.375rem;
    @media ${size.md} {
      margin: 0px 0px 0px 298px;
    }
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
      /* cursor: pointer; */
      /* background-color: yellow; */
      :hover {
        cursor: pointer;
        background-color: var(--orange2) !important;
      }
    }
  }
  .leftSection {
    position: -webkit-sticky !important;
    position: sticky;
    top: 0;
    display: flex;
    @media ${size.md} {
      flex-direction: column;
    }
    .iconContainer {
      height: 4.375rem;
      width: 4.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
      /* cursor: pointer; */
    }

    img {
      width: 32px;
    }
    /* .iconContainer img:hover {
			.menuIconActive {
                display: block;
            }
		} */
  }
  /* .leftSection div:not(:first-child) {
    .containerIcons {
      display: none;
      @media ${size.md} {
        display: block;
      }
    }
  } */
  .menuIconActive {
    background-color: #0085ca;
  }
`;

const IconContainer = styled.div`
  .iconDiv {
    background-color: red;
    cursor: pointer;
    :hover {
      background-color: var(--orange3);
    }
  }
`;

const LeftSection = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [openedState, setOpenedState] = useState(
    Array.from(leftSectionIcons, () => false)
  );

  const handleDisplay = (index) => {
    setToggle(!toggle);

    if (!openedState[index]) {
      let arr = Array.from(leftSectionIcons, () => false);
      arr[index] = true;
      setOpenedState([...arr]);
    } else {
      setOpenedState(Array.from(leftSectionIcons, () => false));
    }
  };

  return (
    <LeftSectionContainer className="col-12 col-sm-12 col-md-2 col-lg-1  d-flex pt-5 justify-content-center  ">
      <div className="leftSection pt-3">
        {leftSectionIcons.map((x, index) => (
          <div
            // className=""
            key={index}
            className={`iconContainer ${
              openedState[index] && "menuIconActive"
            }`}
            onClick={() => handleDisplay(index)}
            // onMouseOver={() => {
            //   handleDisplay(index);
            // }}
            // onMouseLeave={() => {}}
          >
            <div>{x.icon}</div>
            {openedState[index] && (
              <span className="containerIcons">
                {x?.children.map((icon, index) => (
                  <IconContainer
                    // bgColor={}
                    style={{ backgroundColor: icon?.color }}
                    className="iconDiv"
                  >
                    <span
                      onClick={() => {
                        if (icon?.link && icon.text !== "Printable Version") {
                          window.open(icon?.link, "_blank");
                        } else if (icon.text === "Printable Version") {
                          printJS(
                            "http://www.africau.edu/images/default/sample.pdf"
                          );
                        } // alert(icon?.link);
                      }}
                    >
                      {icon.icon || icon.text}
                    </span>
                  </IconContainer>
                ))}
              </span>
            )}
          </div>
        ))}
      </div>
    </LeftSectionContainer>
  );
};

export default LeftSection;

const leftSectionIcons = [
  {
    id: 0,
    icon: <ShareIcon />,
    children: [
      {
        color: "#0085CA",
        icon: <Facebook />,
      },
      {
        color: "#002B49",
        icon: <LinkedIn />,
      },
      {
        color: "#171717",
        icon: <Twitter />,
      },
    ],
  },
  {
    id: 1,
    icon: <DocumentIcon />,
    children: [
      {
        text: "Printable Version",
        color: "#0085CA",
        link: "http://www.africau.edu/images/default/sample.pdf",
      },
    ],
  },
  {
    id: 2,
    icon: <LetterIcon />,
    children: [{ text: "SEND BY EMAIL", color: "#0085CA" }],
  },
  {
    id: 3,
    icon: <PdfIcon />,
    children: [
      {
        text: "PDF VERSION",
        color: "#0085CA",
        link: "http://www.africau.edu/images/default/sample.pdf",
      },
    ],
  },
];

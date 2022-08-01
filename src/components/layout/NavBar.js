import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { routeNames } from "../../routes/routes";
import { Search, XIcon, Logo } from "../../assets/icons";
import styled from "styled-components";
import { sizem } from "../../utils/breakpoints";

import { expertiseData } from "../../utils/data";

const CustomNavbar = styled(Navbar)`
  max-width: 1280px;
  width: 100%;
  .logo {
    img {
      width: 45px;
      height: 40px;
    }
  }
  #navbarScrollingDropdown,
  .web-title {
    color: rgba(0, 0, 0, 0.9);
    padding: 20px 12px !important;
  }
  .nav-item.show.dropdown {
    background-color: #00254a;
  }
  .nav-item.show.dropdown a {
    color: white !important;
  }
  .nav-item.show.dropdown div {
    background-color: #00254a;
    border-radius: 0;
    margin-top: 0;
    padding-bottom: 0.5rem;
    border: 0;
  }
  .nav-item.show.dropdown a {
    background-color: #00254a;
  }
  .containerIcon {
    margin-top: 0px !important;
    width: 70px;
    height: 70px;
    /* border: 2px solid green; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active-link {
    background-color: #0085ca;
  }
  .inactive-link {
    background-color: transparent;
  }
`;
const NavbarSearchContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #0085ca;
  .inputClass {
    height: 40px;
    background-color: #0b72a7;
    border: none;
    border-radius: 5px;
  }
  .active-link {
    background-color: #0085ca;
  }
  .form-group {
    width: 94%;
    margin: auto;
  }
  .has-search .form-control {
    padding-left: 2.375rem;
  }

  .has-search .form-control-feedback {
    /* border: 2px solid red; */
    position: absolute;
    z-index: 2;
    display: block;
    right: 200px;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: right;
    pointer-events: none;
    align-items: center;
  }
  @media ${sizem.lgm} {
    .has-search .form-control-feedback {
      right: 60px;
    }
  }
`;

const NavBar = () => {
  const navigate = useNavigate();
  const [showSearchDiv, setShowSearchDiv] = useState(false);

  return (
    <>
      {showSearchDiv && (
        <NavbarSearchContainer
          className=" containerNavbarSearch
	  "
        >
          {/* <input className="w-100 mx-5   inputClass" />
          <button className="me-5" /> */}

          <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control" />
          </div>
        </NavbarSearchContainer>
      )}
      <CustomNavbar className="py-0 " expand="lg">
        <Container fluid>
          <CustomNavbar.Brand href={routeNames.home} className="logo">
            <Logo style={{ width: "40px" }} />
          </CustomNavbar.Brand>
          <div className="d-flex justify-content-around mx-3 align-items-center">
            <CustomNavbar.Toggle aria-controls="navbarScroll" />
            <CustomNavbar.Text
              className={` d-lg-none align-items-center d-flex my-1  containerIcon ${
                showSearchDiv ? "active-link" : " inactive-link"
              } `}
            >
              {" "}
              {showSearchDiv ? (
                <div
                  className="  d-flex  align-items-center mx-2 "
                  onClick={() => {
                    setShowSearchDiv(false);
                  }}
                >
                  {console.log(showSearchDiv)}
                  <XIcon />
                </div>
              ) : (
                <div
                  className="  d-flex  align-items-center mx-2 "
                  onClick={() => {
                    setShowSearchDiv(true);
                  }}
                >
                  <Search />
                </div>
              )}
            </CustomNavbar.Text>
          </div>

          <CustomNavbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 fw-bold f">
              <Nav.Link className="active web-title" href={routeNames.home}>
                {"HLS Home"}
              </Nav.Link>

              <NavDropdown
                className=""
                title="Expertise"
                id="navbarScrollingDropdown"
              >
                {expertiseData?.map((expertise, index) => (
                  <NavDropdown.Item
                    onClick={() => {
                      navigate(
                        `/expertise/${expertise?.title?.toLowerCase()}`,
                        {
                          state: expertise,
                        }
                      );
                    }}
                    id="something"
                    key={index}
                  >
                    {expertise.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              {/* <Nav.Link href={routeNames.insight}>{"Insights"}</Nav.Link> */}
              <NavDropdown
                className=""
                title="Insights"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href={routeNames.insightLatest}>
                  {"Latest Insights"}
                </NavDropdown.Item>
                <NavDropdown.Item href={routeNames.insightCase}>
                  {"Case Studies"}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="active web-title"
                href={routeNames.leadership}
              >
                {"Leadership"}
              </Nav.Link>
              <Nav.Link className="active web-title " href={routeNames.contact}>
                {"Contact"}
              </Nav.Link>
              <Nav.Link
                className="active web-title text-danger d-none  d-lg-block"
                href={routeNames.brazilian}
              >
                {"Brazilian MicroSite"}
              </Nav.Link>
              <Nav.Link
                className="active web-title text-danger d-none  d-lg-block"
                href={routeNames.digital}
              >
                {"Digital MicroSite"}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className={`d-none d-lg-flex my-2 containerIcon ${
                  showSearchDiv ? "active-link" : " inactive-link"
                } `}
                href="#action2"
              >
                {showSearchDiv ? (
                  <div
                    className="  d-flex  align-items-center  "
                    onClick={() => {
                      setShowSearchDiv(false);
                    }}
                  >
                    {console.log(showSearchDiv)}
                    <XIcon />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setShowSearchDiv(true);
                    }}
                  >
                    <Search />
                  </div>
                )}
              </Nav.Link>
            </Nav>
          </CustomNavbar.Collapse>
        </Container>
      </CustomNavbar>
    </>
  );
};

export default NavBar;

import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { routeNames } from "../../routes/routes"
import { Search, XIcon, Logo, AlvarezMarsal } from "../../assets/icons"
import styled from "styled-components/macro"
import { sizem } from "../../utils/breakpoints"
import { expertiseData } from "../../utils/data"

const NavBar = ({ setNavbarActive, navbarActive }) => {
  const navigate = useNavigate()
  const [showSearchDiv, setShowSearchDiv] = useState(false)

  const industries = useSelector(state => state.hlsHero?.industries)
  const expertises = useSelector(state => state.hlsHero?.expertises)

  return (
    <>
      {showSearchDiv && (
        <NavbarSearchContainer className="container-navbar-search">
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
            <CustomNavbar.Toggle
              aria-controls="navbarScroll"
              onClick={() => {
                setNavbarActive(!navbarActive)
              }}
            />
            <CustomNavbar.Text
              className={` d-lg-none align-items-center d-flex my-1  container-icon ${
                showSearchDiv ? "active-link" : " inactive-link"
              } `}
            >
              {showSearchDiv ? (
                <div
                  className="  d-flex  align-items-center mx-2 "
                  onClick={() => {
                    setShowSearchDiv(false)
                  }}
                >
                  <XIcon />
                </div>
              ) : (
                <div
                  className="  d-flex  align-items-center mx-2 "
                  onClick={() => {
                    setShowSearchDiv(true)
                  }}
                >
                  <Search />
                </div>
              )}
            </CustomNavbar.Text>
          </div>

          <CustomNavbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 fw-bold f navbarHLS">
              <NavDropdown title="Expertise" id="navbar-scrolling-dropdown">
                {expertises?.map((expertise, index) => (
                  <NavDropdown.Item
                    onClick={() => {
                      navigate(`/expertise/${expertise?.name?.toLowerCase()}`, {
                        state: expertise?.id,
                      })
                    }}
                    key={index}
                  >
                    {(expertise?.name).toUpperCase()}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown
                className=""
                title="Industries"
                id="navbar-scrolling-dropdown"
              >
                {industries?.map((industry, index) => (
                  <NavDropdown.Item
                    onClick={() => {
                      navigate(`/industry/${industry?.name?.toLowerCase()}`, {
                        state: {
                          industryId: industry.id,
                          industryUUID: industry.uuid,
                        },
                      })
                    }}
                    key={index}
                  >
                    {industry?.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link className="active web-title" href={routeNames.insights}>
                {"HEALTH & LIFE INSIGHTS"}
              </Nav.Link>

              <Nav.Link
                className="active web-title"
                href={routeNames.leadership}
              >
                {"HEALTH & LIFE PROFESSIONALS"}
              </Nav.Link>
              <Nav.Link
                className="active web-title "
                href={routeNames.location}
              >
                {"LOCATIONS"}
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link
                className={`d-none d-lg-flex my-2 container-icon ${
                  showSearchDiv ? "active-link" : " inactive-link"
                } `}
                href="#action2"
              >
                {showSearchDiv ? (
                  <div
                    className="  d-flex  align-items-center  "
                    onClick={() => {
                      setShowSearchDiv(false)
                    }}
                  >
                    <XIcon />
                  </div>
                ) : (
                  <div>
                    <div className="rightIconsContainer">
                      <AlvarezMarsal id="AlvarezAndMarsal" />
                      <div className="d-flex justify-content-end">
                        <Search
                          className="searchIcon"
                          onClick={() => {
                            setShowSearchDiv(true)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Nav.Link>
            </Nav>
          </CustomNavbar.Collapse>
        </Container>
      </CustomNavbar>
    </>
  )
}

export default NavBar

const CustomNavbar = styled(Navbar)`
  .logo {
    svg {
      width: 50px;
      height: 50px;
    }
  }
  #navbarScroll > div.me-auto.my-2.my-lg-0.fw-bold.f.navbar-nav > a {
    color: var(--white);
    font-size: 12px;
    letter-spacing: 1px;
    font-family: "Helvetica Neue LT Std", sans-serif;
    font-weight: 300;
    font-style: medium;
    text-transform: uppercase;
    @media ${sizem.smm} {
      /* color: red !important; */
      font-size: 12px;
      margin-left: -20px;
    }
  }
  #navbarScroll {
    /* border: 2px solid yellow; */
    /* background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"); */
  }
  .navbar-toggler {
    /* border: 2px solid red; */
    filter: grayscale(1) invert(1);
  }

  #navbar-scrolling-dropdown,
  .web-title {
    color: var(--white);
    padding: 20px 12px !important;
    font-size: 12px;
    font-family: "Helvetica Neue LT Std", sans-serif;
    font-weight: 300;
    font-style: medium;
    letter-spacing: 1px;
    text-transform: uppercase;
    @media ${sizem.smm} {
      /* color: red !important; */
      font-size: 12px;
      margin-left: -20px;
    }
  }
  .nav-item.show.dropdown {
    /* background-color: #00254a; */
    /* background-color: red; */

    @media ${sizem.smm} {
      /* color: red !important; */
      font-size: 12px;
      /* padding-top: 0px; */
      /* margin-left: -20px; */
    }
  }
  .nav-item.show.dropdown a {
    color: white !important;
    color: var(--white);
    @media ${sizem.smm} {
      /* color: red !important; */
      font-size: 12px;
      margin-left: -20px;
    }
  }
  .nav-item.show.dropdown div {
    background-color: #00254a;
    border-radius: 0;
    margin-top: 0;
    padding-bottom: 0.5rem;
    border: 0;
    padding-top: 0px;
  }
  .nav-item.show.dropdown a {
    background-color: #00254a;
  }
  .container-icon {
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
    color: var(--white);
  }
  .inactive-link {
    background-color: transparent;
  }
  .rightIconsContainer {
    /* border: 2px solid yellow; */
    /* background-color: white; */
    margin-top: 20px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    /* font-size: 18px; */
    .searchIcon {
      padding-top: 5px;
      width: inherit;
    }
    #AlvarezAndMarsal {
      /* width: 130px; */
      width: 8rem;
    }
    svg {
      fill: white;
    }
  }
`
const NavbarSearchContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #0085ca;
  .input-class {
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
`

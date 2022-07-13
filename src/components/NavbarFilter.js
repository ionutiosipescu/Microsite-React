import React, { useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { routeNames } from "../routes/routes";
import { Search } from "../assets/icons";
import styled from "styled-components";
import { ListGroup } from "react-bootstrap";
import { sizem, size } from "../utils/breakpoints";

const NavbarFilter = ({ handleAddFilterItem }) => {
  // const [articles, setArticles] = useState([...arr]);

  // const handleFilterArticles = (title) => {
  //     var newArr = arr.filter((post) => post.category == title.toLowerCase());
  //     setArticles(newArr);
  //   };
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <CustomNavbar className="p-0" expand="lg">
      <Container fluid className="d-flex justify-content-between">
        <CustomNavbar.Toggle aria-controls="navbarScroll" />
        <CustomNavbar.Collapse id="navbarScroll" className=" ">
          <Nav className=" FullNavbar">
            {arr1?.map((element) => {
              return (
                <NavDropdown
                  className=" p-2 navbarScrollingDropdown "
                  title={element.title}
                  id="navbarScroll"
                  renderMenuOnMount={true}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  // onClick={() => console.log(element)}
                >
                  {element?.sublinks.map((link) => {
                    return (
                      <NavDropdown.Item
                        className=""
                        href={"#"}
                        onClick={() => {
                          handleAddFilterItem(link);
                        }}
                      >
                        <span>{link}</span>
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              );
            })}
          </Nav>
          <div className="d-flex justify-content-center d-none d-lg-block ms-5">
            <Form>
              <Form.Control
                type="search"
                placeholder="Enter Author's Name"
                className=""
                aria-label="Search"
              />
            </Form>
          </div>
        </CustomNavbar.Collapse>
      </Container>
    </CustomNavbar>
  );
};

const CustomNavbar = styled(Navbar)`
  background: #002b49;
  // height: 40px;
  // background: green;
  .navbarScrollingDropdown,
  .web-title {
    color: #fff;
    padding: 20px 12px !important;
  }
  .nav-item.show.dropdown {
    background-color: #002b49;
  }
  .nav-item.show.dropdown a {
    color: #fff !important;
  }
  .nav-item.show.dropdown div {
    background-color: #002b49;
    border-radius: 0;
    margin-top: 0;
    padding-bottom: 0.5rem;
    border: 0;
  }
  .nav-item.show.dropdown a {
    background-color: #002b49;
  }
  .nav-link {
    color: #fff !important;
  }
  //  .nav-item:hover .dropdown-menu {
  //     display: block !important;
  // }
  /* .FullNavbar {
  width: 75%;
  display: flex;
  justify-content: space-between;
} */
  @media ${size.lg} {
    .dropdown-toggle::after {
      display: none;
    }
    .FullNavbar {
      width: 75%;
      display: flex;
      justify-content: space-between;
    }
  }

  @media ${sizem.lgm} {
    .navbar-toggler {
      margin-top: 10px;
      width: 200px;
      font-size: 25px;
      align-items: center;
      content: "Filter  result by ";
      color: #fff;
      /* border: 2px solid red; */
      display: felx;
      display: flex;
      /* flex-direction: row-reverse; */
      width: 100%;
      justify-content: space-between;
    }
    .navbar-toggler:after {
      font-size: 30px;
      content: "Filter  result by ";
    }
    .navbar-toggler-icon {
      background-image: url("") !important;
      display: none;
    }
    .navbar-toggler-icon:after {
      margin-top: 10px;
      display: flex;
      width: 200px;
      font-size: 25px;
      align-items: center;
      /* content: "Filter  result by "; */
      color: #fff;
    }
    .nav-link {
      width: 100%;
      margin: auto;
      color: #fff !important;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
    }
    .nav-link:before {
      transform: rotate(-0deg);
    }
    .nav-link:hover:before {
      transform: rotate(-0deg);
    }
    .nav-link:after {
      transform: rotate(-90deg);
    }
    .nav-link:hover:after {
      transform: rotate(-0deg);
    }
  }
`;

const arr1 = [
  {
    id: 1,
    title: "Expertise",
    sublinks: ["Link1", "Link2", "Link3"],
  },
  {
    id: 2,
    title: "Industry",
    sublinks: ["Link14", "Link21", "Link26"],
  },
  {
    id: 3,
    title: "Country",
    sublinks: ["Link11", "Link12", "Link13"],
  },
  {
    id: 4,
    title: "Year",
    sublinks: ["Link11", "Link22", "Link31"],
  },
  {
    id: 5,
    title: "Media Type",
    sublinks: ["Link21", "Link22", "Link23"],
  },
];

export default NavbarFilter;

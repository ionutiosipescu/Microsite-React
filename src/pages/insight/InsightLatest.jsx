import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

import { HeroSection, CarouselSection } from "../../components/cards";
import PostCard from "../../components/cards/PostCard";

import { ChevronRight, ChevronRightBlue } from "../../assets/icons";
import { sizem } from "../../utils/breakpoints";
import NavbarFilter from "../../components/NavbarFilter";

const LatestInsightsContainer = styled.div`
  width: 100%;
  margin: 0;

  h7 {
    color: #0085ca;
  }

  h7 img {
    width: 16px;
    height: 16px;
    color: #0085ca;
    margin: 0px 10px;
  }
  .costumNavbar {
    background-color: #002b49;
  }
  .costumNavbar button {
    color: #fff;
    background-color: ${(props) => (props.clicked ? "white" : "#002B49")};
    color: ${(props) => (props.clicked ? "black" : "white")};
  }
  // @media ${sizem.smm} {
  //   .costumNavbar {
  //     text-align: center;
  //   }
  // }
  @media ${sizem.mdm} {
    .costumNavbar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
`;
const CostumButton = styled.div`
  color: #fff;
  background-color: ${(props) => (props.clicked ? "white" : "#002B49")};
  color: ${(props) => (props.clicked ? "black" : "white")};
`;

const PostsContainer = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const InsightLatest = () => {
  //tale URL to and edit it
  const location = useLocation();
  const LocationName = location?.pathname.split("/").slice(1, 3);

  const [articles, setArticles] = useState([...arr]);

  //filter array by button value
  const handleFilterArticles = (title) => {
    var newArr = arr.filter((post) => post.category == title.toLowerCase());
    setArticles(newArr);
  };

  return (
    <LatestInsightsContainer>
      <HeroSection
        title=" Latest Studies"
        backgroundUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      {/* <div className="container-fluid d-flex justify-content-around  costumNavbar ">
        {arr1?.map((element, key) => (
          <div className=" p-2 " id={key}>
            <button
              type="button"
              className="btn  border-0"
              onClick={() => handleFilterArticles(element)}
              clicked={element}
            >
              {element}
            </button>
          </div>
        ))}
        <div className=" p-2">
          <input
            className="h-100 rounded border-0 p-2"
            placeholder="Enter Author's Name"
          />
        </div>
      </div> */}
      <NavbarFilter />
      <div className="container  bg-white h-100 ">
        <div className="p-4">
          <h7>
            {LocationName[0]?.charAt(0).toUpperCase() +
              LocationName[0]?.slice(1)}
            <ChevronRightBlue />
            {LocationName[1]?.charAt(0).toUpperCase() +
              LocationName[1]?.slice(1)}{" "}
            {LocationName[0]?.charAt(0).toUpperCase() +
              LocationName[0]?.slice(1)}
          </h7>
        </div>

        <PostsContainer>
          {articles.map((post) => (
            <PostCard post={post} locationName={LocationName} />
          ))}
        </PostsContainer>
      </div>
      <CarouselSection
        categoryCarousel={"Healthcare & Live Sciences News"}
        backgroundColor="#002B49"
        arr={arr}
        titleColor="#0085CA"
        textColor="#fff"
        textDate="#fff"
        carouselDotBackground="#002b49"
      />
    </LatestInsightsContainer>
  );
};

export default InsightLatest;

const arr1 = [
  "Expertise",
  "Industry",
  "Country",
  "Year",
  "Buletin Type",
  "Media Type",
];

const arr = [
  {
    id: 1,
    title: "lorem-ipsum.line1",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    category: "expertise",
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 2,
    title: "lorem-ipsum.2",
    category: "expertise",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 3,
    title: "lorem-ipsum.3",
    category: "industry",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 4,
    title: "lorem-ipsum.4",
    category: "country",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },

  {
    id: 2,
    title: "lorem-ipsum.2",
    category: "country",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 1,
    title: "lorem-ipsum.line1",
    category: "country",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at illo ipsam, magni nostrum ad neque reprehenderit illum excepturi asperiores blanditiis dignissimos? Enim deserunt ea optio tempore. Est distinctio veritatis repellat! adipisicing elit. Praesentium at illo ipsam, magni nostrum ad neque reprehenderit illum excepturi asperiores blanditiis dignissimos? Enim deserunt ea optio tempore. Est distinctio veritatis repellat",
  },
  {
    id: 3,
    title: "lorem-ipsum.3",
    category: "buletin type",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 4,
    title: "lorem-ipsum.4",
    category: "country",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
];

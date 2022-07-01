import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

import { HeroSection, CarouselSection } from "../../components/cards";
import PostCard from "../../components/cards/PostCard";

import { ChevronRight, ChevronRightBlue } from "../../components/icons";

const LatestInsightsContainer = styled.div`
  width: 100%;
  // margin: auto;

  h6 {
    color: #0089ff;
  }

  h6 img {
    width: 13px;
    color: #0089ff;
    margin: 0px 10px;
  }
`;
const PostsContainer = styled.div`
  width: 94%;
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
        title="Latest Insights"
        backgroundUrl="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="container-fluid d-flex justify-content-around  bg-primary ">
        {arr1?.map((element, key) => (
          <div className=" p-2 " key={key.toString()}>
            <button
              type="button"
              className="btn btn-primary border-0"
              onClick={() => handleFilterArticles(element)}
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
      </div>
      <div className="container  bg-white h-100 ">
        <div className="p-4">
          <h6>
            {LocationName[0]?.charAt(0).toUpperCase() +
              LocationName[0]?.slice(1)}
            <ChevronRightBlue />
            {LocationName[1]?.charAt(0).toUpperCase() +
              LocationName[1]?.slice(1)}{" "}
            {LocationName[0]?.charAt(0).toUpperCase() +
              LocationName[0]?.slice(1)}
          </h6>
        </div>

        <PostsContainer>
          {articles.map((post, index) => (
            <PostCard post={post} key={index.toString()} />
          ))}
        </PostsContainer>
      </div>

      <CarouselSection
        categoryCarousel={"Healthcare & Live Sciences News"}
        backgroundColor="#283670"
        arr={arrCarousel}
        titleColor="aqua"
        textColor="#fff"
        textDate="#fff"
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

const arrCarousel = [
  {
    id: 1,
    title: "lorem-ipsum.line1",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 2,
    title: "lorem-ipsum.2",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 3,
    title: "lorem-ipsum.3",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 4,
    title: "lorem-ipsum.4",
    date: new Date().toLocaleDateString(),
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
];
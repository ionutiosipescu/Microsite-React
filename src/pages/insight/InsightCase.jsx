import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

import { HeroSection, CarouselSection } from "../../components/cards";
import PostCard from "../../components/cards/PostCard";

import { ChevronRight, ChevronRightBlue, XIcon } from "../../assets/icons";

import { sizem } from "../../utils/breakpoints";
import NavbarFilter from "../../components/NavbarFilter";

const LatestInsightsContainer = styled.div`
  width: 100%;
  margin: 0;

  h6 {
    color: #0085ca;
  }

  h6 img {
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

const InsightCase = () => {
  //tale URL to and edit it
  const location = useLocation();
  const LocationName = location?.pathname.split("/").slice(1, 3);

  const [articles, setArticles] = useState([...arr]);
  const [itemsFilter, setItemsFilter] = useState([]);

  useEffect(() => {
    //  let newArray = articles.filter((itemsFilter) =>)
    // console.log(filteredArticles);
    console.log(itemsFilter);
    console.log(articles);
    let j = [];
    articles.forEach((article) => {
      itemsFilter.forEach((x) => {
        if (article.category.toLowerCase() == x.toLowerCase()) {
          j.push(article);
        }
      });
    });
    setArticles(j);
    // let res = articles.filter((item) =>
    //   itemsFilter.includes(item.category.toLowerCase())
    // );
    // let res = articles.filter(
    //   (item) => itemsFilter[0]?.toLowerCase() == item.category.toLowerCase()
    // );

    // console.log(res);
  }, [itemsFilter]);

  //filter array by button value
  // const handleFilterArticles = (title) => {
  //   var newArr = arr.filter((post) => post.category == title.toLowerCase());
  //   setArticles(newArr);
  // };
  const handleAddFilterItem = (item) => {
    if (itemsFilter.indexOf(item) === -1) {
      setItemsFilter((oldArr) => [...oldArr, item]);
    }
  };

  const handleDeleteFilterItem = (itemx) => {
    setItemsFilter(itemsFilter.filter((item) => item !== itemx));
  };

  return (
    <LatestInsightsContainer>
      <HeroSection
        title=" Case Studies"
        backgroundUrl="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <NavbarFilter handleAddFilterItem={handleAddFilterItem} />
      {itemsFilter !== 0 && (
        <div
          className="container-fluid  w-100 d-flex align-items-center filterItem"
          style={{ height: "60px", backgroundColor: "#00000029" }}
        >
          {itemsFilter?.map((itemFilter) => (
            <div
              className="filterItem  d-flex px-2 align-items-center ms-2 rounded-2 bg-light"
              style={{ height: "40px" }}
            >
              <div>{itemFilter}</div>
              <div
                className="ms-2 d-flex "
                onClick={() => {
                  handleDeleteFilterItem(itemFilter);
                  // console.log(itemFilter);
                }}
              >
                <XIcon />
              </div>
            </div>
          ))}
        </div>
      )}
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

export default InsightCase;

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
    category: "link11",
    desciption:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a",
  },
  {
    id: 2,
    title: "lorem-ipsum.2",
    category: "link14",
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

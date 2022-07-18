import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { PostCard } from "../../../components/cards";

//data
import { PostsArr } from "../../../utils/data";

const NewsRelease = () => {
  // This is the news that will come from drupal. Probably in a array
  let news = {
    title: "Card Title",
    date: "15/5/2020",
    content:
      "Some quick example text to build on the card title and make  Some quick example text to build on the card title and make  Some quick example text to build on the card title and make ",
  };
  const PostsContainer = styled.div`
    padding: 2rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `;
  return (
    <>
      <Row className="p-3">
        <PostsContainer>
          {PostsArr.map((post, index) => (
            <PostCard post={post} key={index} />
          ))}
        </PostsContainer>
      </Row>
    </>
  );
};

export default NewsRelease;

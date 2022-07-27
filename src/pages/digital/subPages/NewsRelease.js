import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostCard, NewsCard } from "../../../components/cards";
import { getArticles } from "../../../API";

const PostsContainer = styled.div`
  padding: 2rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NewsRelease = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getArticles(setNews, "news");
  }, []);

  // console.log(news)
  console.log(news);
  return (
    <PostsContainer>
      {news.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </PostsContainer>
  );
};

export default NewsRelease;

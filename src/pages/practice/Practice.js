import React, { useState, useEffect } from "react"
import {
  PodcastCard,
  ArticlePreviewCard,
  ExpertiseCard,
  HeroSection,
} from "../../components/cards"
import { ButtonWithAnimation } from "../../components/buttons"
import UnalignedItemsConainer from "../../components/layout/UnalignedItemsContainer"
import styled from "styled-components"

const Practice = () => {
  const link = process.env.REACT_APP_CUSTOM_API_URL + "/hls"

  console.log(link)

  const content =
    "Lorem  Consequat anim eiusmod reprehenderit ut in eiusmod ea ipsum ex. Elit anim amet quis excepteur sint voluptate cillum minim incididunt veniam sint. Esse pariatur magna adipisicing amet do sint amet reprehenderit adipisicing."

  const content2 =
    "Lorem  Consequat. Esse pariatur magna adipisicing amet do sint amet reprehenderit adipisicing."

  const content3 =
    "Lorem  Consequat.Consequat. Esse pariatur magna adipisicing amet do sint amet Esse pariatur magna adipisicing amet do sint amet reprehenderit Consequat. Esse pariatur magna adipisicing amet do sint ametConsequat. Esse pariatur magna adipisicing amet do sint amet adipisicing."

  return (
    <>
      <HeroSection height={300} pageCategory="Expertise" title={"f"} />
      <UnalignedItemsConainer columnsNumber={4}>
        <Item>{content}</Item>
        <Item>{content2}</Item>
        <Item>{content3}</Item>
        <Item>{content}</Item>
        <Item>{content2}</Item>
        <Item>{content3}</Item>
        <Item>{content}</Item>
        <Item>{content2}</Item>
        <Item>{content3}</Item>
      </UnalignedItemsConainer>

      {/* <Container>
        <div>Something</div>
        <div>Something</div>
        <div>Something</div>
      </Container> */}
    </>
  )
}

export default Practice

const Container = styled.div`
  width: 200px;
  background: gray;

  div {
    border-bottom: 2px solid black;
  }

  & > :last-child {
    border-bottom: none;
  }
`

const Item = styled.div`
  border: 2px solid red;
  margin: 1rem;
`

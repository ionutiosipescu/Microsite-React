import React from "react";
import { Container, Row } from "react-bootstrap";
import CardInsightsBrazilian from "../../../components/cards/CardInsightsBrazilian";
import image from "../../../assets/images/ConnorWine";
import TranslateButton from "../../../components/buttons/TranslateButton";

const Insights = () => {
  // this is the Insights that will come from drupal
  let drupal = [
    {
      image: image,
      type: "podcast",
      title: "This is a very long Title",
      content:
        "laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea.",
    },
    {
      image: image,
      type: "podcast",
      title: "This is a very long Title",
      content:
        "laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea.",
    },
    {
      image: image,
      type: "podcast",
      title: "This is a very long Title",
      content:
        "laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea. laboris. Laboris ea eu ut dolor commodo commodo voluptate aute ea.",
    },
  ];

  return (
    <>
      <div>
        {" "}
        <Row className="p-5">
          <TranslateButton text1={"English"} text2={"Portuguese"} />
        </Row>
      </div>
      <Container className="">
        {drupal.map((insight, index) => (
          <CardInsightsBrazilian
            key={index}
            image={insight.image}
            type={insight.type}
            title={insight.title}
            content={insight.content}
          />
        ))}
      </Container>
    </>
  );
};

export default Insights;

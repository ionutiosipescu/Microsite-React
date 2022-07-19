import React from "react";
import { useNavigate } from "react-router";
import { Container } from "react-bootstrap";
import CardInsights from "../../../components/cards/CardInsights";
import image from "../../../assets/images/ConnorWine";

const Insights = () => {
  const navigate = useNavigate();
  const handleRedirect = (insight) => {
    navigate(`/digital/insights/${insight.title}`);
  };
  return (
    <>
      {drupal.map((insight, index) => (
        <CardInsights
          key={index}
          image={insight.image}
          type={insight.type}
          title={insight.title}
          content={insight.content}
          onClick={() => {
            navigate(`/digital/insights/${insight.title}`, { state: insight });
          }}
        />
      ))}
    </>
  );
};

export default Insights;

// this is the Insights that will come from drupal
let drupal = [
  {
    image:
      "https://images.unsplash.com/photo-1658135354486-811474babc03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
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

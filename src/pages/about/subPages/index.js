import React from "react";
import Overview from "./Overview";
import Capabilities from "./Capabilities";
import NewsRelease from "./NewsRelease";
import Professionals from "./Professionals";
import Insights from "./Insights";
import Services from "./Services";
import News from "./News";
import Locations from "./Locations";
import { Container } from "react-bootstrap";

const SubPage = ({ subPage }) => {
  const subPages = {
    overview: <Overview />,
    services: <Services />,
    news: <News />,
    locations: <Locations />,
    insights: <Insights />,
    professionals: <Professionals />,
  };

  return (
    <Container fluid className="bg-light p-0">
      {subPages[subPage]}
    </Container>
  );
};

export default SubPage;

import React, { useEffect, useState } from "react";

import { CardInsights } from "../../../components/cards/";
import { getPodcasts } from "../../../API";
import { useDocumentTitle } from "../../../hook";

const Insights = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    getPodcasts(setPodcasts);
  }, []);

  // console.log(podcasts)
  useDocumentTitle("Digital | Insights | Alvarez & Marsal");
  return (
    <>
      {podcasts.map((podcast, index) => (
        <CardInsights
          key={index}
          podcast={podcast}
          //   image={podcast.image}
          //   type={podcast.type}
          //   title={podcast.title}
          //   teaserText={podcast.teaserText}
        />
      ))}
    </>
  );
};

export default Insights;

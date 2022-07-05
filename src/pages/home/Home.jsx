import React from "react";
import HeroSection from "../../components/cards/HeroSection";
import CarouselSection from "../../components/cards/CarouselSection";
import QualitiesSection from "../../components/section/QualitiesSection";
import RecongnitionSection from "../../components/section/RecongnitionSection";

//import data
import { arr2 } from "../../utils/data";

const heroSection = {
  title: "emea heltcare & live sciences",
  backgroundUrl:
    "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const arr = [
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
const Home = () => {
  return (
    <div>
      <HeroSection
        title={heroSection.title}
        backgroundUrl={heroSection.backgroundUrl}
      />
      <CarouselSection
        categoryCarousel={"Healthcare & Live Sciences News"}
        backgroundColor="white"
        arr={arr}
        titleColor="#0085CA"
        textColor="#000"
        textDate="#949494"
        carouselDotBackground="white"
      />
      <QualitiesSection />
      <RecongnitionSection arr={arr2} titleSection="Recent Recongnition" />
      <CarouselSection
        categoryCarousel={"Healthcare & Live Sciences News"}
        backgroundColor="#002B49"
        arr={arr}
        titleColor="#0085CA"
        textColor="#fff"
        textDate="#FFFFFF"
        carouselDotBackground="#002b49"
      />
    </div>
  );
};

export default Home;

import React from "react";
import styled from "styled-components";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Page = styled.div`
  margin: 0 auto;
  background-color: white;
  max-width: 1280px;
  width: 100%;
`;
const Container = styled.div`
  background: var(--gray1);
`;

const Layout = (props) => {
  return (
    <Container>
      <Page>
        <Navbar />
        <div {...props}>{props.children}</div>
        <Footer className="my-2" />
      </Page>
    </Container>
  );
};

export default Layout;

import React from "react";
import styled from "styled-components";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { size } from "../../utils/breakpoints";

const Page = styled.div`
  margin: 0 auto;
  background-color: white;
  max-width: 100%;
  width: 100%;
  width: 100%;
`;
const Container = styled.div`
  background: var(--gray1);
`;

const Layout = (props) => {
  return (
    <Container>
      <Page>
        <div {...props}>{props.children}</div>
        <Footer className="my-2" />
      </Page>
    </Container>
  );
};

export default Layout;

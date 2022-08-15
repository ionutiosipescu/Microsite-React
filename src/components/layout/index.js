import React from "react";
import styled from "styled-components";
import Navbar from "./NavBar";
import FooterNew from "./FooterNew";
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
        <FooterNew className="my-2" />
      </Page>
    </Container>
  );
};

export default Layout;

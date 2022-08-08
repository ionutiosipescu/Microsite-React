import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

const Container = styled.div`
  height: 100vh;
  padding: 2.5rem 0.9375rem 3.75rem;
  max-width: 1280px;
  margin: 0 auto;
  background-color: #ffffff;
  input {
    display: block;
    width: 100%;
    margin: 0;
    border: 0;
    font-size: 16px;
    font-size: 1rem;
    line-height: 4.375rem;
    height: 4.375rem;
    background-color: #666;
    background-color: transparent;
  }
`;
const Col = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 2.5rem;
    text-transform: uppercase;
    color: #000000;
    font-size: 40px;
    font-size: 2.5rem;
    line-height: 1;
    text-align: center;
  }
  h4 {
    color: #666666;
    font-size: 22px;
    font-size: 1.375rem;
    line-height: 26px;
    line-height: 1.625rem;
    text-align: center;
  }
`;

const PageNotFound = () => {
  return (
    <Container>
      <Col>
        <h2>Page not Found</h2>
        <h4>We're sorry, but nothing exists at this address.</h4>
      </Col>
      <Col>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search the AM site"
            className=""
            aria-label="Search"
          />
        </Form>
      </Col>
    </Container>
  );
};

export default PageNotFound;

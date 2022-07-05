import React from "react";
import styled from "styled-components";
import YellowButton from "./buttons/YellowButton";
import { size } from '../utils/breakpoints'

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 200px;
  background: var(--gray2);
  // background: red;

  h1 {
    flex: 2;
    text-transform: uppercase;
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding-left: 20px;

  @media ${size.smm} {
		font-size: 1rem;
    margin-left: 0;
	 }
  @media ${size.sm} {
		font-size: 1.5rem;
    margin-left: 20px;
	 }
  `
  ;

const Form = styled.form`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  width: inherit;
  @media ${size.smm} {
    margin-left: 0px;
	 }
`;
const BulletinSignup = () => {
  return (
    // <Container className="my-5">
    <Container className="flex-column flex-md-row flex-sm-column justify-content-md-between justify-content-sm-evenly justify-content-evenly">
      <h3 className="fw-bold">{"A&M BULLETIN SIGNUP"}</h3>
      <Form className="">
        <Input placeholder={"Email Address"} className="w-75" />
        <YellowButton text={"Subscribe"} radius={"0"} />
      </Form>
    </Container>
  );
};

export default BulletinSignup;

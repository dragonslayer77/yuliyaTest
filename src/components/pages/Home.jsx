import React from "react";
import Employees from "../lists/Employees";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  text-align: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <h1>BitGrow</h1>
      <Employees />
    </Wrapper>
  );
};

export default Home;

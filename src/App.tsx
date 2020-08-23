import React from "react";
import "./App.less";
import { Button } from "antd";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.6em;
  text-align: center;
  color: palevioletred;
`;

function App() {
  return (
    <div className="App">
      <Title>Hello world!</Title>
      <Button type="primary" className="my-button" onClick={() => null}>
        Button
      </Button>
    </div>
  );
}

export default App;

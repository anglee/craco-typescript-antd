import React from "react";
import "./App.less";
import { Button } from "antd";
import styled from "styled-components";
import MButton from '@material-ui/core/Button';

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

      <MButton variant="contained">Default</MButton>
      <MButton variant="contained" color="primary">
        Primary
      </MButton>
      <MButton variant="contained" color="secondary">
        Secondary
      </MButton>
    </div>
  );
}

export default App;

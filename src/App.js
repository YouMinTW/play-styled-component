import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Counter = ({ className }) => {
  const [count, setCount] = React.useState(0);
  return (
    <Wrapper className={className}>
      <div>
        <h1>{count}</h1>

        <Button primary onClick={() => setCount((pre) => pre + 1)}>
          +1
        </Button>
        <Button onClick={() => setCount((pre) => pre - 1)}>-1</Button>
      </div>
    </Wrapper>
  );
};
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const StyledCounter = styled(Counter)`
  background-color: blue;
`;
function App() {
  return (
    <div>
      <TomatoButton>123</TomatoButton>
      <Counter />
      <StyledCounter />
      <Link>1111</Link>
      <StyledLink>1111</StyledLink>
    </div>
  );
}
const Link = ({ children, className }) => {
  return <a className={className}>{children}</a>;
};
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;
export default App;

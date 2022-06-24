import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiCook } from "react-icons/gi";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Find My Recipe";
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}>
            <GiCook></GiCook>
            <h2>Find My Recipe</h2>
          </Logo>
        </Nav>
        <Search></Search>
        <Category></Category>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  margin-top: 3rem;
  cursor: pointer;
  svg {
    font-size: 5rem;
  }
`;

const Nav = styled.div`
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Heading = styled.div`
  h2 {
  }
`;

export default App;

import {
  GiNoodles,
  GiChickenOven,
  GiFullPizza,
  GiCroissant,
} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div>
      <List>
        <SLink to={"/cuisine/chinese"}>
          <GiNoodles></GiNoodles>
          <h4>Chinese</h4>
        </SLink>
        <SLink to={"/cuisine/indian"}>
          <GiChickenOven></GiChickenOven>
          <h4>Indian</h4>
        </SLink>
        <SLink to={"/cuisine/italian"}>
          <GiFullPizza></GiFullPizza>
          <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/french"}>
          <GiCroissant />
          <h4>French</h4>
        </SLink>
      </List>
    </div>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 2rem 0rem;
  gap: 2rem;
`;

const SLink = styled(NavLink)`
  border-radius: 50%;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  background: #23b5d3;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: scale(0.9);

  h4 {
    color: #dfe0e2;
    font-size: 0.8rem;
  }

  svg {
    color: #dfe0e2;
    font-size: 2rem;
  }

  &.active {
    background: #056987;
  }
`;

export default Category;

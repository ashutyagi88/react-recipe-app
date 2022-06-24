import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const changeInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch></FaSearch>
      <input type="text" value={input} onChange={(e) => changeInput(e)} />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 5rem auto;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  input {
    border: none;
    width: 35%;
    background: #23b5d3;
    font-size: 1.6rem;
    padding: 1rem 3rem;
    color: #dfe0e2;
    border: none;
    border-radius: 1rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 32.5%;
    transform: translate(100%, -50%);
    color: #dfe0e2;
    font-size: 1.2rem;
  }
`;

export default Search;

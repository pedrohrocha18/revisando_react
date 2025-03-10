import styled from "styled-components";

const CardDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  color: black;
  height: 100px;
  margin: 10px;
  text-align:center;
  width: 100%;
`

const Card = ({ title, description }) => {
  return (
    <CardDiv>
      <h4>{title}</h4>
      <p>{description}</p>
    </CardDiv>
  );
};

export default Card;

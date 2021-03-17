import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0px;
  background: #d1b8ab;
  text-align: center;

  & .head-title-start {
    margin: 5px;
    padding: 20px 0 30px 0;
    font-weight: 700;
    font-size: 55px;
    text-transform: uppercase;

    &:hover {
      color: none;
    }
  }

  & .head-title {
    margin: 5px;
    padding-top: 20px;
    font-weight: 700;
    font-size: 55px;
    text-transform: uppercase;

    &:hover {
      color: #5e3d2c;
    }

    @media (min-width: 1025px) {
      height: 200px;
      font-size: 75px;
    }
  }

  & .sub-title {
    font-size: 10px;
    font-weight: normal;
    margin-top: 15px;

    @media (min-width: 1025px) {
      padding-top: 30px;
    }
  }
`;

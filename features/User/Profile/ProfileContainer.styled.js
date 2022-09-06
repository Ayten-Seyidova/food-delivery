import styled from "styled-components";

export const ProfileContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  color: black;
  background-color: #f3f4f6;
  @media screen and (max-width: 768px) {
    background-color: white;
  }
`;

export const Header = styled.h1`
  font-weight: 500;
  font-size: 45px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #000000;
  margin-bottom: 3%;
`;

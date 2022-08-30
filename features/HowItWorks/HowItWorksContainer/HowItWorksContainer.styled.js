import styled from "styled-components";

export const HIW = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 3%;
`;

export const HIWHeader = styled.h1`
  font-weight: 600;
  font-size: 45px;
  color: #000000;
  margin-bottom: 2%;
`;

export const HIWContent = styled.p`
  width: 60%;
  font-weight: 500;
  font-size: 20px;
  color: #828282;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Multimedia = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 9% 0px;
`;

export const Background = styled.div`
  width: 903px;
  height: 407px;
  background-color: #ffb64f;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  transform: rotate(-170.57deg);
  @media screen and (max-width: 768px) {
    transform: rotate(0deg);
    height: 474px;
    width: 280px;
  }
`;

export const Front = styled.img`
  position: absolute;
  width: 620px;
  @media screen and (max-width: 768px){
    width: 300px;
  }
`;

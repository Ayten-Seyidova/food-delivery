import styled from "styled-components";

export const AboutUs = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  padding: 5%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 45px;
  color: #000000;
  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const Content = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #828282;
  letter-spacing: 1.15px;
  margin-top: 5%;
  line-height: 35px;
`;

export const AboutRight = styled.div`
  width: 50%;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AboutRightMobile = styled.div`
  width: 90%;
  min-height: 581.07px;
  background: #ffb64f;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  justify-content: space-evenly;
  align-items: center;
  display: none;
  flex-direction: column;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const CardContainerMobile = styled.div`
  height: 144px;
  width: 90%;
  border-radius: 20px;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const Background = styled.div`
  width: 687px;
  height: 407px;
  background: #ffb64f;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  transform: rotate(-67.93deg);
`;

export const CardContainer = styled.div`
  width: 294px;
  height: 194px;
  border-radius: 20px;
  position: absolute;
  margin-top: -35%;
  margin-left: 20%;
`;

export const Card = styled.div`
  width: 274px;
  height: 174px;
  background: #ffffff;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export const CardFood = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: white;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-top: -80%;
  margin-left: 45%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    margin-top: -150px;
    margin-left: 150px;
  }
`;

export const CardDetail = styled.div`
  width: 150px;
  height: 100px;
  margin-top: -130px;
  color: #4f4f4f;
  padding-left: 20px;
`;

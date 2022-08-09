import styled from "styled-components";

export const AboutUs = styled.div`
  width: 100%;
  justify-content: space-between;
  /* align-items: center; */
  display: flex;
  flex-direction: row;
  /* background-color: green; */
`;
export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  /* justify-content: center; */
  align-items: flex-start;
  background-color: red;
  height: 100%;
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 45px;
  color: #000000;
`;

export const Content = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #828282;
`;
export const AboutRight = styled.div`
  width: 50%;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: greenyellow;
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
  /* background: #ffffff; */
  /* box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2); */
  border-radius: 20px;
  position: absolute;
  margin-top:-30%;
  margin-left:20%;
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
  width: 120px;
  height: 118px;
  background: url(download.jpg);
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-top: -80%;
  margin-left: 45%;
`;

export const CardDetail = styled.div`
  width: 150px;
  height: 100px;
  /* background-color: brown; */
  margin-top: -100px;
  color: #4f4f4f;
  padding-left: 20px;
`;

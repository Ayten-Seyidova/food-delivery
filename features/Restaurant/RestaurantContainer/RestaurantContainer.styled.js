import styled from "styled-components";

export const RestMain = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;

export const RestLeft = styled.div`
  width: 20%;
  background-color: #f3f4f6;
  height: 700px;
  overflow-y: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Category = styled.button`
  height: 40px;
  width: 90%;
  background-color: transparent;
  border-radius: 4px;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  float: left;
  border: none;
  &:hover {
    background-color: rgba(214, 54, 38, 0.1);
  }
`;

export const CategoryImg = styled.img`
  width: 25px;
  height: 100%;
  object-fit: contain;
  border-radius: 4px 0px 0px 4px;
`;

export const CategoryName = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #d63626;
  width: 80%;
  height: 100%;
  border-radius: 0px 4px 4px 0px;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: 5%;
`;

export const RestRight = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 15px;
  justify-content: center;
  overflow-y: auto;
  max-height: 700px;
  @media screen and (max-width: 768px) {
    padding: 0px;
    gap: 5%;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 235px;
  height: 345.27px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0px 0px 25px 0px;
  justify-content: center;
  display: grid;
  grid-template-rows: 50% 40% 10%;
  padding: 1%;
  @media screen and (max-width: 768px) {
    grid-template-rows: 80px 80px 40px;
    height: 212px;
    width: 131px;
    margin: 5px 0px;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CardMiddle = styled.div`
  padding-top: 9%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 3% 0%;
    gap: 0px;
  }
`;

export const CardHeader = styled.p`
  font-weight: 700;
  font-size: 22px;
  color: #4f4f4f;
  width: 100%;
  height: 40px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    min-height: 40px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;
export const CardDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #828282;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    min-height: 40px;
    margin-top: -17px;
  }
`;

export const CardBottom = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0px;
  }
`;

export const CardDelivery = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #4f4f4f;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CardTime = styled.div`
  width: 78px;
  height: 31.38px;
  background: #d63626;
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 90%;
  }
`;

export const CardNewtag = styled.div`
  width: 53px;
  height: 27px;
  background-color: #d63626;
  color: #ffffff;
  position: absolute;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Filters = styled.div`
  width: 283px;
  height: 35px;
  background: #ffffff;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.2);
  border: none;
  display: none;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
  text-align: center;
  flex-direction: row;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

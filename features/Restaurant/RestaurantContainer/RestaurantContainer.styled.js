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
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  overflow-y: auto;
  height: 700px;
`;

export const Card = styled.div`
  position: relative;
  width: 235px;
  height: 345.27px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 12px;
  justify-content: center;
  display: grid;
  grid-template-rows: 50% 40% 10%;
  padding: 1%;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CardMiddle = styled.div`
  /* justify-content: center; */
  padding-top: 9%;
  width: 100%;
  align-items: center;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.h1`
  font-weight: 700;
  font-size: 22px;
  color: #4f4f4f;
  width: 100%;
`;
export const CardDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #828282;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const CardBottom = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width: 100%;
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

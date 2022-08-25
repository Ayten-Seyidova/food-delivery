import styled from "styled-components";

export const RestDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
`;

export const Cover = styled.div`
  width: 80%;
  height: 537px;
  display: flex;
  flex-direction: column;
`;

export const CoverDetail = styled.div`
  justify-content: space-between;
  display: grid;
  width: 100%;
  grid-template-columns: 70% 30%;
  height: 89px;
  align-items: center;
  /* background-color: aliceblue; */
`;

export const CoverDetailLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin: 13px 0px;
`;

export const CoverDetailRight = styled.div`
  justify-content: space-around;
  align-items: center;
  display: grid;
  flex-direction: column;
  width: 100%;
  height: 100%;
  grid-template-columns: 60% 20% 20%;
`;

export const Cuisine = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Down = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  width: 100%;
  gap: 2%;
  /* justify-content: space-between; */
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f4f6;
  width: 100%;
`;

export const Checkout = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  background-color: #f3f4f6;
  width: 95%;
  height: 400px;
  overflow-y: auto;
`;

export const CheckoutButton = styled.div`
  width: 100%;
  background-color: #d63626;
  border-radius: 100px;
  height: 47px;
  justify-content: space-between;
  align-items: center;
  color: white;
  display: flex;
  flex-direction: row;
  padding: 0px 2px 0px 25px;
  font-weight: 500;
`;

export const ButtonDiv = styled.div`
  width: 72px;
  height: 51px;
  border: 1px solid #d63626;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  background-color: #d63626;
  padding: 5px;
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 22px;
  color: #4f4f4f;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #828282;
`;

export const Line = styled.hr`
  background-color: #f2f2f2;
`;

export const Product = styled.div`
  height: 99px;
  justify-content: space-evenly;
  align-items: center;
  display: grid;
  grid-template-columns: 8% 60% 15% 9%;
  border-top: 1px solid #e0e0e0;
  gap: 2%;
`;

export const ProductContent = styled.div`
  justify-content: space-between;
  /* align-items: center; */
  display: flex;
  flex-direction: column;
`;

export const BasketHeader = styled.p`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: #d63626;
  font-size: 16px;
  font-weight: 500;
  gap: 2%;
`;

export const BasketProduct = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 20% 60% 10% 10%;
  border-top: 1px solid #e0e0e0;
  height: 90px;
`;

export const BasketProductContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Counter = styled.div`
  width: 29px;
  height: 70px;
  background-color: #fff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlusMinusButton = styled.button`
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

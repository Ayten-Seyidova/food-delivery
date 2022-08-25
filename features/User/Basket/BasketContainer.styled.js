import styled from "styled-components";

export const BasketDiv = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 38% 62%;
  padding: 4%;
  color: black;
  background-color: #f3f4f6;
`;

export const Header = styled.h1`
  font-weight: 500;
  font-size: 45px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #000000;
  margin-bottom: 3%;
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

export const BasketHeader = styled.p`
  align-items: center;
  display: flex;
  flex-direction: row;
  color: #d63626;
  font-size: 16px;
  font-weight: 500;
  gap: 2%;
`;

import styled from "styled-components";

export const CheckoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  color: black;
  background-color: #f3f4f6;
  border-radius: 5px;
`;

export const CheckoutContainerDiv = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 60% 40%;
  color: black;
  gap: 1%;
`;

export const OrdersDiv = styled.div`
  justify-content: center;
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

export const CompletedCheckoutDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 4%;
  color: black;
  background-color: #f3f4f6;
  border-radius: 5px;
`;

export const OrderText = styled.p`
  font-weight: 500;
  font-size: 30px;
  color: #4f4f4f;
  width: 385px;
  text-align: center;
`;

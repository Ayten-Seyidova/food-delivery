import styled from "styled-components";

export const CheckoutDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  color: black;
  background-color: #f3f4f6;
  border-radius: 5px;
`;

export const PageName = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #4f4f4f;
`;

export const CheckoutContainerDiv = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: 60% 40%;
  color: black;
  gap: 1%;
`;

export const OrdersDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
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

export const OrderName = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #828282;
  margin-bottom: 40px;
`;

export const OrderLine = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  justify-content: space-between;
  color: #828282;
  font-weight: 400;
  font-size: 14px;
  height: 50px;
`;

export const OrderContainer = styled.div`
  width: 90%;
  height: 400px;
  overflow-y: auto;
`;

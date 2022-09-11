import styled from "styled-components";

export const RestDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: center;
`;

export const Cover = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 2% 0%;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 400px;
  min-height: none;
`;

export const CoverDetail = styled.div`
  justify-content: space-between;
  display: grid;
  width: 100%;
  grid-template-columns: 55% 45%;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;
  }
`;

export const CoverDetailLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin: 13px 0px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    border-bottom: 2px solid #f3f4f6;
  }
`;

export const CoverDetailRight = styled.div`
  justify-content: space-between;
  align-items: center;
  display: grid;
  flex-direction: column;
  width: 100%;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 768px) {
    border-bottom: 2px solid #f3f4f6;
    margin-bottom: 20px;
    gap: 3%;
  }
`;

export const Cuisine = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 768px) {
    height: 90%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5%;
  width: 120px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const Down = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  width: 100%;
  gap: 2%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f4f6;
  border-radius: 4px;
  width: 100%;
`;

export const ProductImg = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 80px;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CheckoutContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Checkout = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  background-color: #f3f4f6;
  width: 95%;
  height: 400px;
  border-radius: 4px;
`;

export const CheckoutButton = styled.div`
  margin-top: 10px;
  width: 32%;
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
  position: absolute;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonDiv = styled.div`
  min-width: 80px;
  height: 51px;
  border: 1px solid #d63626;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  background-color: #d63626;
  padding: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 25px;
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
  min-height: 99px;
  justify-content: space-evenly;
  align-items: center;
  display: grid;
  grid-template-columns: 10% 60% 15% 9%;
  border-top: 1px solid #e0e0e0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 65% 20% 10%;
    padding-right: 10px;
  }
`;

export const ProductContent = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 0% 5%;
`;

export const ProductText = styled.div`
  justify-content: center;
  align-items: center;
`;

export const ProductName = styled.h1`
  font-size: 18px;
  color: #4f4f4f;
`;

export const ProductDescription = styled.h1`
  font-size: 14px;
  color: #828282;
`;

export const PriceContainer = styled.div`
  justify-content: "center";
  align-items: center;
  text-align: center;
  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const From = styled.p`
  color: #828282;
  font-size: 12;
  padding: 3px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Price = styled.p``;

export const PlusButton = styled.div`
  justify-content: center;
  align-items: center;
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
  grid-template-columns: 20% 50% 10% 10%;
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

export const EmptyBasketText = styled.div`
  justify-content: space-around;
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  text-align: center;
  color: #bdbdbd;
`;

export const TotalPrice = styled.div`
  width: 135px;
  height: 43px;
  border-radius: 100px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
`;

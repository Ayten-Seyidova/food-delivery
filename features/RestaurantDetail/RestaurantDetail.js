import React, { useState } from "react";
import {
  BasketHeader,
  BasketProduct,
  BasketProductContent,
  ButtonDiv,
  Buttons,
  Checkout,
  CheckoutButton,
  CheckoutContainer,
  Counter,
  Cover,
  CoverDetail,
  CoverDetailLeft,
  CoverDetailRight,
  CoverImage,
  Cuisine,
  Down,
  EmptyBasketText,
  From,
  Line,
  Name,
  PlusButton,
  PlusMinusButton,
  Price,
  PriceContainer,
  Product,
  ProductContent,
  ProductDescription,
  ProductImg,
  ProductName,
  Products,
  ProductText,
  RestDetail,
  Text,
  TotalPrice,
} from "./RestaurantDetail.styled";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { MdOutlineShoppingBasket, MdOutlineDeleteSweep } from "react-icons/md";
import {
  addBasket,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../store/slice/basketSlice";
import { GrBasket } from "react-icons/gr";
import { basketCreateAPI, basketDeleteAPI } from "../../api/basket";

function RestaurantDetail({ data }) {
  let { push, back } = useRouter();

  const cart = useSelector((state) => state.basketSlice.cart);
  const dispatch = useDispatch();

  const addProduct = (item) => {
    basketCreateAPI(item)
      .then((res) => dispatch(addBasket(item)))
      .catch(() => console.log("error"));
  };

  const increment = (id) => {
    basketCreateAPI(id)
      .then((res) => dispatch(incrementQuantity(id)))
      .catch(() => console.log("error"));
  };

  const decrement = (id) => {
    basketCreateAPI(id)
      .then((res) => dispatch(decrementQuantity(id)))
      .catch(() => console.log("error"));
  };

  const deleteProduct = (id) => {
    basketDeleteAPI(id)
      .then((res) => dispatch(removeItem(id)))
      .catch(() => console.log("error"));
  };

  return (
    <div>
      <RestDetail>
        <Cover>
          <CoverImage src={data.restaurant.img} alt={data.restaurant.name} />
        </Cover>
        <CoverDetail>
          <CoverDetailLeft>
            <Name>{data.restaurant.name}</Name>
            <Text>{data.restaurant.address}</Text>
          </CoverDetailLeft>
          <CoverDetailRight>
            <Cuisine>
              <Text style={{ fontSize: 18 }}>Cuisine</Text>
              <Text>{data.restaurant.categories}</Text>
            </Cuisine>
            <Buttons>
              <ButtonDiv
                style={{
                  backgroundColor: "white",
                  color: "#d63626",
                }}
              >
                {`${data.restaurant.deliveryPrice} $ Delivery`}
              </ButtonDiv>
              <ButtonDiv id="goback" onClick={() => back()}>
                Go Back
              </ButtonDiv>
            </Buttons>
          </CoverDetailRight>
        </CoverDetail>
        <Down>
          <Products>
            <Name style={{ padding: 30 }}>Products</Name>
            {data.products.map((item) => (
              <Product key={item.id}>
                <ProductImg src={item.img} alt={item.name} />
                <ProductContent>
                  <ProductText>
                    <ProductName>{item.name}</ProductName>
                    <ProductDescription>{item.description}</ProductDescription>
                  </ProductText>
                </ProductContent>
                <PriceContainer>
                  <From>From&nbsp;</From>
                  <Price>${item.price}0</Price>
                </PriceContainer>
                <PlusButton>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => addProduct(item)}
                    sx={{
                      background: "#6FCF97",
                      minWidth: 40,
                      minHeight: 40,
                      maxWidth: 40,
                      borderRadius: "50%",
                      marginRight: 0,
                    }}
                  >
                    +
                  </Button>
                </PlusButton>
              </Product>
            ))}
          </Products>
          <CheckoutContainer>
            <Checkout>
              <BasketHeader
                style={{ color: cart.length ? "#d63626" : "#bdbdbd" }}
              >
                <MdOutlineShoppingBasket size={30} /> {cart.length} items
              </BasketHeader>
              <div style={{ overflowY: "auto" }}>
                {cart.length ? (
                  cart.map((item) => (
                    <BasketProduct key={item.id}>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: 45, height: 45, objectFit: "contain" }}
                      />
                      <BasketProductContent>
                        <h1 style={{ fontSize: 16, color: "#4f4f4f" }}>
                          {item.name}
                        </h1>
                        <p style={{ fontSize: 14, color: "#4f4f4f" }}>
                          ${Math.round(item.price * item.quantity * 100) / 100}
                        </p>
                      </BasketProductContent>
                      <Counter>
                        <PlusMinusButton onClick={() => increment(item.id)}>
                          +
                        </PlusMinusButton>
                        <p style={{ margin: 0, padding: 0 }}>{item.quantity}</p>
                        <PlusMinusButton onClick={() => decrement(item.id)}>
                          -
                        </PlusMinusButton>
                      </Counter>
                      <MdOutlineDeleteSweep
                        size={27}
                        color="#BDBDBD"
                        onClick={() => deleteProduct(item.id)}
                        style={{
                          top: 0,
                          bottom: 100,
                          width: 50,
                          position: "relative",
                        }}
                      />
                    </BasketProduct>
                  ))
                ) : (
                  <EmptyBasketText>
                    <GrBasket size={150} style={{ color: "red" }} />
                    <p style={{ fontWeight: 500, fontSize: 40 }}>
                      Opps! <br></br>Basket empty
                    </p>
                  </EmptyBasketText>
                )}
              </div>
            </Checkout>
            <CheckoutButton
              onClick={() => push("/user?page=basket")}
              style={{ backgroundColor: cart.length ? "#d63626" : "#bdbdbd" }}
            >
              Checkout
              <TotalPrice
                style={{
                  color: cart.length ? "red" : "#bdbdbd",
                }}
              >
                $
                {Math.round(
                  cart.reduce((a, b) => a + b.price * b.quantity, 0) * 100
                ) / 100}
              </TotalPrice>
            </CheckoutButton>
          </CheckoutContainer>
        </Down>
        <Line />
      </RestDetail>
    </div>
  );
}

export default RestaurantDetail;

import React, { useEffect, useState } from "react";
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
  Cuisine,
  Down,
  From,
  Line,
  Name,
  PlusMinusButton,
  Product,
  ProductContent,
  ProductImg,
  Products,
  RestDetail,
  Text,
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
import { restaurantAPI } from "../../api/restaurant";
import { productsAPI } from "../../api/products";

function RestaurantDetail() {
  let { push, back } = useRouter();
  const router = useRouter();
  const query = Object.values(router)[2];
  const [myRestaurant, setMyRestaurant] = useState();
  const [products, setProducts] = useState();

  const cart = useSelector((state) => state.basketSlice.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    productsAPI.then((res) => {
      setProducts(
        res.data.products.filter(
          (item) => item.restaurant == myRestaurant?.name
        )
      );
    });
  }, []);

  const getData = () => {
    restaurantAPI.then((res) => {
      setMyRestaurant(
        res.data.restaurant.find((item) => item.slug == query.name)
      );
    });

    productsAPI.then((res) => {
      setProducts(
        res.data.products.filter((item) => item.restaurant == myRestaurant.name)
      );
    });
  };

  // const products = product.filter(
  //   (item) => item.restaurant == myRestaurant.name
  // );

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
          <img
            src={myRestaurant?.img}
            alt={myRestaurant?.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              maxHeight: 400,
              minHeight: "none",
              boreder: "1px solid black",
            }}
          />
        </Cover>
        <CoverDetail>
          <CoverDetailLeft>
            <Name>{myRestaurant?.name}</Name>
            <Text>{myRestaurant?.address}</Text>
          </CoverDetailLeft>
          <CoverDetailRight>
            <Cuisine>
              <Text style={{ fontSize: 18 }}>Cuisine</Text>
              <Text>{myRestaurant?.categories}</Text>
            </Cuisine>
            <Buttons>
              <ButtonDiv
                style={{
                  backgroundColor: "white",
                  color: "#d63626",
                }}
              >
                {`${myRestaurant?.deliveryPrice} $ Delivery`}
              </ButtonDiv>
              <ButtonDiv onClick={() => back()}>Go Back</ButtonDiv>
            </Buttons>
          </CoverDetailRight>
        </CoverDetail>
        <Down>
          <Products>
            <Name style={{ fontSize: 25, padding: 30 }}>Products</Name>
            {products?.map((item) => (
              <Product key={item.id}>
                <ProductImg src={item.img} alt={item.name} />
                <ProductContent>
                  <h1 style={{ fontSize: 18, color: "#4f4f4f" }}>
                    {item.name}
                  </h1>
                  <p style={{ fontSize: 14, color: "#828282" }}>
                    {item.description}
                  </p>
                </ProductContent>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "row",
                    width: 120,
                    background: "green",
                  }}
                >
                  <div
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <p style={{ background: "yellow" }}>From</p> &nbsp;
                    <p style={{ fontWeight: "bold", background: "blue" }}>
                      ${item.price}
                    </p>
                  </div>
                </div>
                <Button
                  variant="contained"
                  onClick={() => addProduct(item)}
                  sx={{
                    background: "#6fcf97",
                    width: "10px",
                    height: "60px",
                    borderRadius: "50%",
                  }}
                >
                  +
                </Button>
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
                        ${(item.price * item.quantity) / 1.0}
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
                <div
                  style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                    display: "flex",
                    height: "100%",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "#bdbdbd",
                  }}
                >
                  <GrBasket size={150} style={{ color: "red" }} />
                  <p style={{ fontWeight: 500, fontSize: 40 }}>
                    Opps! <br></br>Basket empty
                  </p>
                </div>
              )}
            </Checkout>
            <CheckoutButton
              onClick={() => push("/user?page=basket")}
              style={{ backgroundColor: cart.length ? "#d63626" : "#bdbdbd" }}
            >
              Checkout
              <div
                style={{
                  width: 135,
                  height: 43,
                  borderRadius: 100,
                  backgroundColor: "#fff",
                  color: cart.length ? "red" : "#bdbdbd",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                ${cart.reduce((a, b) => a + b.price * b.quantity, 0)}
              </div>
            </CheckoutButton>
          </CheckoutContainer>
        </Down>
        <Line />
      </RestDetail>
    </div>
  );
}

export const getServerSideProps = (context) => {
  return { props: { context } };
};

export default RestaurantDetail;

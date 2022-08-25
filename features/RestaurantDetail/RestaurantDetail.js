import React from "react";
import {
  BasketHeader,
  BasketProduct,
  BasketProductContent,
  ButtonDiv,
  Checkout,
  CheckoutButton,
  Counter,
  Cover,
  CoverDetail,
  CoverDetailLeft,
  CoverDetailRight,
  Cuisine,
  Down,
  Line,
  Name,
  PlusMinusButton,
  Product,
  ProductContent,
  Products,
  RestDetail,
  Text,
} from "./RestaurantDetail.styled";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { MdOutlineShoppingBasket, MdOutlineDeleteSweep } from "react-icons/md";
import { addBasket } from "../../store/slice/basketSlice";

function RestaurantDetail(props) {
  let { query } = useRouter();

  const product = useSelector((state) => state.productSlice.data);
  const restaurant = useSelector((state) => state.restaurantSlice.data);
  const dispatch = useDispatch();

  const myRestaurant = restaurant.filter((item) => item.slug == query.name)[0];
  const products = product.filter(
    (item) => item.restaurant == myRestaurant.name
  );
  // const [myRestaurant, setMyRestaurant] = useState();
  // const myRestaurant = useSelector(
  //   (state) => state.restaurantSlice.myRestaurant
  // );
  // const selectedProducts = useSelector(
  //   (state) => state.productSlice.selectedProducts
  // );

  return (
    <div>
      <RestDetail>
        <Cover>
          <img
            src={myRestaurant.img}
            alt={myRestaurant.name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Cover>
        <CoverDetail>
          <CoverDetailLeft>
            <Name>{myRestaurant.name}</Name>
            <Text>{myRestaurant.address}</Text>
          </CoverDetailLeft>
          <CoverDetailRight>
            <Cuisine>
              <Text style={{ fontSize: 18 }}>Cuisine</Text>
              <Text>{myRestaurant.categories}</Text>
            </Cuisine>
            <ButtonDiv
              style={{ backgroundColor: "white", color: "#d63626" }}
            >{`${myRestaurant.deliveryPrice} $ Delivery`}</ButtonDiv>
            <ButtonDiv onClick={() => back()}>Go Back</ButtonDiv>
          </CoverDetailRight>
        </CoverDetail>
        <Down>
          <Products>
            <Name style={{ fontSize: 25, padding: 30 }}>Products</Name>
            {products.map((item) => (
              <Product key={item.id}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ objectFit: "contain", width: "100%" }}
                />
                <ProductContent>
                  <h1 style={{ fontSize: 18, color: "#4f4f4f" }}>
                    {item.name}
                  </h1>
                  <p style={{ fontSize: 14, color: "#828282" }}>
                    {item.description}
                  </p>
                </ProductContent>
                <p>
                  From <strong>${item.price}</strong>
                </p>
                <Button
                  variant="contained"
                  onClick={() => dispatch(addBasket(item))}
                  sx={{
                    background: "#6fcf97",
                    width: "40px",
                    height: "40px",
                    // borderRadius: "50%",
                  }}
                >
                  +
                </Button>
              </Product>
            ))}
          </Products>
          <div>
            <Checkout>
              <BasketHeader>
                <MdOutlineShoppingBasket size={30} /> 3 items
              </BasketHeader>
              {products.map((item) => (
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
                      {item.price}
                    </p>
                  </BasketProductContent>
                  <Counter>
                    <PlusMinusButton>+</PlusMinusButton>
                    <p style={{ margin: 0, padding: 0 }}>2</p>
                    <PlusMinusButton>-</PlusMinusButton>
                  </Counter>
                  <MdOutlineDeleteSweep
                    size={27}
                    color="#BDBDBD"
                    style={{
                      top: 0,
                      bottom: 100,
                      width: 50,
                      position: "relative",
                    }}
                  />
                </BasketProduct>
              ))}
            </Checkout>
            <CheckoutButton>
              Checkout
              <div
                style={{
                  width: 135,
                  height: 43,
                  borderRadius: 100,
                  backgroundColor: "#fff",
                  color: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                $37.4
              </div>
            </CheckoutButton>
          </div>
        </Down>
        <Line />
      </RestDetail>
    </div>
  );
}

export default RestaurantDetail;

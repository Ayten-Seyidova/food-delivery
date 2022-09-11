import {
  BasketDiv,
  Checkout,
  CheckoutButton,
  BasketHeader,
} from "./BasketContainer.styled";
import { MdOutlineDeleteSweep, MdOutlineShoppingBasket } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  BasketProduct,
  BasketProductContent,
  Counter,
  PlusMinusButton,
} from "../../RestaurantDetail/RestaurantDetail.styled";
import { basketCreateAPI, basketDeleteAPI } from "../../../api/basket";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../../store/slice/basketSlice";

const BasketContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.basketSlice.cart);

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
    <BasketDiv>
      <h1 style={{ fontWeight: 600, fontSize: 30, color: "#4F4F4F" }}>
        Basket
      </h1>
      <div>
        <BasketHeader>
          <MdOutlineShoppingBasket size={30} /> {cart.length} items
        </BasketHeader>
        <Checkout>
          {cart.map((item) => (
            <BasketProduct key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                style={{ width: 45, height: 45, objectFit: "contain" }}
              />
              <BasketProductContent>
                <h1 style={{ fontSize: 16, color: "#4f4f4f" }}>{item.name}</h1>
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
            $
            {Math.round(
              cart.reduce((a, b) => a + b.price * b.quantity, 0) * 100
            ) / 100}
          </div>
        </CheckoutButton>
      </div>
    </BasketDiv>
  );
};

export default BasketContainer;

import {
  BasketDiv,
  Checkout,
  CheckoutButton,
  BasketHeader,
} from "./BasketContainer.styled";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { useSelector } from "react-redux";

const BasketContainer = () => {
  const cart = useSelector((state) => state.basketSlice.cart);
  return (
    <BasketDiv>
      <h1>Basket</h1>
      <div>
        <Checkout>
          <BasketHeader>
            <MdOutlineShoppingBasket size={30} /> {cart.length} items
          </BasketHeader>
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
                  ${(item.price * item.quantity) / 1.0}
                </p>
              </BasketProductContent>
              <Counter>
                <PlusMinusButton
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </PlusMinusButton>
                <p style={{ margin: 0, padding: 0 }}>{item.quantity}</p>
                <PlusMinusButton
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </PlusMinusButton>
              </Counter>
              <MdOutlineDeleteSweep
                size={27}
                color="#BDBDBD"
                onClick={() => dispatch(removeItem(item.id))}
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
            ${cart.reduce((a, b) => a + b.price * b.quantity, 0)}
          </div>
        </CheckoutButton>
      </div>
    </BasketDiv>
  );
};

export default BasketContainer;

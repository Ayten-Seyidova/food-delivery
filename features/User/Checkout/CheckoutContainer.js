import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ordersCreateAPI } from "../../../api/orders";
import { checkout, completedOrder } from "../../../store/slice/basketSlice";
import {
  CheckoutContainerDiv,
  CheckoutDiv,
  OrderContainer,
  OrderLine,
  OrderName,
  OrdersDiv,
  PageName,
} from "./CheckoutContainer.styled";

const Basic = (props) => {
  return (
    <div>
      <Formik
        initialValues={props.user}
        validate={(values) => {
          const errors = {};
          if (!values.address) {
            errors.address = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values) => {
          ordersCreateAPI(values)
            .then((res) => props.dispatch(checkout(values)))
            .catch(() => console.log("error"));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="checkout-form">
            <span>
              <label htmlFor="address">Delivery Address</label>
              <input
                type="address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              {errors.address && touched.address && errors.address}
            </span>
            <span>
              <label htmlFor="contact">Contact Number</label>
              <input
                type="contact"
                name="contact"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.contact}
              />
              {errors.contact && touched.contact && errors.contact}
            </span>
            <span>
              <label htmlFor="payment">Payment Method</label>
              <span>
                <span>
                  <input
                    id="door"
                    type="radio"
                    name="payment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="pay at the door"
                  />
                  <label for="door">pay at the door</label>
                </span>
                <span>
                  <input
                    id="card"
                    name="payment"
                    type="radio"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="pay at the door by credit card"
                  />
                  <label for="card">pay at the door by credit card</label>
                </span>
                {errors.payment && touched.payment && errors.payment}
              </span>
            </span>
            <button type="submit">Checkout</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const CheckoutContainer = () => {
  const cart = useSelector((state) => state.basketSlice.cart);
  const user = useSelector((state) => state.loginSlice.user);
  const dispatch = useDispatch();
  return (
    <>
      <CheckoutContainerDiv>
        <CheckoutDiv>
          <PageName>Checkout</PageName>
          <Basic user={user} dispatch={dispatch} />
        </CheckoutDiv>
        <OrdersDiv>
          <OrderName>Your Order</OrderName>
          <OrderContainer>
            {cart.map((item) => (
              <OrderLine key={item.id}>
                <p style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ fontWeight: 500, fontSize: 18 }}>
                    {item.quantity}
                  </p>
                  &nbsp;
                  <p>x</p>&nbsp;
                  <p>{item.name}</p>
                </p>
                <p>${item.price * item.quantity}</p>
              </OrderLine>
            ))}
          </OrderContainer>
          <hr />
          <OrderLine
            style={{
              fontSize: 18,
              fontWeight: 500,
              width: "90%",
              gridTemplateColumns: "75% 25%",
            }}
          >
            <p>Total</p>
            <p>
              $
              {Math.round(
                cart.reduce((a, b) => a + b.price * b.quantity, 0) * 100
              ) / 100}
            </p>
          </OrderLine>
        </OrdersDiv>
      </CheckoutContainerDiv>
    </>
  );
};

export default CheckoutContainer;

import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout, completedOrder } from "../../../store/slice/basketSlice";
import {
  CheckoutContainerDiv,
  CheckoutDiv,
  OrdersDiv,
} from "./CheckoutContainer.styled";

const Basic = (props) => {
  return (
    <div>
      <Formik
        initialValues={props.user}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
        onSubmit={(values) => {
          props.dispatch(checkout(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          // isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="address">Delivery Address</label>
            <input
              type="address"
              name="address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />
            {errors.address && touched.address && errors.address}
            <label htmlFor="contact">Contact Number</label>
            <input
              type="contact"
              name="contact"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.contact}
            />
            {errors.contact && touched.contact && errors.contact}
            <label htmlFor="payment">Payment Method</label>
            <input
              type="radio"
              name="payment"
              onChange={handleChange}
              onBlur={handleBlur}
              value="pay at the door"
            />
            pay at the door
            <input
              type="radio"
              name="payment"
              onChange={handleChange}
              onBlur={handleBlur}
              value="pay at the door by credit card"
            />
            pay at the door by credit card
            {errors.payment && touched.payment && errors.payment}
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
          <h1>Checkout</h1>
          <Basic user={user} dispatch={dispatch} />
        </CheckoutDiv>
        <OrdersDiv>
          <h1>Your Order</h1>
          {cart.map((item) => (
            <div key={item.id}>
              {item.quantity} X {item.name} - ${item.price * item.quantity}
            </div>
          ))}
          Total: ${cart.reduce((a, b) => a + b.price * b.quantity, 0)}
        </OrdersDiv>
      </CheckoutContainerDiv>
    </>
  );
};

export default CheckoutContainer;

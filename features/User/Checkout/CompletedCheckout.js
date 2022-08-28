import { CompletedCheckoutDiv, OrderText } from "./CheckoutContainer.styled";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const CompletedCheckout = () => (
  <CompletedCheckoutDiv>
    <IoCheckmarkCircleSharp size={200} color="#6FCF97" />
    <OrderText>Your order has been received</OrderText>
  </CompletedCheckoutDiv>
);

export default CompletedCheckout;

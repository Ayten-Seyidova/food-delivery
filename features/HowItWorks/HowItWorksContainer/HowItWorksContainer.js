import "./HowItWorksContainer.styled";
import {
  Background,
  Front,
  HIW,
  HIWContent,
  HIWHeader,
  Multimedia,
} from "./HowItWorksContainer.styled";
import deliveryGuy from "../../../public/Image/components/delivery-guy.svg";

const HowContainerPage = () => {
  return (
    <HIW>
      <HIWHeader>How it works</HIWHeader>
      <HIWContent>
        Delivery may be extended during sale periods. Please refer to the
        checkout page for an updated estimate for your location. Kindly note
        that once you have placed an order, it is no longer possible to modify
        your order. Taxes and duties are included in all product prices.It is
        possible to place an order with shipment to a different address than
        your home or billing address when paying with a credit card. Please note
        that Klarna payments require that your order is shipped to your
        registered home address.
      </HIWContent>
      <Multimedia>
        <Background></Background>
        <Front src={deliveryGuy} />
      </Multimedia>
    </HIW>
  );
};

export default HowContainerPage;

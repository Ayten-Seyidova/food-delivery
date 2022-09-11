import Head from "next/head";
import UserContainerPage from "../../features/User/UserContainer/UserContainer";
import Layout from "../../shared/components/Layout";
import { useRouter } from "next/router";
import BasketContainer from "../../features/User//Basket/BasketContainer";
import ErrorPage from "../404/index";
import ProfileContainer from "../../features/User/Profile/ProfileContainer";
import OrdersContainer from "../../features/User/Orders/OrdersContainer";
import CheckoutContainer from "../../features/User/Checkout/CheckoutContainer";
import { useDispatch, useSelector } from "react-redux";
import CompletedCheckout from "../../features/User/Checkout/CompletedCheckout";
import { setLogout } from "../../store/slice/loginSlice";

const UserPage = () => {
  const receivedOrder = useSelector((state) => state.basketSlice.cart.length);
  const dispatch = useDispatch();
  const { query } = useRouter();
  let component = {};
  const renderPage = () => {
    switch (query.page) {
      case undefined:
        return (component = <ProfileContainer />);
      case "basket":
        return (component = <BasketContainer />);
      case "profile":
        return (component = <ProfileContainer />);
      case "orders":
        return (component = <OrdersContainer />);
      case "checkout":
        return (component = receivedOrder ? (
          <CheckoutContainer />
        ) : (
          <CheckoutContainer />
        ));
      case "logout":
        dispatch(setLogout());
      default:
        return (component = <ErrorPage />);
    }
  };
  return (
    <Layout>
      <Head>
        <title> Profile | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <UserContainerPage component={renderPage()} />
    </Layout>
  );
};

export default UserPage;

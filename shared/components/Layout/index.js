import { Fragment } from "react";
import { Header } from "../../containers/Header/header";
import { Footer } from "../../containers/Footer/footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default Layout;

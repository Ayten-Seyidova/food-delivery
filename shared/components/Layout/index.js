import { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Header } from "../../containers/Header/header";
import { Footer } from "../../containers/Footer/footer";


const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <main>
                <Container>{props.children}</Container>
            </main>
            <Footer />
        </Fragment>
    );
}


export default Layout
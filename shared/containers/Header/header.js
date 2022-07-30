import { Navbar, Container, Nav } from "react-bootstrap";
import Link from 'next/link';

export const Header = () => {

  return (
    <header>
      <Navbar className="postion-sticky sticky-top">
        <Container>
          <Navbar.Brand onClick={() => push("/")}>Foody Delivery</Navbar.Brand>
          <Nav className="me-auto">
            <li className="nav-link">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/restaurants">
                <a>Restaurants</a>
              </Link>
            </li>
            <li className="nav-link">

              <Link href="/about">
                <a>About us</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/how-it-works">
                <a>How it works</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/faqs">
                <a>FAQs</a>
              </Link>
            </li>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { MdOutlineShoppingBasket } from "react-icons/md";

import az from "../../../public/Image/flag/az.svg";
import en from "../../../public/Image/flag/en.svg";
import fr from "../../../public/Image/flag/fr.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../../../pages/api/login";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { getUserData } from "../../../store/slice/loginSlice";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function BasicMenu() {
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (props) => {
    setAnchorEl(null);
    push(props);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BsPersonCircle size={43} color="darkred" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("/user")}>Profile</MenuItem>
        <MenuItem onClick={() => handleClose("/user?page=basket")}>
          Your Basket
        </MenuItem>
        <MenuItem onClick={() => handleClose("/user?page=orders")}>
          Your Orders
        </MenuItem>
        <MenuItem onClick={() => handleClose("/user?page=checkout")}>
          Checkout
        </MenuItem>
        <MenuItem onClick={() => handleClose("/user")}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 100}`;
};

const lngs = {
  az: { nativeName: "Az" },
  en: { nativeName: "En" },
  fr: { nativeName: "Fr" },
};

const flags = {
  az,
  en,
  fr,
};

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = React.useState();
  const { push, pathname } = useRouter();

  const dispatch = useDispatch();
  const userName = useSelector((state) => state.loginSlice.user.userName);

  React.useEffect(() => {
    getUserName();
  }, []);

  const getUserName = () => {
    loginAPI.then((res) => {
      res.data.login.map((item) => {
        if (item.userName == userName) {
          setUser(item.fullName);
          dispatch(getUserData(item));
        }
      });
    });
  };

  return (
    <header className="header-section">
      <Navbar className="position-sticky sticky-top">
        <Container>
          <Navbar.Brand>
            <img
              src={require(`../../../public/Image/logo/logo-black.svg`)}
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto menu-section">
            <li className="nav-link">
              <Link href="/">
                <a
                  style={
                    pathname == "/"
                      ? {
                          color: "#D63626",
                          fontWeight: 700,
                          fontSize: 18,
                        }
                      : {}
                  }
                >
                  {t("home")}
                </a>
              </Link>
            </li>
            <li className="nav-link active">
              <Link href="/restaurants">
                <a
                  style={
                    pathname == "/restaurants"
                      ? {
                          color: "#D63626",
                          fontWeight: 700,
                          fontSize: 18,
                        }
                      : {}
                  }
                >
                  {t("restaurants")}
                </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/about">
                <a
                  style={
                    pathname == "/about"
                      ? {
                          color: "#D63626",
                          fontWeight: 700,
                          fontSize: 18,
                        }
                      : {}
                  }
                >
                  {t("about us")}
                </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/how-it-works">
                <a
                  style={
                    pathname == "/how-it-works"
                      ? {
                          color: "#D63626",
                          fontWeight: 700,
                          fontSize: 18,
                        }
                      : {}
                  }
                >
                  {t("how it works")}
                </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/faqs">
                <a
                  style={
                    pathname == "/faqs"
                      ? {
                          color: "#D63626",
                          fontWeight: 700,
                          fontSize: 18,
                        }
                      : {}
                  }
                >
                  {t("faqs")}
                </a>
              </Link>
            </li>
          </Nav>

          <div className="language-section">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                id="dropdownMenuButton1"
                aria-expanded="false"
              >
                <Image
                  loader={myLoader}
                  src={flags[i18n.resolvedLanguage]}
                  alt="lang"
                  width={41}
                  height={41}
                />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {Object.keys(lngs).map((lng) => (
                  <li key={lng}>
                    <div
                      className="dropdown-item"
                      type="submit"
                      onClick={() => i18n.changeLanguage(lng)}
                      disabled={i18n.resolvedLanguage === lng}
                    >
                      <Image
                        loader={myLoader}
                        src={flags[lng]}
                        alt={flags[lng]}
                        width={41}
                        height={41}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <MdOutlineShoppingBasket
              style={{
                background: "#EB5757",
                borderRadius: "50%",
                padding: 2,
                color: "white",
                width: 43,
                height: "auto",
              }}
              onMouseOver={({ target }) => (target.style.cursor = "pointer")}
              onClick={() => push("/user?page=basket")}
            />
            {user ? (
              <div className="avatar">
                <Stack direction="row" spacing={2}>
                  <BasicMenu />
                  <h5 className="user-name" onClick={() => push("/user")}>
                    {user}
                  </h5>
                </Stack>
              </div>
            ) : (
              <div className="sign-button">
                <Link href="/login">
                  <a>{t("signup")}</a>
                </Link>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

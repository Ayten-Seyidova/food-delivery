import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { MdOutlineShoppingBasket } from "react-icons/md";
import vector from "../../../public/Image/components/vector.svg";
import az from "../../../public/Image/flag/az.svg";
import en from "../../../public/Image/flag/en.svg";
import fr from "../../../public/Image/flag/fr.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../../../api/login";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { getUserData } from "../../../store/slice/loginSlice";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { t } from "i18next";
import { Menu, MenuItem } from "@mui/material";
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const menu = [
  { id: 0, href: "/", t: "home", mandatory: true },
  { id: 1, href: "/restaurants", t: "restaurants", mandatory: true },
  { id: 2, href: "/user?page=profile", t: "profile", mandatory: false },
  { id: 3, href: "/user?page=basket", t: "basket", mandatory: false },
  { id: 4, href: "/user?page=orders", t: "orders", mandatory: false },
  { id: 5, href: "/user?page=checkout", t: "checkout", mandatory: false },
  { id: 6, href: "/about", t: "about us", mandatory: true },
  { id: 7, href: "/how-it-works", t: "how it works", mandatory: true },
  { id: 8, href: "/faqs", t: "faqs", mandatory: true },
  { id: 9, href: "/user?page=logout", t: "logout", mandatory: false },
];

export default function TemporaryDrawer({ user }) {
  const { push, pathname } = useRouter();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        paddingTop: 10,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
        <div className="container">
          <Link href="/login">
            <a>{t("signup")}</a>
          </Link>
        </div>
      )}
      <List style={{ marginTop: 10 }}>
        {menu.map((text, index) => (
          <ListItem
            key={text.id}
            disablePadding
            style={{
              display: text.mandatory ? "block" : user ? "block" : "none",
            }}
          >
            <ListItemButton>
              <p
                style={{
                  fontWeight: 500,
                  fontSize: 18,
                  color: pathname == text.href ? "#D63626" : "#828282",
                }}
                onClick={() => push(text.href)}
              >
                {t(text.t)}
              </p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <LogoContainer>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src={vector} alt="vector" className="vector" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </LogoContainer>
  );
}

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

  const menu = [
    { id: 0, href: "/", t: "home" },
    { id: 1, href: "/restaurants", t: "restaurants" },
    { id: 2, href: "/about", t: "about us" },
    { id: 3, href: "/how-it-works", t: "how it works" },
    { id: 4, href: "/faqs", t: "faqs" },
    { id: 5, href: "/logout", t: "logout" },
  ];

  return (
    <header className="header-section">
      <Navbar className="position-sticky sticky-top">
        <Container>
          <div className="logo-container">
            <TemporaryDrawer user={user} />
            <Navbar.Brand>
              <img
                src={require(`../../../public/Image/logo/logo-black.svg`)}
                alt="logo"
                onClick={() => push("/")}
                onMouseOver={({ target }) => (target.style.cursor = "pointer")}
              />
            </Navbar.Brand>
          </div>
          <Nav className="me-auto menu-section" id="navbar">
            {menu.map((item) => (
              <li className="nav-link" key={item.id}>
                <Link href={item.href}>
                  <a
                    style={
                      pathname == item.href
                        ? {
                            color: "#D63626",
                            fontWeight: 700,
                            fontSize: 18,
                          }
                        : {}
                    }
                  >
                    {t(item.t)}
                  </a>
                </Link>
              </li>
            ))}
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

            <div id="navbar">
              {user ? (
                <div className="avatar">
                  <MdOutlineShoppingBasket
                    style={{
                      background: "#EB5757",
                      borderRadius: "50%",
                      padding: 2,
                      color: "white",
                      width: 55,
                      height: "auto",
                    }}
                    onMouseOver={({ target }) =>
                      (target.style.cursor = "pointer")
                    }
                    onClick={() => push("/user?page=basket")}
                    id="navbar"
                  />
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
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

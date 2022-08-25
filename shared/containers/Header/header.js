import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import az from "../../../public/Image/flag/az.svg";
import en from "../../../public/Image/flag/en.svg";
import fr from "../../../public/Image/flag/fr.svg";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../../../pages/api/login";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { getUserData } from "../../../store/slice/loginSlice";

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
                <a>{t("home")}</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/restaurants">
                <a>{t("restaurants")}</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/about">
                <a>{t("about us")}</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/how-it-works">
                <a>{t("how it works")}</a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/faqs">
                <a>{t("faqs")}</a>
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
            {user ? (
              <div className="avatar">
                <Stack direction="row" spacing={2}>
                  <BsPersonCircle size={43} color="darkred" />

                  <h5>
                    <Link href="/user">{user}</Link>
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

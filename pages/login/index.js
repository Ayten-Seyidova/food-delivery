import Head from "next/head";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import LoginContainerPage from "../../features/Login/LoginContainer/LoginContainer";
import { DropdownBtn, DropdownItem, DropdownMenu, HeaderDiv, LoginSection } from "./Login.styled";

import az from "../../public/Image/flag/az.svg";
import en from "../../public/Image/flag/en.svg";
import fr from "../../public/Image/flag/fr.svg";

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 100}`
}

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

const LoginPage = () => {
    const { t, i18n } = useTranslation();

    return (
        <LoginSection>
            <Head>
                <title> {t("login")} | Foody Delivery</title>
                <meta name="description" content="Foody delivery app" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <header>
                <HeaderDiv>
                    <img src={require('../../public/Image/logo/login-logo.svg')} alt="logo" />
                    <div className="dropdown">
                        <DropdownBtn
                            className="btn dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            id="dropdownMenuButton1"
                            aria-expanded="false">
                            <Image
                                loader={myLoader}
                                src={flags[i18n.resolvedLanguage]}
                                alt="lang"
                                width={41}
                                height={41}
                            />
                        </DropdownBtn>
                        <DropdownMenu className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {Object.keys(lngs).map((lng) => (
                                <DropdownItem key={lng}>
                                    <div className="dropdown-item"
                                        type="submit"
                                        onClick={() => i18n.changeLanguage(lng)}
                                        disabled={i18n.resolvedLanguage === lng}
                                    >
                                        <Image loader={myLoader} src={flags[lng]} alt={flags[lng]}
                                            width={41}
                                            height={41} />
                                    </div>
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </div>
                </HeaderDiv>
            </header>
            <main>
                <LoginContainerPage />
            </main>
        </LoginSection>
    )
}

export default LoginPage;
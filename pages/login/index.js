import Head from "next/head";
import { useTranslation } from "react-i18next";
import LoginContainerPage from "../../features/Login/LoginContainer/LoginContainer";
import { LoginSection } from "./Login.styled";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <LoginSection>
      <Head>
        <title> {t("login")} | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LoginContainerPage />
    </LoginSection>
  );
};

export default LoginPage;

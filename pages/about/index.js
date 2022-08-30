import Head from "next/head";
import AboutContainerPage from "../../features/About/AboutContainer/AboutContainer";
import Layout from "../../shared/components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title> About us | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <AboutContainerPage />
    </Layout>
  );
};

export default AboutPage;

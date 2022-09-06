import Head from "next/head";
import { useRouter } from "next/router";
import HowContainerPage from "../../features/HowItWorks/HowItWorksContainer/HowItWorksContainer";
import Layout from "../../shared/components/Layout";

const HowPage = () => {
  return (
    <Layout>
      <Head>
        <title> How it works | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HowContainerPage />
    </Layout>
  );
};

export default HowPage;

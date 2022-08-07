import Head from "next/head";
import FaqContainerPage from "../../features/Faq/FaqContainer/FaqContainer";
import Layout from "../../shared/components/Layout";

const FaqPage = () => {
  return (
    <Layout>
      <Head>
        <title> FAQ | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <FaqContainerPage />
    </Layout>
  );
};

export default FaqPage;

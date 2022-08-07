import Head from "next/head";
import ErrorContainerPage from "../../features/404/ErrorContainer/ErrorContainer";
import Layout from "../../shared/components/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <Head>
        <title> Page is not found | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ErrorContainerPage />
    </Layout>
  );
};

export default ErrorPage;

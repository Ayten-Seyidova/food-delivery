import Head from "next/head";
import RestaurantDetail from "../../features/RestaurantDetail/RestaurantDetail";
import Layout from "../../shared/components/Layout";

const DetailPage = () => {
  return (
    <Layout>
      <Head>
        <title> Restaurants | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <RestaurantDetail />
    </Layout>
  );
};

export default DetailPage;

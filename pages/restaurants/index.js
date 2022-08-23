import Head from "next/head";
import { useRouter } from "next/router";
import { useParams } from "react-router-dom";
import RestaurantContainerPage from "../../features/Restaurant/RestaurantContainer/RestaurantContainer";
import Layout from "../../shared/components/Layout";

const RestaurantPage = () => {
  return (
    <Layout>
      <Head>
        <title> Restaurants | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <RestaurantContainerPage />
    </Layout>
  );
};

export default RestaurantPage;

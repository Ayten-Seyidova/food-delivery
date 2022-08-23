import Head from "next/head";
import { useRouter } from "next/router";
import { useLocation, useParams } from "react-router-dom";
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
      {/* <h1>Detail {route.query.restaurant}</h1>
      <button onClick={() => route.push("/restaurants")}>Go home</button> */}
    </Layout>
  );
};

export default DetailPage;

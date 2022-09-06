import Head from "next/head";
import { productsAPI } from "../../api/products";
import { restaurantAPI, restaurantGetAPI } from "../../api/restaurant";
import RestaurantDetail from "../../features/RestaurantDetail/RestaurantDetail";
import Layout from "../../shared/components/Layout";

const DetailPage = ({ products }) => {
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

export async function getServerSideProps(context) {
  const slug = context.query.name;
  
  // const products = await restaurantAPI.then((res) => {
  //   return res;
  // });
  // console.log(products)
  return { props: { } };
}

export default DetailPage;

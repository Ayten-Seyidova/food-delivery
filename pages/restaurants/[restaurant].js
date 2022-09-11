import Head from "next/head";
import { productsGetAPI } from "../../api/products";
import { restaurantGetAPI } from "../../api/restaurant";
import RestaurantDetail from "../../features/RestaurantDetail/RestaurantDetail";
import Layout from "../../shared/components/Layout";

const DetailPage = (props) => {
  return (
    <Layout>
      <Head>
        <title> Restaurants | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <RestaurantDetail data={props} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const slug = context.query.name;
  let restaurant = await restaurantGetAPI(slug);
  let products = await productsGetAPI(slug);

  return {
    props: {
      restaurant: restaurant.data.restaurant,
      products: products.data.products,
    },
  };
}

export default DetailPage;

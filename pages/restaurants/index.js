import Head from "next/head";
import { categoryAPI } from "../../api/category";
import { restaurantAPI } from "../../api/restaurant";
import RestaurantContainerPage from "../../features/Restaurant/RestaurantContainer/RestaurantContainer";
import Layout from "../../shared/components/Layout";

const RestaurantPage = (props) => {
  return (
    <Layout>
      <Head>
        <title> Restaurants | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <RestaurantContainerPage data={props} />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const restaurants = await restaurantAPI.then((res) => {
    return res;
  });

  const categories = await categoryAPI.then((res) => {
    return res;
  });

  return {
    props: {
      restaurants: restaurants.data.restaurant,
      categories: categories.data.category,
    },
  };
};

export default RestaurantPage;

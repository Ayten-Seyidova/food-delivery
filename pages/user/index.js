import Head from "next/head";
import UserContainerPage from "../../features/User/UserContainer/UserContainer";
import Layout from "../../shared/components/Layout";

const UserPage = () => {
  return (
    <Layout>
      <Head>
        <title> Profile | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <UserContainerPage />
    </Layout>
  );
};

export default UserPage;

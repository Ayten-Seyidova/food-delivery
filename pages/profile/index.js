import Head from "next/head";
import ProfileContainer from "../../features/User/Profile/ProfileContainer";
import Layout from "../../shared/components/Layout";

const Profile = () => {
  return (
    <Layout>
      <Head>
        <title> Profile | Foody Delivery</title>
        <meta name="description" content="Foody delivery app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ProfileContainer />
    </Layout>
  );
};

export default Profile;

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../shared/components/Layout";
import HomeContainerPage from "../features/Home/HomeContainer/HomeContainer";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>Home | Foody Delivery</title>
          <meta name="description" content="Foody delivery app" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <HomeContainerPage />
      </Layout>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const response = await axios("http://www.omdbapi.com/?apikey=a407a7b3&s=movie")
//   return {
//     props: {
//       movies: response.data.Search
//     }
//   }
// }

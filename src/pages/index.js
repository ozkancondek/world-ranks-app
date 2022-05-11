import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  console.log(countries);
  return <Layout>main</Layout>;
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v2/regionalbloc/eu");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};

import CountriesTable from "../components/CountriesTable/CountriesTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <Layout>
      <div className={styles.counts}> Found {countries.length} countries</div>
      <SearchInput placeholder="Search by name" />
      <CountriesTable countries={countries} />
    </Layout>
  );
}

// This function gets called at build time on server-side.
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v2/regionalbloc/eu");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};

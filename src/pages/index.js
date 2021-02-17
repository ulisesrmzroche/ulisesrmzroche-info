import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppFooter from "@/components/AppFooter"
import InfoCard from "@/components/InfoCard"

export default function Home() {
  return (
    <div id="HomePage">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"></link>
      </Head>
      <main className={styles.main}>
        <InfoCard />
        <AppFooter />
      </main>
    </div>
  );
}

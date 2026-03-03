import React, { useEffect } from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

const REDIRECT_URL = "https://hunny.rubydog.jp";

export default function Home(): JSX.Element {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return (
    <Layout title={`Home`} description="ハニー🍯ホームページ<head />">
      <Head>
        <meta http-equiv="refresh" content={`0; url=${REDIRECT_URL}`} />
      </Head>
      <main className={styles.movedPage}>
        <h1>引越ししました</h1>
        <p>
          自動的にリダイレクトされない場合はこちら
        </p>
        <a
          className={styles.movedLink}
          href={REDIRECT_URL}
        >
          hunny.rubydog.jp
        </a>
      </main>
    </Layout>
  );
}

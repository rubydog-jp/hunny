import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  return (
    <Layout title={`Home`} description="ハニー🍯ホームページ<head />">
      <main className={styles.movedPage}>
        <h1>引越ししました</h1>
        <p>
          新しいサイトはこちら
        </p>
        <a
          className={styles.movedLink}
          href="https://hunny.rubydog.jp"
        >
          hunny.rubydog.jp
        </a>
      </main>
    </Layout>
  );
}

import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type PR = {
  title: string;
  image: string;
  description: JSX.Element;
};

const prs: PR[] = [
  {
    title: "OSS開発者になろう",
    image: "pr-1.png",
    description: <>気軽に参加できます</>,
  },
  {
    title: "間違えても大丈夫",
    image: "pr-2.png",
    description: <>誰だって最初は初心者！</>,
  },
  {
    title: "参加は簡単",
    image: "pr-3.png",
    description: <>ミニマルな手順で説明！</>,
  },
];

function PRItem({ title, image, description }: PR) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className="img--center">
          <img src={"img/" + image} width="40%" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function PRList(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {prs.map((props, idx) => (
            <PRItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

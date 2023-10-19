import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type PR = {
  image: string;
  title: string;
  description: JSX.Element;
};

const prs: PR[] = [
  {
    image: "pr-1.png",
    title: "OSS開発者になろう",
    description: <>気軽に参加できます</>,
  },
  {
    image: "pr-2.png",
    title: "間違えても大丈夫",
    description: <>誰だって最初は初心者！</>,
  },
  {
    image: "pr-3.png",
    title: "参加は簡単",
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

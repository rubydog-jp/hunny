import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "間違えても大丈夫！",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>初心者でも気軽に参加できます</>,
  },
  {
    title: "OSS開発者になろう！",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>誰だって最初は初心者！</>,
  },
  {
    title: "参加は簡単！",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>必要なのは最低限の手順だけ！</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

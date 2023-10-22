// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/dracula");
const darkCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ハニー🍯",
  tagline: "はじめてのOSS",
  favicon: "img/favicon.png",

  url: "https://rubydog-jp.github.io",
  baseUrl: "/hunny/",

  organizationName: "rubydog-jp",
  projectName: "hunny",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "tutorial",
          routeBasePath: "tutorial",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          path: "news",
          routeBasePath: "news",
          showReadingTime: false,
          blogTitle: "ニュース",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "image",
          src: "img/hunny-oss-logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "チュートリアル",
          },
          { to: "/news", label: "ニュース", position: "left" },
          {
            href: "https://twitter.com/rubydog_jp",
            label: "困ったらXで質問",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "ショートカット",
            items: [
              {
                label: "ホーム画面",
                to: "/",
              },
            ],
          },
          {
            title: "関連リンク",
            items: [
              {
                label: "X(旧Twitter)",
                href: "https://twitter.com/rubydog_jp",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 Rubydog. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

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

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
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
            label: "手順",
          },
          { to: "/blog", label: "ニュース", position: "left" },
          {
            href: "https://github.com/rubydog-jp/hunny",
            label: "GitHub",
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
                label: "Twitter",
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

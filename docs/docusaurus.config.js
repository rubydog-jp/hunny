// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Honey",
  tagline: "はじめてのOSS",
  favicon: "img/favicon.ico",

  url: "https://HoneyOSS.github.io",
  baseUrl: "/",

  organizationName: "HoneyOSS",
  projectName: "docs",

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
          src: "img/honey-oss-logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "参加",
          },
          { to: "/blog", label: "ニュース", position: "left" },
          {
            href: "https://github.com/HoneyOSS/Honey",
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
        copyright: `Copyright © 2023 HoneyOSS. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

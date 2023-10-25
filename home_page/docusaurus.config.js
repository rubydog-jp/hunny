// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// コードブロックは強調のためライトとダークで逆にする
const lightCodeTheme = require("prism-react-renderer/themes/dracula");
const darkCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ハニー🍯",
  tagline: "はじめての共同開発、失敗し放題",
  favicon: "general/favicon.png",

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
          path: "tab_tutorial",
          routeBasePath: "tutorial",
          sidebarPath: require.resolve("./sidebars/tutorial.js"),
        },
        blog: {
          path: "tab_news",
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

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "git",
        path: "tab_git",
        routeBasePath: "git",
        sidebarPath: require.resolve("./sidebars/git.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "develop",
        path: "tab_develop",
        routeBasePath: "develop",
        sidebarPath: require.resolve("./sidebars/develop.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "general/hunny-oss-logo.png",
      navbar: {
        title: "",
        logo: {
          alt: "image",
          src: "general/hunny-oss-logo.png",
        },
        items: [
          {
            position: "left",
            to: "/tutorial/intro",
            label: "チュートリアル",
            activeBaseRegex: `/tutorial/`,
          },
          {
            position: "left",
            to: "/git/index",
            label: "Git知識",
            activeBaseRegex: `/git/`,
          },
          {
            position: "left",
            to: "/develop/index",
            label: "共同開発",
            activeBaseRegex: `/develop/`,
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
              {
                label: "再開/中断",
                to: "/tutorial/q-suspend-restart",
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
              {
                label: "ハニー (確認ページ)",
                href: "https://hunny-viewer.web.app",
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

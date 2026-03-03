// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ハニー🍯",
  tagline: "引越ししました",
  favicon: "general/favicon.png",

  url: "https://old-hunny.rubydog.jp",
  baseUrl: "/",

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
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ハニー🍯",
        items: [],
      },
      footer: {
        style: "dark",
        copyright: `このサイトは hunny.rubydog.jp に引越ししました`,
      },
    }),
};

module.exports = config;

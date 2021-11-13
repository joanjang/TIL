const ROUTES = require("./routes");

const createSidebar = () =>
  ["HTML/CSS", "Javascript", "React", "Vuepress", "Algorithm", "ETC"].map(
    (title) => {
      const children = ROUTES[title.replace(/\//, "").toLowerCase()];
      return {
        title,
        children,
        collapsable: children ? true : false,
      };
    }
  );

module.exports = {
  title: "Today Jieun Learned",
  description: "Today I Learned TIL by vuepress",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],
  base: "/TIL/",
  dest: "build",
  themeConfig: {
    sidebarDepth: 3,
    sidebar: createSidebar(),
    nav: [
      { text: "HOME", link: "/" },
      { text: "TAGS", link: "/tags/" },
      {
        text: "Info",
        items: [
          {
            text: "ABOUT ME",
            items: [
              {
                text: "GitHub",
                link: "https://github.com/je0489/",
              },
              {
                text: "Portfolio",
                link: "https://je0489.github.io/simple-portfolio/",
              },
            ],
          },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: false,
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"));
    },
  },
  plugins: {
    "@vuepress/back-to-top": true,
    "@vuepress/nprogress": true,
    "@vuepress/google-analytics": true,
    "@vuepress/medium-zoom": {
      options: {
        margin: 25,
        background: "#00000080",
      },
    },
  },
};

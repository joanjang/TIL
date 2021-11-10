const ROUTES = require("./routes");

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
    sidebar: [
      {
        title: "HTML/CSS",
        children: ROUTES.htmlcss,
        collapsable: ROUTES.htmlcss ? true : false,
      },
      {
        title: "Javascript",
        children: ROUTES.javascript,
        collapsable: ROUTES.javascript ? true : false,
      },
      {
        title: "React",
        children: ROUTES.react,
        collapsable: ROUTES.react ? true : false,
      },
      {
        title: "Vuepress",
        children: ROUTES.vuepress,
        collapsable: ROUTES.vuepress ? true : false,
      },
      {
        title: "Algorithm",
        children: ROUTES.algorithm,
        collapsable: ROUTES.algorithm ? true : false,
      },
      {
        title: "ETC",
        children: ROUTES.etc,
        collapsable: ROUTES.etc ? true : false,
      },
    ],
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
    lineNumbers: true,
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

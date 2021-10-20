const ROUTES = require("./const");

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
  // base: "/TIL/",
  themeConfig: {
    sidebarDepth: 3,
    sidebar: [
      {
        title: "HTML/CSS",
        children: ROUTES.HTMLCSSList,
        collapsable: ROUTES.HTMLCSSList ? true : false,
      },
      {
        title: "Javascript",
        children: ROUTES.javascript,
        collapsable: ROUTES.javascript ? true : false,
      },
      {
        title: "React",
        children: ROUTES.reactList,
        collapsable: ROUTES.reactList ? true : false,
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
        text: "GitHub",
        link: "https://github.com/je0489/",
      },
    ],
  },
};

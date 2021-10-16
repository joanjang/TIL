let CONST = require("./const");

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
        children: CONST.HTMLCSSList,
        collapsable: CONST.HTMLCSSList ? true : false,
      },
      {
        title: "Javascript",
        children: CONST.jsList,
        collapsable: CONST.jsList ? true : false,
      },
      {
        title: "React",
        children: CONST.reactList,
        collapsable: CONST.reactList ? true : false,
      },
      {
        title: "Vuepress",
        children: CONST.vueList,
        collapsable: CONST.vueList ? true : false,
      },
      {
        title: "Algorithm",
        children: CONST.algorithmList,
        collapsable: CONST.algorithmList ? true : false,
      },
      {
        title: "ETC",
        children: CONST.etcList,
        collapsable: CONST.etcList ? true : false,
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

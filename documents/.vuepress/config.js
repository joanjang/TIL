let CONST = require("./const");

module.exports = {
  title: "Today Jieun Learned",
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
  // dest: "build",
  themeConfig: {
    sidebar: [
      {
        title: "HTML/CSS",
        children: CONST.HTMLCSSList,
      },
      {
        title: "Javascript",
        children: CONST.JSList,
      },
      {
        title: "React",
        children: CONST.reactList,
      },
      {
        title: "Vuepress",
        children: CONST.vueList,
      },
      {
        title: "Algorithm",
        children: CONST.algorithmList,
      },
      {
        title: "ETC",
        children: CONST.ETCList,
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

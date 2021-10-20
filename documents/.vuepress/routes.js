const fileList = {
  javascript: ["syntax"],
  vuepress: ["started_vue", "custom_theme"],
  algorithm: ["graph_search"],
  etc: ["markdown"],
};

const getRoutes = () => {
  const routes = {};
  for (const [key, files] of Object.entries(fileList)) {
    Object.assign(routes, { [key]: files.map((name) => `${key}/${name}.md`) });
  }
  return routes;
};

module.exports = getRoutes();

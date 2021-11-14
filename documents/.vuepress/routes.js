const fileList = {
  htmlcss: { web: ["web"], html: [], css: [] },
  javascript: ["syntax"],
  vuepress: ["started_vue", "custom_theme", "deploy"],
  algorithm: ["graph_search"],
  etc: ["markdown"],
};

const getRoutes = () => {
  const routes = {};
  for (const [key, files] of Object.entries(fileList))
    Object.assign(routes, {
      [key]: Array.isArray(files)
        ? files.map((name) => `${key}/${name}.md`)
        : Object.keys(files).reduce((acc, key) => {
            acc[key] = files[key].map((name) => `${key}/${name}.md`);
            return acc;
          }, {}),
    });
  return routes;
};

module.exports = getRoutes();

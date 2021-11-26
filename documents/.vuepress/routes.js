const fileList = {
  htmlcss: [
    { web: ["web"], html: ["dom"], css: ["selector", "pseudo", "animation"] },
  ],
  javascript: ["this", "prototype", "closure", "syntax"],
  vuepress: ["started_vue", "custom_theme", "deploy"],
  algorithm: ["graph_search"],
  etc: [{ git: [] }, "markdown"],
};

const getRoutes = () => {
  const routes = {};

  const forObject = (files) =>
    Object.keys(files).reduce((acc, key) => {
      acc[key] = files[key].map((name) => `${key}/${name}.md`);
      return acc;
    }, {});

  for (const [key, files] of Object.entries(fileList))
    Object.assign(routes, {
      [key]: files.map((name) =>
        typeof name === "string" ? `${key}/${name}.md` : forObject(name)
      ),
    });

  return routes;
};

module.exports = getRoutes();

const FILES = require("./filelist");

const getRoutes = () => {
  const routes = {},
    pathFormat = (key, nm) => `${key}/${nm}.md`;

  const forObject = (files) =>
    Object.keys(files).reduce((acc, key) => {
      acc[key] = files[key].map((name) => pathFormat(key, name));
      return acc;
    }, {});

  for (const [key, files] of Object.entries(FILES))
    Object.assign(routes, {
      [key]: files.map((name) =>
        typeof name === "string" ? pathFormat(key, name) : forObject(name)
      ),
    });

  return routes;
};

module.exports = getRoutes();

import { readFile, writeFile, copy } from "fs-extra";
import { join } from "path";
import { render } from "sass";
import { minify } from "html-minifier";

console.log("Building website...");

const build = async () => {
  const xhtml = (await readFile(
    join(__dirname, "..", "index.html")
  )).toString();
  const scss = (await readFile(
    join(__dirname, "..", "styles.scss")
  )).toString();
  const css = <string>await renderScss(scss);
  const html = xhtml
    .replace("<!-- inject css -->", `<style>${css}</style>`)
    .replace("<!-- year -->", new Date().getUTCFullYear().toString());
  await copy(join(__dirname, "..", "assets"), join(__dirname, "assets"));
  await writeFile(
    join(__dirname, "index.html"),
    minify(html, {
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      sortAttributes: true,
      sortClassName: true,
      useShortDoctype: true
    })
  );
};

const renderScss = (data: string) =>
  new Promise((resolve, reject) => {
    render({ data }, (error, result) => {
      if (error) return reject(error);
      resolve(result.css.toString());
    });
  });

build()
  .then(() => console.log("Completed!"))
  .catch(error => console.log("Error", error));

import { RouteProps } from "./router.ts";

export const renderPage = async (routeProps: RouteProps) => {
  let dirRouteParts = routeProps.dir.split('/');

  let htmlFileName: string;

  if (dirRouteParts.length === 1) {
    htmlFileName = `${dirRouteParts[0]}-index.html`;
  } else {
    dirRouteParts = dirRouteParts.slice(-2);
    htmlFileName = `${dirRouteParts[0]}-${dirRouteParts[1]}.html`;
  }

  const htmlFilePath = `${routeProps.dir}/${htmlFileName}`;

  const content = await fetchHTML(htmlFilePath);
  history.pushState({}, "", routeProps.path);

  document.body.innerHTML = content;

  const scriptFileName = `${dirRouteParts[0]}-${dirRouteParts[1]}.ts`;
  const scriptFilePath = `${routeProps.dir}/${scriptFileName}`;

  const script = document.createElement('script');
  script.type = "module";
  script.src = scriptFilePath;
  document.body.appendChild(script);
}

export const renderElement = (id: string, element: HTMLElement) => {
  const container = document.getElementById(id);

  if (!container) {
    throw new Error(`[ERROR]: Container with id '${id}' not found.`);
  }

  container.replaceWith(element);
}

const fetchHTML = async (htmlFilePath: string) => {
  const response = await fetch(htmlFilePath);
  if (!response.ok) {
    throw new Error('[ERROR]: Network response was not OK: ' + response.statusText);
  }
  return await response.text();
}
import { renderPage } from "./renderer.ts";

export interface Routes {
  [key: string]: RouteName;
}

export interface RouteName {
  [key: string]: RouteProps;
}

export interface RouteProps {
  dir: string;
  path: string;
}

export const routes: Routes = {
  home: {
    index: {
      dir: "/src/ui/pages/home/index",
      path: "/home",
    },
  },
  projects: {
    index: {
      dir: "/src/ui/pages/projects/index",
      path: "/projects",
    },
    create: {
      dir: "/src/ui/pages/projects/create",
      path: "/projects/create",
    },
  },
  notFound: {
    index: {
      dir: "/src/ui/pages/not-found/index",
      path: "/not-found"
    }
  }
};

export const findRoutePropsByPath = (searchPath: string) => {
  for (const routeName in routes) {
    const route = routes[routeName];
    for (const key in route) {
      if (route[key].path === searchPath) {
        return route[key];
      }
    }
  }
  return undefined;
}

export const resolveRoute = async () => {
  if (window.location.pathname === "/") {
    window.location.pathname = "/home";
  }

  console.log(`[ROUTER] path: ${window.location.pathname}`)
  const routeProps = findRoutePropsByPath(window.location.pathname);
  if (routeProps) {
    await renderPage(routeProps);
  } else {
    await renderPage(routes.notFound.index);
  }
}

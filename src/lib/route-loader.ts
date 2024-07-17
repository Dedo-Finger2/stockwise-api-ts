import { FastifyInstance } from "fastify";
import { glob } from "glob";
import path from "node:path";
import url from "node:url";

export function routeLoader() {
  return {
    async load(app: FastifyInstance) {
      const routePath = path.resolve(path.dirname(""), "src", "**", "routes", "**/*.route.ts");

      const routes = await glob(routePath, {
        windowsPathsNoEscape: true
      });

      for (const route of routes) {
        const routeUrl = url.fileURLToPath(route);
        const routeDefinition = await import(routeUrl);
        app.route(routeDefinition);
      }
    }
  };
}

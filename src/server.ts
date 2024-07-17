import env from "./env.ts";
import { routeLoader } from "./lib/route-loader.ts";
import { fastify } from "fastify";

const app = fastify();

async function bootstrap() {
  await app.listen({
    port: env.PORT
  });

  console.log("Server running...");
}

try {
  await routeLoader().load(app);

  await bootstrap();
} catch (e) {
  console.error(e);
  process.exit(1);
}

import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { PORT } from "./config.ts";
import { router } from "./router.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });

import { serve } from "https://deno.land/std@0.141.0/http/server.ts";
import { addPage } from "./services.ts";

serve(
  async (req) => {
    console.log(req.url);

    const response = await addPage();

    return new Response("Hello World\n");
  },
  {
    port: 6000,
    onListen: ({ port }) => console.log(`Listening on port ${port}`),
  }
);

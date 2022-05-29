import { config } from "https://deno.land/std@0.141.0/dotenv/mod.ts";

const isProductionMode = Deno.env.get("DENO_ENV") !== "dev";

const env = await config({
  safe: true,
});

export const PORT = parseInt(Deno.env.get("PORT") ?? "6000");
export const NOTION_KEY = isProductionMode
  ? Deno.env.get("NOTION_KEY")
  : env.NOTION_KEY;
export const NOTION_DATABASE_ID = isProductionMode
  ? Deno.env.get("NOTION_DATABASE_ID")
  : env.NOTION_DATABASE_ID;

import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

const env = config();

export const NOTION_KEY = env.NOTION_KEY;
export const NOTION_DATABASE_ID = env.NOTION_DATABASE_ID;

console.log(NOTION_KEY, NOTION_DATABASE_ID);

export const PORT = parseInt(Deno.env.get("PORT") ?? "6000");
export const NOTION_KEY = Deno.env.get("NOTION_KEY");
export const NOTION_DATABASE_ID = Deno.env.get("NOTION_DATABASE_ID");

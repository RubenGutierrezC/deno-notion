import axiod from "https://deno.land/x/axiod@0.26.1/mod.ts";
import { NOTION_KEY, NOTION_DATABASE_ID } from "./config.ts";

const http = axiod.create({
  baseURL: "https://api.notion.com/v1/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${NOTION_KEY}`,
    "Notion-Version": "2022-02-22",
  },
});

export const addPage = async ({ title = "" }) => {
  const data = await http.post("pages", {
    parent: {
      database_id: NOTION_DATABASE_ID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: title,
            },
          },
        ],
      },
      Status: {
        select: { name: "undone" },
      },
    },
  });

  return data;
};

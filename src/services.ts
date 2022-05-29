import axiod from "https://deno.land/x/axiod@0.26.1/mod.ts";
import { NOTION_KEY, NOTION_DATABASE_ID } from "./config.ts";

console.log(NOTION_KEY, NOTION_DATABASE_ID);

const http = axiod.create({
  baseURL: "https://api.notion.com/v1/",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${NOTION_KEY}`,
    "Notion-Version": "2022-02-22",
  },
});

export const addPage = async () => {
  const data = await http.post("pages", {
    parent: {
      database_id: NOTION_DATABASE_ID,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: "Tuscan Kale",
            },
          },
        ],
      },
      Tags: {
        multi_select: [{ name: "Pending" }, { name: "Work" }],
      },
    },
  });

  return data;
};

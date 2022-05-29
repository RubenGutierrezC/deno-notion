FROM denoland/deno:alpine-1.22.1

ENV NOTION_KEY=$NOTION_KEY
ENV NOTION_DATABASE_ID=$NOTION_DATABASE_ID

WORKDIR /app

USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .

CMD deno run -A src/main.ts
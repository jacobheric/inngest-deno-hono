import { Hono } from "npm:hono";
import { serve } from "npm:inngest/hono";
import { inngest } from "./inngest/client.ts";
import { helloWorld } from "./inngest/functions.ts";
import "@std/dotenv/load";

const app = new Hono();

app.on(
  ["GET", "PUT", "POST"],
  "/api/inngest",
  serve({
    client: inngest,
    functions: [helloWorld],
  })
);

Deno.serve({ port: 8000 }, app.fetch);

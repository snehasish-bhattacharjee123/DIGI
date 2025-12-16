import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "dpsox5cj",
  dataset: "production",
  apiVersion: "2023-08-01",
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: false,
});

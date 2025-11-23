import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "dpsox5cj",
  dataset: "production",
  apiVersion: "2023-08-01",
  token: import.meta.env.skZ9w8VgiOEwd9BtEtEWKAFvpxDYL0WNX9dSolQd7ZzD6TBcmQ6cYgXbTy9uCgqp05cuUkclHLmxtHXegFUcdmMjOtWPlAAF8Y552Qn7swERuH9ltT8BMPRnXsnhDzwyMakJDIBje7fYqogcOv6QT6JgdNBy2em2jiviN8HuZVBTM8yXAyFE, // add token
  useCdn: false,
});

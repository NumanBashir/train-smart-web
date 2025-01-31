import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "80sjv6ao",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

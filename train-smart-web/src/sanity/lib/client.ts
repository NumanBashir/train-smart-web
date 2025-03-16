import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to ensure fresh content
  perspective: "published",
  resultSourceMap: false,
  withCredentials: true,
  token: process.env.SANITY_API_TOKEN,
  ignoreBrowserTokenWarning: true,
});

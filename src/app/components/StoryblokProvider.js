/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
 
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "150d3yW7VYN3z79ov3KcxQtt",
  use: [apiPlugin],
});
 
export default function StoryblokProvider({ children }) {
  return children;
}
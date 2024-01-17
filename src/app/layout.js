import { Inter } from 'next/font/google'
import './globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";

import Page from '@/components/Page';
import Grid from '@/components/Grid';
import Feature from '@/components/Feature';
import Teaser from '@/components/Teaser';

export const metadata = {
  title: 'Storyblok and Next.js 13',
  description: 'A Next.js and Storyblok app using app router ',
}

const inter = Inter({ subsets: ['latin'] })
 
storyblokInit({
  accessToken: "150d3yW7VYN3z79ov3KcxQtt",
  use: [apiPlugin],
  components: {
    feature: Feature,
    grid: Grid,
    page: Page,
    teaser: Teaser
  }
});




export default function RootLayout({ children }) {
  return (    
      <html lang="en">
        <body className={inter.className}>{children}</body>
        <StoryblokBridgeLoader options={{}} />
      </html>
    );
}

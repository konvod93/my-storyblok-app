import { Inter } from 'next/font/google';
import './globals.css';
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from '../components/StoryblokProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
 
storyblokInit({
  accessToken: "150d3yW7VYN3z79ov3KcxQtt",
  use: [apiPlugin],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}

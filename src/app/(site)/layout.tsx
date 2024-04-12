import type { Metadata } from 'next';

import './globals.css';

import localFont from 'next/font/local';

import { urlForImageWithDimensions } from '../../../sanity/lib/image';
import {
  getLandingPageData,
  getPageSettings,
} from '../../../sanity/sanity.query';
import CookieConsentBanner from './components/CookieConsentBanner';
import Footer from './components/Footer/Footer';
import GoogleTag from './components/GoogleTag';
import Header from './components/Header/Header';

export const revalidate = 60;

const soehneBreit = localFont({
  display: 'swap',
  variable: '--font-soehne-breit',
  src: [
    {
      path: './fonts/soehne-breit-buch.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

const soehne = localFont({
  display: 'swap',
  variable: '--font-soehne',
  src: [
    {
      path: './fonts/soehne-buch.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/soehne-buch.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/soehne-kraftig.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

const soehneKraftig = localFont({
  display: 'swap',
  variable: '--font-soehne-kraftig',
  src: [
    {
      path: './fonts/soehne-kraftig.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/soehne-kraftig.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/soehne-kraftig.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export async function generateMetadata() {
  const data = await getLandingPageData();
  if (!data) return;

  return {
    title: {
      default: data.title,
    },
    description: data.description,
    openGraph: {
      type: 'website',
      url: 'https://chromasonic.com',
      title: data.seoTitle,
      description: data.seoDescription,
      siteName: 'chromasonic.com',
      images: [
        {
          url: urlForImageWithDimensions(data.seoImage, 1200, 630),
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageSettingsData = await getPageSettings();

  const {
    Footer: footerData,
    ticketLink,
    CookieBanner: cookiebannerData,
  } = pageSettingsData;

  return (
    <html lang="en">
      <body
        className={`${soehneBreit.variable} ${soehne.variable} ${soehneKraftig.variable}`}
      >
        <GoogleTag trackingId="UA-189690288-3" />
        <Header ticketLink={ticketLink} />
        {children}
        <Footer data={footerData} />
        <CookieConsentBanner data={cookiebannerData} />
      </body>
    </html>
  );
}

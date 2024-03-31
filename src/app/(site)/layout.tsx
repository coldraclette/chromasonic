import type { Metadata } from 'next';

import './globals.css';

import localFont from 'next/font/local';

import { getPageSettings } from '../../../sanity/sanity.query';
import CookieConsentBanner from './components/CookieConsentBanner';
import Footer from './components/Footer/Footer';
import GoogleTag from './components/GoogleTag';
import Header from './components/Header/Header';

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

export const metadata: Metadata = {
  title: 'Chromasonic',
  description:
    'VISIT Chromasonic is an immersive light and sound experience to inspire expanded states of awareness and connection.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageSettingsData = await getPageSettings();

  const { Footer: footerData, ticketLink } = pageSettingsData;

  return (
    <html lang="en">
      <body className={`${soehneBreit.variable} ${soehne.variable}`}>
        <GoogleTag trackingId="UA-189690288-3" />
        <Header ticketLink={ticketLink} />
        {children}
        <Footer data={footerData} />
        <CookieConsentBanner />
      </body>
    </html>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import cookie from 'js-cookie';

import CloseIcon from '/public/closeIcon.svg';

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentCookie = cookie.get('cookieConsent');

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set('cookieConsent', 'accepted', { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set('cookieConsent', 'rejected', { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 z-20 w-full p-4 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1], delay: 1.5 },
          },
        }}
        className="relative flex flex-col justify-between gap-8 bg-white px-5 py-[17px] lg:flex-row lg:gap-4 lg:px-[28px] lg:pb-[28px] lg:pt-[11px]"
      >
        <div
          onClick={handleReject}
          className="absolute right-[20px] top-[20px] h-[25px] w-[25px] cursor-pointer"
        >
          <CloseIcon />
        </div>
        <div className="flex flex-col gap-8">
          <p className="font-heading text-[18px] lg:text-[32px] lg:leading-[58px]">
            A NOTE ON PRIVACY
          </p>

          <p className="max-w-[768px] font-body text-[15px] leading-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex w-full items-end gap-4 lg:w-auto">
          <div className="flex w-full flex-col lg:flex-row">
            <button
              className="w-full bg-[#333] p-5 uppercase text-white lg:w-[212px]"
              onClick={handleAccept}
            >
              Accept all cookies
            </button>
            <button
              className="w-full p-5 font-bold uppercase underline lg:w-[200px]"
              onClick={handleReject}
            >
              DECLINE
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CookieConsentBanner;

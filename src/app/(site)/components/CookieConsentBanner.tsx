'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import cookie from 'js-cookie';

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
        className="flex justify-between bg-white px-[28px] pb-[28px] pt-[11px]"
      >
        <div className="flex flex-col gap-8">
          <p className="font-heading text-[32px] leading-[58px]">
            A NOTE ON PRIVACY
          </p>
          <p className="max-w-[768px] font-body text-[15px] leading-[22px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex items-end gap-4">
          <div>
            <button
              className="bg-[#333] p-5 uppercase text-white"
              onClick={handleAccept}
            >
              Accept all cookies
            </button>
          </div>
          {/* <button onClick={handleReject}>Reject</button> */}
        </div>
      </motion.div>
    </div>
  );
};

export default CookieConsentBanner;

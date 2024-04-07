'use client';

import { useState } from 'react';

interface SignUpProps {
  signUpText: string;
  investorText: string;
}

export default function SignUp({ signUpText, investorText }: SignUpProps) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [investorFirstname, setInvestorFirstname] = useState('');
  const [investorLastname, setInvestorLastname] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [investorEmail, setInvestorEmail] = useState('');

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    type: 'signUp' | 'investor'
  ) => {
    event.preventDefault();

    if (type === 'signUp') {
      console.log('Signing up with:', signUpEmail);
    } else if (type === 'investor') {
      console.log('Investor sign-up with:', investorEmail);
    }

    // setSignUpEmail('');
    // setInvestorEmail('');
  };
  return (
    <div className="max-w-[442px] space-y-8">
      <div>
        <p className="font-kraftig text-[16px] font-bold uppercase leading-[16px] tracking-[0.66px] text-green-100 lg:text-lg lg:leading-[24px] lg:tracking-[0.66px]">
          {signUpText}
        </p>
        <form
          onSubmit={(e) => handleSubmit(e, 'signUp')}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
              className="w-full border-b border-green-100 bg-transparent pt-2 text-green-400 placeholder:text-green-400 focus:ring-0"
              required
            />

            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
              className="w-full border-b border-green-100 bg-transparent pt-2 text-green-400 placeholder:text-green-400 focus:ring-0"
              required
            />
          </div>
          <div className="flex border-b border-green-100">
            <input
              type="email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-transparent pt-2 text-green-400 placeholder:text-green-400 focus:ring-0"
              required
            />
            <button
              type="submit"
              className="submit-button flex w-full flex-1 items-center gap-1 font-kraftig text-[16px] font-bold uppercase leading-[16px] tracking-[0.66px] text-green-100 hover:text-green-300 lg:text-lg lg:leading-[24px] lg:tracking-[0.66px]"
            >
              <span>SUBMIT</span>
              <div className="h-[11px] w-[11px] lg:h-[12.65px] lg:w-[12.65px]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector 15"
                    d="M0 5.71429H9M9 5.71429L4.90909 1M9 5.71429L4.90909 10"
                    stroke="#75FF8C"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>

      <div>
        <p className="font-kraftig text-[16px] font-bold uppercase leading-[16px] tracking-[0.66px] text-green-100 lg:text-lg lg:leading-[24px] lg:tracking-[0.66px]">
          {investorText}
        </p>
        <form
          onSubmit={(e) => handleSubmit(e, 'investor')}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={investorFirstname}
              onChange={(e) => setInvestorFirstname(e.target.value)}
              placeholder="First Name"
              className="w-full border-b border-green-100 bg-transparent pt-2 text-green-400 placeholder:text-green-400 focus:ring-0"
              required
            />

            <input
              type="text"
              value={investorLastname}
              onChange={(e) => setInvestorLastname(e.target.value)}
              placeholder="Last Name"
              className="w-full border-b border-green-100 bg-transparent pt-2 text-green-400 placeholder:text-green-400 focus:ring-0"
              required
            />
          </div>
          <div className="flex border-b border-green-100">
            <input
              type="email"
              value={investorEmail}
              onChange={(e) => setInvestorEmail(e.target.value)}
              placeholder="Email"
              className="w-full bg-transparent pt-2 text-green-100 placeholder:text-green-400 focus:ring-0"
              required
            />
            <button
              type="submit"
              className="submit-button flex w-full flex-1 items-center gap-1 font-kraftig text-[16px] font-bold uppercase leading-[16px] tracking-[0.66px] text-green-100 hover:text-green-300 lg:text-lg lg:leading-[24px] lg:tracking-[0.66px]"
            >
              <span>SUBMIT</span>
              <div className="h-[11px] w-[11px] lg:h-[12.65px] lg:w-[12.65px]">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector 15"
                    d="M0 5.71429H9M9 5.71429L4.90909 1M9 5.71429L4.90909 10"
                    stroke="#75FF8C"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

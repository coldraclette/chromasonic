'use client';

import { useState } from 'react';

interface SignUpProps {
  signUpText: string;
  investorText: string;
}

export default function SignUp({ signUpText, investorText }: SignUpProps) {
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
    <div className="max-w-96 space-y-8">
      <div>
        <p className="text-lg font-bold text-lightGreen">{signUpText}</p>
        <form
          onSubmit={(e) => handleSubmit(e, 'signUp')}
          className="flex border-b border-lightGreen"
        >
          <input
            type="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-transparent pt-2 text-paleGreen placeholder:text-paleGreen focus:ring-0"
            required
          />
          <button
            type="submit"
            className="flex w-full flex-1 items-center gap-1 text-lightGreen"
          >
            <span>SUBMIT</span>
            <svg
              width="11"
              height="11"
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
          </button>
        </form>
      </div>

      <div>
        <p className="text-lg font-bold text-lightGreen">{investorText}</p>
        <form
          onSubmit={(e) => handleSubmit(e, 'investor')}
          className="flex border-b border-lightGreen"
        >
          <input
            type="email"
            value={investorEmail}
            onChange={(e) => setInvestorEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-transparent pt-2 text-paleGreen placeholder:text-paleGreen focus:ring-0"
            required
          />
          <button
            type="submit"
            className="flex w-full flex-1 items-center gap-1 text-lightGreen"
          >
            <span>SUBMIT</span>
            <svg
              width="11"
              height="11"
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
          </button>
        </form>
      </div>
    </div>
  );
}

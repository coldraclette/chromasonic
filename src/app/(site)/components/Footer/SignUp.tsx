'use client';

import { useState } from 'react';

import ArrowRight from '/public/arrowRight.svg';

interface SignUpProps {
  signUpText: string;
  investorText: string;
}

export default function SignUp({ signUpText, investorText }: SignUpProps) {
  // States for sign up form
  const [showSignUpForm, setShowSignUpForm] = useState(true);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpSuccessMessage, setSignUpSuccessMessage] = useState('');
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('');

  // States for investor form
  const [showInvestorForm, setShowInvestorForm] = useState(true);
  const [investorFirstname, setInvestorFirstname] = useState('');
  const [investorLastname, setInvestorLastname] = useState('');
  const [investorEmail, setInvestorEmail] = useState('');
  const [investorSuccessMessage, setInvestorSuccessMessage] = useState('');
  const [investorErrorMessage, setInvestorErrorMessage] = useState('');

  const subscribeToMailchimp = async (data) => {
    const response = await fetch('/api/addSubscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.error || 'An error occurred');
    }

    return responseData;
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    type: 'signUp' | 'investor'
  ) => {
    event.preventDefault();
    const data =
      type === 'signUp'
        ? {
            email: signUpEmail,
            firstname,
            lastname,
            formType: 'Invitations',
          }
        : {
            email: investorEmail,
            firstname: investorFirstname,
            lastname: investorLastname,
            formType: 'InvestorAndPartnership',
          };

    try {
      await subscribeToMailchimp(data);
      if (type === 'signUp') {
        setShowSignUpForm(false);
        setSignUpSuccessMessage('Thank you for subscribing!');
        setSignUpErrorMessage('');
      } else {
        setShowInvestorForm(false);
        setInvestorSuccessMessage('Thank you for your interest!');
        setInvestorErrorMessage('');
      }
      setFirstname('');
      setLastname('');
      setInvestorFirstname('');
      setInvestorLastname('');
      setSignUpEmail('');
      setInvestorEmail('');
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : 'An error occurred';
      if (type === 'signUp') {
        setSignUpErrorMessage(errorMessage);
      } else {
        setInvestorErrorMessage(errorMessage);
      }
    }
  };

  return (
    <div className="max-w-[442px] space-y-8">
      <div>
        <p className="font-kraftig text-[16px] font-bold uppercase leading-[16px] tracking-[0.66px] text-green-100 lg:text-lg lg:leading-[24px] lg:tracking-[0.66px]">
          {signUpText}
        </p>
        {showSignUpForm ? (
          <form
            onSubmit={(e) => handleSubmit(e, 'signUp')}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex border-b border-green-100">
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  placeholder="First Name"
                  className="w-full  bg-transparent pt-2 text-green-400 placeholder:text-green-400 focus:ring-0"
                  required
                />
              </div>
              <div className="flex border-b border-green-100">
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Last Name"
                  className="w-full  bg-transparent pt-2 text-green-400 placeholder:text-green-400 focus:ring-0"
                  required
                />
              </div>
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
                  <ArrowRight />
                </div>
              </button>
            </div>
            {signUpErrorMessage && (
              <p className="text-red-500">{signUpErrorMessage}</p>
            )}
          </form>
        ) : (
          <div className="text-green-400">{signUpSuccessMessage}</div>
        )}
      </div>

      <div>
        <p className="font-kraftig text-[16px] font-bold uppercase leading-[16px] tracking-[0.66px] text-green-100 lg:text-lg lg:leading-[24px] lg:tracking-[0.66px]">
          {investorText}
        </p>
        {showInvestorForm ? (
          <form
            onSubmit={(e) => handleSubmit(e, 'investor')}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex border-b border-green-100">
                <input
                  type="text"
                  value={investorFirstname}
                  onChange={(e) => setInvestorFirstname(e.target.value)}
                  placeholder="First Name"
                  className="w-full bg-transparent pt-2 text-green-400 placeholder:text-green-400 focus:ring-0"
                  required
                />
              </div>
              <div className="flex border-b border-green-100">
                <input
                  type="text"
                  value={investorLastname}
                  onChange={(e) => setInvestorLastname(e.target.value)}
                  placeholder="Last Name"
                  className="w-full bg-transparent pt-2 text-green-400 placeholder:text-green-400 focus:ring-0"
                  required
                />
              </div>
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
                  <ArrowRight />
                </div>
              </button>
            </div>
            {investorErrorMessage && (
              <p className="text-red-500">{investorErrorMessage}</p>
            )}
          </form>
        ) : (
          <div className="text-green-400">{investorSuccessMessage}</div>
        )}
      </div>
    </div>
  );
}

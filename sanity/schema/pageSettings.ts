export const pageSettings = {
  name: 'pageSettings',
  title: 'Page Settings',
  type: 'document',
  fields: [
    {
      name: 'ticketLink',
      title: 'Ticket Link',
      type: 'string',
    },
    {
      name: 'Footer',
      title: 'Footer',
      type: 'object',
      fields: [
        { name: 'contactLink', title: 'Contact link', type: 'string' },
        { name: 'instagramLink', title: 'Instagram link', type: 'string' },
        { name: 'email', title: 'Email', type: 'string' },
        {
          name: 'signUpInvitationText',
          title: 'Sign up invitation text',
          type: 'string',
        },
        {
          name: 'investorInquiresText',
          title: 'Investor inquires text',
          type: 'string',
        },
      ],
    },
    {
      name: 'CookieBanner',
      title: 'Cookie Banner',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        { name: 'text', title: 'Text', type: 'text' },
      ],
    },
  ],
};

export const landingPage = {
  title: 'Landing Page',
  name: 'landingPage',
  type: 'document',
  groups: [
    {
      name: 'landingPageGroup',
      title: 'Landing Page fields',
      default: true,
    },
    {
      name: 'seoGroup',
      title: 'SEO fields',
    },
  ],
  fields: [
    // HERO SECTION
    {
      title: 'Hero Section',
      name: 'heroSection',
      type: 'object',
      group: 'landingPageGroup',
      fields: [
        {
          title: 'Background Image',
          name: 'backgroundImage',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          title: 'Animated Text Lines',
          name: 'animatedTextLines',
          type: 'array',
          of: [{ type: 'string' }],
          description:
            'Add multiple lines of text that will be animated in sequence.',
        },
      ],
    },
    // QUOTE SECTION 1
    {
      title: 'Quote Section 1',
      name: 'quoteSection1',
      type: 'object',
      group: 'landingPageGroup',
      fields: [
        {
          title: 'Slides',
          name: 'slides',
          type: 'array',
          of: [
            {
              title: 'Slide',
              name: 'slide',
              type: 'object',
              fields: [
                {
                  title: 'Randomize Middle Line',
                  name: 'randomizeMiddleLine',
                  type: 'boolean',
                  initialValue: true,
                  description:
                    'Check this box to randomize the middle line of the quote.',
                },
                {
                  title: 'Middle Line Position',
                  name: 'middleLinePosition',
                  type: 'string',
                  description: 'Position of the middle line of the quote.',
                  hidden: ({ parent }: any) => parent.randomizeMiddleLine,
                  options: {
                    list: [
                      { title: 'Top', value: 'top' },
                      { title: 'Middle', value: 'middle' },
                      { title: 'Bottom', value: 'bottom' },
                    ],
                  },
                },
                {
                  title: 'Color',
                  name: 'color',
                  type: 'string',
                  description: 'The color of the slide background',
                  validation: (Rule: any) => Rule.required(),
                  options: {
                    list: [
                      { title: 'Green', value: 'green' },
                      { title: 'Blue', value: 'blue' },
                      { title: 'Cyan', value: 'cyan' },
                      { title: 'Pink', value: 'pink' },
                      { title: 'Red', value: 'red' },
                    ],
                  },
                },
                {
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  title: 'Line 1',
                  name: 'line1',
                  type: 'string',
                },
                {
                  title: 'Line 2',
                  name: 'line2',
                  type: 'string',
                },
                {
                  title: 'Line 3',
                  name: 'line3',
                  type: 'string',
                },
              ],
            },
          ],
          description: 'Add as many slides as you want for this quote section.',
        },
      ],
    },
    // LEARN SECTION
    {
      title: 'Discover Section',
      name: 'learnSection',
      type: 'object',
      group: 'landingPageGroup',
      fields: [
        {
          title: 'Byline',
          name: 'byline',
          type: 'string',
          description: 'A short piece of introductory or descriptive text.',
        },
        {
          title: 'Title Line 1',
          name: 'titleLine1',
          type: 'string',
          description: 'The first line of the section title.',
        },
        {
          title: 'Title Line 2',
          name: 'titleLine2',
          type: 'string',
          description: 'The second line of the section title.',
        },
        {
          title: 'Title Line 3',
          name: 'titleLine3',
          type: 'string',
          description: 'The third line of the section title.',
        },
        {
          title: 'Text Area 1',
          name: 'textArea1',
          type: 'text',
          description: 'The first main text area for detailed content.',
        },
        {
          title: 'Text Area 2',
          name: 'textArea2',
          type: 'text',
          description: 'The second main text area for detailed content.',
        },
        {
          title: 'Items',
          name: 'items',
          type: 'array',
          of: [
            {
              title: 'Item',
              name: 'item',
              type: 'object',
              fields: [
                {
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  title: 'Title',
                  name: 'title',
                  type: 'string',
                  description: 'Title for the item.',
                },
                {
                  title: 'Description',
                  name: 'description',
                  type: 'text',
                  description: 'A brief description of the item.',
                },
              ],
            },
          ],
        },
        {
          title: 'Text Area 3',
          name: 'textArea3',
          type: 'text',
        },
        {
          title: 'Text Area 4',
          name: 'textArea4',
          type: 'text',
        },
      ],
    },
    // TEXT IMAGE GRID SECTION
    {
      title: 'Platform section',
      name: 'textImageGridSections',
      type: 'array',
      group: 'landingPageGroup',
      of: [
        {
          title: 'Text Image Grid Section',
          name: 'textImageGridSection',
          type: 'object',
          fields: [
            {
              title: 'Color',
              name: 'color',
              type: 'string',
              description: 'The color of text',
              validation: (Rule: any) => Rule.required(),
              options: {
                list: [
                  { title: 'Green', value: 'green' },
                  { title: 'Blue', value: 'blue' },
                  { title: 'Cyan', value: 'cyan' },
                  { title: 'Pink', value: 'pink' },
                  { title: 'Red', value: 'red' },
                ],
              },
            },
            {
              title: 'Byline',
              name: 'byline',
              type: 'string',
              description: 'A short piece of introductory or descriptive text.',
            },
            {
              title: 'Title',
              name: 'title',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'The title of the section, supports multiple lines.',
            },
            {
              title: 'Text Area (Column 1)',
              name: 'textArea',
              type: 'text',
              description: 'A main text area for detailed content.',
            },
            {
              title: 'Text Area (Column 2)',
              name: 'textArea2',
              type: 'text',
              description: 'A main text area for detailed content.',
            },
            {
              title: 'Images',
              name: 'images',
              type: 'array',
              of: [{ type: 'image', options: { hotspot: true } }],
              description: 'An array of images for the grid.',
            },
          ],
        },
      ],
      description:
        'Repeatable Text Image Grid sections with byline, title, text area, and images.',
    },
    // QUOTE SECTION 2
    {
      title: 'Quote Section 2',
      name: 'quoteSection2',
      type: 'object',
      group: 'landingPageGroup',
      fields: [
        {
          title: 'Slides',
          name: 'slides',
          type: 'array',
          of: [
            {
              title: 'Slide',
              name: 'slide',
              type: 'object',
              fields: [
                {
                  title: 'Randomize Middle Line',
                  name: 'randomizeMiddleLine',
                  type: 'boolean',
                  initialValue: true,
                  description:
                    'Check this box to randomize the middle line of the quote.',
                },
                {
                  title: 'Middle Line Position',
                  name: 'middleLinePosition',
                  type: 'string',
                  description: 'Position of the middle line of the quote.',
                  hidden: ({ parent }: any) => parent.randomizeMiddleLine,
                  options: {
                    list: [
                      { title: 'Top', value: 'top' },
                      { title: 'Middle', value: 'middle' },
                      { title: 'Bottom', value: 'bottom' },
                    ],
                  },
                },
                {
                  title: 'Color',
                  name: 'color',
                  type: 'string',
                  description: 'The color of the slide background',
                  validation: (Rule: any) => Rule.required(),
                  options: {
                    list: [
                      { title: 'Green', value: 'green' },
                      { title: 'Blue', value: 'blue' },
                      { title: 'Cyan', value: 'cyan' },
                      { title: 'Pink', value: 'pink' },
                      { title: 'Red', value: 'red' },
                    ],
                  },
                },
                {
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  title: 'Line 1',
                  name: 'line1',
                  type: 'string',
                },
                {
                  title: 'Line 2',
                  name: 'line2',
                  type: 'string',
                },
                {
                  title: 'Line 3',
                  name: 'line3',
                  type: 'string',
                },
              ],
            },
          ],
          description: 'Add as many slides as you want for this quote section.',
        },
      ],
    },
    // VISIT SECTION
    {
      title: 'Visit Sections',
      name: 'visitSections',
      group: 'landingPageGroup',
      type: 'array',
      of: [
        {
          title: 'Visit Item',
          name: 'visitItem',
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
              options: {
                hotspot: true, // Enables hotspot for precise cropping
              },
            },
            {
              title: 'Byline',
              name: 'byline',
              type: 'string',
              description: 'A short piece of introductory or descriptive text.',
            },
            {
              title: 'Title Lines',
              name: 'titleLines',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Repeatable title lines for the item.',
            },
            {
              title: 'Location',
              name: 'location',
              type: 'string',
              description: 'Location text field for the visit item.',
            },
            {
              title: 'Text Area',
              name: 'textArea',
              type: 'text',
              description: 'A main text area for detailed content.',
            },
            {
              title: 'Text',
              name: 'text',
              type: 'array',
              of: [{ type: 'block' }],
              description: 'A rich text editor for detailed content.',
            },
            {
              title: 'Color',
              name: 'color',
              type: 'string',
              description: 'Color option for the item.',
              options: {
                list: [
                  { title: 'Green', value: 'green' },
                  { title: 'Blue', value: 'blue' },
                  { title: 'Cyan', value: 'cyan' },
                  { title: 'Pink', value: 'pink' },
                  { title: 'Red', value: 'red' },
                ],
              },
            },
          ],
        },
      ],
      description:
        'Repeatable visit items with an image, byline, title lines, location, text area, block of text, and a color option.',
    },
    // QUOTE SECTION 3
    {
      title: 'Quote Section 3',
      name: 'quoteSection3',
      type: 'object',
      group: 'landingPageGroup',
      fields: [
        {
          title: 'Slides',
          name: 'slides',
          type: 'array',
          of: [
            {
              title: 'Slide',
              name: 'slide',
              type: 'object',
              fields: [
                {
                  title: 'Randomize Middle Line',
                  name: 'randomizeMiddleLine',
                  type: 'boolean',
                  initialValue: true,
                  description:
                    'Check this box to randomize the middle line of the quote.',
                },
                {
                  title: 'Middle Line Position',
                  name: 'middleLinePosition',
                  type: 'string',
                  description: 'Position of the middle line of the quote.',
                  hidden: ({ parent }: any) => parent.randomizeMiddleLine,
                  options: {
                    list: [
                      { title: 'Top', value: 'top' },
                      { title: 'Middle', value: 'middle' },
                      { title: 'Bottom', value: 'bottom' },
                    ],
                  },
                },
                {
                  title: 'Color',
                  name: 'color',
                  type: 'string',
                  description: 'The color of the slide background',
                  validation: (Rule: any) => Rule.required(),
                  options: {
                    list: [
                      { title: 'Green', value: 'green' },
                      { title: 'Blue', value: 'blue' },
                      { title: 'Cyan', value: 'cyan' },
                      { title: 'Pink', value: 'pink' },
                      { title: 'Red', value: 'red' },
                    ],
                  },
                },
                {
                  title: 'Image',
                  name: 'image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                },
                {
                  title: 'Line 1',
                  name: 'line1',
                  type: 'string',
                },
                {
                  title: 'Line 2',
                  name: 'line2',
                  type: 'string',
                },
                {
                  title: 'Line 3',
                  name: 'line3',
                  type: 'string',
                },
              ],
            },
          ],
          description: 'Add as many slides as you want for this quote section.',
        },
      ],
    },
  ],
};

import { client } from './lib/client';

export async function getLandingPageData() {
  const query = `
    *[_type == "landingPage"][0] {
      heroSection,
      quoteSection1,
      learnSection {
        ...,
        "items": items[] {
          ...,
           "imageUrl": image.asset->url
        }
      },
      textImageGridSections[] {
        ...,
        color
      },
      quoteSection2,
      visitSections,
      quoteSection3
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export async function getPageSettings() {
  const query = `
    *[_type == "pageSettings"][0] {
      ticketLink,
      Footer
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export async function getFaqPageData() {
  const query = `
    *[_type == "faqPage"][0] {
      title,
      image,
      faqItems
    }
  `;
  const data = await client.fetch(query);
  return data;
}

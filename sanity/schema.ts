import { type SchemaTypeDefinition } from 'sanity';

import { faqPage } from './schema/faqPage';
import { landingPage } from './schema/landingPage';
import { pageSettings } from './schema/pageSettings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, pageSettings, faqPage],
};

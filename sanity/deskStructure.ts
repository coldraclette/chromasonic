import { DocumentIcon } from '@sanity/icons';

export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages Content')
            .items([
              S.listItem()
                .title('Landing Page')
                .icon(DocumentIcon)
                .child(
                  S.document()
                    .schemaType('landingPage')
                    .documentId('landingPage')
                    .title('Landing Page')
                ),
              S.divider(),
              S.listItem()
                .title('FAQ Page')
                .icon(DocumentIcon)
                .child(
                  S.document()
                    .schemaType('faqPage')
                    .documentId('faqPage')
                    .title('FAQ Page')
                ),
            ])
        ),

      S.divider(),
      // page settings
      S.listItem()
        .title('Page Settings')
        .icon(DocumentIcon)
        .child(
          S.document()
            .schemaType('pageSettings')
            .documentId('pageSettings')
            .title('Page Settings')
        ),
    ]);

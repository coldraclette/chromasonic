import { getFaqPageData } from '../../../../sanity/sanity.query';
import AccordionGrid from '../components/AccordionGrid';
import BackgroundImagePage from '../components/BackgroundImagePage';
import PageTitle from '../components/PageTitle';

export default async function Page() {
  const data = await getFaqPageData();

  return (
    <div className="bg-deepPink">
      <BackgroundImagePage image={data.image} />
      <div className="p-5 lg:px-10 lg:pt-11">
        <PageTitle title={data.title} />
        <AccordionGrid faqItems={data.faqItems} />
      </div>
    </div>
  );
}

import { getLandingPageData } from '../../../sanity/sanity.query';
import HeroSection from './components/HeroSection/HeroSection';
import LearnSection from './components/LearnSection/LearnSection';
import QuoteSection from './components/QuoteSection/QuoteSection';
import TextImageGridSection from './components/TextImageGridSection/TextImageGridSection';
import VisitSection from './components/VisitSection/VisitSection';

export const revalidate = 60;

export default async function Home() {
  const {
    heroSection,
    quoteSection1,
    learnSection,
    textImageGridSections,
    quoteSection2,
    visitSections,
    quoteSection3,
  } = await getLandingPageData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {heroSection && <HeroSection data={heroSection} />}
      {quoteSection1 && <QuoteSection data={quoteSection1} />}
      {learnSection && <LearnSection data={learnSection} />}
      {textImageGridSections && (
        <TextImageGridSection data={textImageGridSections} />
      )}
      {quoteSection2 && <QuoteSection data={quoteSection2} />}
      {visitSections && <VisitSection data={visitSections} />}
      {quoteSection3 && <QuoteSection data={quoteSection3} />}
    </main>
  );
}

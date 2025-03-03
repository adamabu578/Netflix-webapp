import Netflix from "@/Components/Landing-page/Landing";
import { Button } from "@/Components/ui/button"
import { ChevronRight } from "lucide-react"
import TrendingSection from "@/Components/Trending/Trending-Section";
import FeaturesSection from "@/Components/Featured/Featured";
import { FaqAccordion } from "@/Components/Faq/Faq-accordion";
import { EmailForm } from "@/Components/Faq/Email-form";

export default function Home() {
  return (
   <div>
  <Netflix />
  <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlimited movies, TV shows, and more</h1>
          <p className="text-xl mb-6">Watch anywhere. Cancel anytime.</p>
          <Button className="bg-red-600 hover:bg-red-700 text-white rounded px-8 py-6 text-lg">
            Get Started <ChevronRight className="ml-2" />
          </Button>
        </section>

      <TrendingSection />
      <FeaturesSection />
      {/* <FaqAccordion/>
      <EmailForm /> */}
      <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-center text-2xl font-bold mb-8 md:text-3xl lg:text-4xl">Frequently Asked Questions</h2>
        <FaqAccordion />
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
          <EmailForm />
        </div>
      </section>
    </main>



      </div>



   </div>
  );
}

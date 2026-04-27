import { Faq } from "@/components/marketing/faq";
import { Features } from "@/components/marketing/features";
import { FinalCta } from "@/components/marketing/final-cta";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Navbar } from "@/components/marketing/navbar";
import { SocialProof } from "@/components/marketing/social-proof";

export default function HomePage() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <SocialProof />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}


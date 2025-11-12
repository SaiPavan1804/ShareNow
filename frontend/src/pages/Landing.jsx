import CTASection from "../components/landing/CTASection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Footer from "../components/landing/Footer";
import HeroSection from "../components/landing/HeroSection";
import PricingSection from "../components/landing/PricingSection";
import TestimonialsSection from "../components/landing/TestimonialSection";
import { features, pricingPlans, testimonials } from "../assets/data.js";
import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Landing() {
  const { openSignIn, openSignUp } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard");
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
      <HeroSection openSignIn={openSignIn} openSignUp={openSignUp} />
      
      <FeaturesSection features={features} />

      <PricingSection pricingPlans={pricingPlans} openSignUp={openSignUp} />
      
      <TestimonialsSection testimonials={testimonials} />
      
      <CTASection openSignUp={openSignUp} />
      
      <Footer />
    </div>
  );
}

export default Landing;

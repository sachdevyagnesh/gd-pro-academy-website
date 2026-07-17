import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { AIChatWidget } from "@/components/common/AIChatWidget";
import { ExitIntentModal } from "@/components/common/ExitIntentModal";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesLanding from "./pages/ServicesLanding";
import Moments from "./pages/Moments";
import Gallery from "./pages/Gallery";
import CorporateTraining from "./pages/CorporateTraining";
import IndividualTraining from "./pages/IndividualTraining";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Assessment from "./pages/Assessment";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Shipping from "./pages/Shipping";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesLanding />} />
          <Route path="/moments" element={<Navigate to="/testimonials" replace />} />
          <Route path="/testimonials" element={<Moments />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/corporate-training" element={<CorporateTraining />} />
          <Route path="/individual-training" element={<IndividualTraining />} />
          <Route path="/assessment/:type" element={<Assessment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        <AIChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

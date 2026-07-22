import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Partners from "./pages/Partners";
import Investors from "./pages/Investors";
import InvestorsGate from "./components/InvestorsGate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FoundersPage from "./pages/Founders";
import Unsubscribe from "./pages/Unsubscribe";
import AdminEmails from "./pages/AdminEmails";
import AdminAnalytics from "./pages/AdminAnalytics";
import Blog from "./pages/Blog";
import BlogStatus from "./pages/BlogStatus";
import About from "./pages/About";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import RssRedirect from "./pages/RssRedirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/investors" element={<InvestorsGate><Investors /></InvestorsGate>} />
          <Route path="/founders" element={<FoundersPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/admin/emails" element={<AdminEmails />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/status" element={<BlogStatus />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/rss" element={<RssRedirect />} />
          <Route path="/feed" element={<RssRedirect />} />
          <Route path="/feed.xml" element={<RssRedirect />} />
          <Route path="/atom.xml" element={<RssRedirect />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

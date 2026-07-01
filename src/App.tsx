import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Partners from "./pages/Partners";
import Investors from "./pages/Investors";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FoundersPage from "./pages/Founders";
import Unsubscribe from "./pages/Unsubscribe";
import AdminEmails from "./pages/AdminEmails";
import Blog from "./pages/Blog";
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
          <Route path="/investors" element={<Investors />} />
          <Route path="/founders" element={<FoundersPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/admin/emails" element={<AdminEmails />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProblemVision from "./pages/ProblemVision";
import Features from "./pages/Features";
import Architecture from "./pages/Architecture";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem-vision" element={<ProblemVision />} />
          <Route path="/features" element={<Features />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/roadmap" element={<Roadmap />} />
          {/* Placeholder routes for remaining pages */}
          <Route path="/best-practices" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Best Practices - Coming Soon</h1></div>} />
          <Route path="/ui-ux" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">UI/UX Showcase - Coming Soon</h1></div>} />
          <Route path="/pricing" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Pricing - Coming Soon</h1></div>} />
          <Route path="/ethics" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Ethics & Compliance - Coming Soon</h1></div>} />
          <Route path="/docs" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">API Documentation - Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

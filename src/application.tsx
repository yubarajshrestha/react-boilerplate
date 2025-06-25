import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router";

// Layouts
const DashboardLayout = lazy(() => import("@/components/layouts/dashboard-layout"));
const FrontendLayout = lazy(() => import("@/components/layouts/frontend-layout"));

// Dashboard pages
const DashboardPage = lazy(() => import("@/pages/backend-ui/dashboard-page"));

// Website pages
const HomePage = lazy(() => import("@/pages/frontend-ui/home-page/home-page"));
const AboutPage = lazy(() => import("@/pages/frontend-ui/about-page"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
  </div>
);

const Application = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FrontendLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};
export default Application;

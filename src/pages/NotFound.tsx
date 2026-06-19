import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import TrustFooter from "@/components/TrustFooter";
import Footer from "@/components/Footer";
import notFoundImage from "@/assets/404-something-broke.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Navigation />
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <img
          src={notFoundImage}
          alt="Illustration of artists pushing the numbers 4-0-4 with one collapsed in paint, captioned Something Broke and I'm going to have to fix it. Please be patient."
          className="mx-auto w-full max-w-2xl h-auto"
        />
        <Link
          to="/"
          className="ast-btn-primary mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Return to Home
        </Link>
      </section>
      <TrustFooter />
    </main>
  );
};

export default NotFound;

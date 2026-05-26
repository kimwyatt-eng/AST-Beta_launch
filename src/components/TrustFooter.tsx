import { Link } from "react-router-dom";
import trustAppBadge from "@/assets/trust-app-badge.png";

const TrustFooter = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col items-center text-center gap-5">
        <img
          src={trustAppBadge}
          alt="A Trusty App — owl shield emblem symbolizing wisdom, vigilance, and creative privacy"
          className="h-40 md:h-48 w-auto opacity-90"
        />
        <p className="text-base md:text-lg text-foreground/85 max-w-2xl">
          Your art, your ideas, your data, your trust. Artist's privacy always comes first.{" "}
          <Link
            to="/privacy"
            className="text-secondary underline underline-offset-4 hover:opacity-80"
          >
            Read the full policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default TrustFooter;

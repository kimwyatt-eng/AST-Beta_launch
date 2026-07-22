import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-trimmed.png";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Artists" },
    { path: "/about", label: "About" },
    { path: "/partners", label: "Partners" },
    
    { path: "/founders", label: "Founders" },
    { path: "/blog", label: "Blog" },
    { path: "/privacy", label: "Privacy" },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-0 sm:py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-0 sm:gap-0">
          <Link
            to="/"
            className="cursor-pointer transition-opacity hover:opacity-80 flex justify-center w-full sm:w-auto"
            aria-label="ArtSupplyTracker home"
          >
            <img src={logo} alt="Art Supply Tracker home" className="block w-[92vw] max-w-[420px] sm:w-auto sm:max-w-none sm:h-12 h-auto" />
          </Link>

          <div className="flex flex-wrap gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`inline-flex items-center rounded-md px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#00E6FF] bg-white/5 hover:bg-white/10"
                      : "text-[#B7AFD8] hover:text-[#00E6FF] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


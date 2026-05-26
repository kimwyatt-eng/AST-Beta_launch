import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Artists" },
    { path: "/partners", label: "Partners" },
    { path: "/investors", label: "Investors" },
    { path: "/founders", label: "Founders" },
    { path: "/blog", label: "Blog" },
    { path: "/privacy", label: "Privacy" },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-1 sm:py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer transition-opacity hover:opacity-80 flex justify-center w-full sm:w-auto"
            aria-label="ArtSupplyTracker home"
          >
            <img src={logo} alt="ArtSupplyTracker" className="w-[92vw] max-w-[420px] sm:w-auto sm:max-w-none sm:h-12 h-auto" />
          </button>

          <div className="flex flex-wrap gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  variant="ghost"
                  onClick={() => navigate(item.path)}
                  size="sm"
                  className={`text-xs sm:text-sm ${
                    isActive
                      ? "text-[#00E6FF] bg-white/5 hover:bg-white/10 hover:text-[#00E6FF]"
                      : "text-[#B7AFD8] hover:text-[#00E6FF]"
                  }`}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

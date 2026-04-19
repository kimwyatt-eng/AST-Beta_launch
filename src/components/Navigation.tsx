import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Artists" },
    { path: "/partners", label: "Partners" },
    { path: "/investors", label: "Investors" },
    { path: "/founders", label: "Founders" },
    { path: "/privacy", label: "Privacy" },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h1
            className="text-xl sm:text-2xl font-bold text-secondary cursor-pointer hover:text-periwinkle transition-colors"
            onClick={() => navigate("/")}
          >
            Art<span className="text-periwinkle">Supply</span>Tracker
          </h1>

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
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:text-secondary-foreground"
                      : "text-periwinkle hover:text-periwinkle"
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

import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h1 
            className="text-xl sm:text-2xl font-bold text-secondary cursor-pointer hover:text-accent transition-colors"
            onClick={() => navigate("/")}
          >
            Art<span className="text-accent">Supply</span>Tracker
          </h1>
          
          <div className="flex flex-wrap gap-1 sm:gap-2">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"}
              onClick={() => navigate("/")}
              size="sm"
              className={`text-xs sm:text-sm ${location.pathname !== "/" ? "text-periwinkle hover:text-periwinkle" : ""}`}
            >
              Artists
            </Button>
            <Button 
              variant={location.pathname === "/partners" ? "default" : "ghost"}
              onClick={() => navigate("/partners")}
              size="sm"
              className={`text-xs sm:text-sm ${location.pathname !== "/partners" ? "text-periwinkle hover:text-periwinkle" : ""}`}
            >
              Partners
            </Button>
            <Button 
              variant={location.pathname === "/investors" ? "default" : "ghost"}
              onClick={() => navigate("/investors")}
              size="sm"
              className={`text-xs sm:text-sm ${location.pathname !== "/investors" ? "text-periwinkle hover:text-periwinkle" : ""}`}
            >
              Investors
            </Button>
            <Button 
              variant={location.pathname === "/founders" ? "default" : "ghost"}
              onClick={() => navigate("/founders")}
              size="sm"
              className={`text-xs sm:text-sm ${location.pathname !== "/founders" ? "text-periwinkle hover:text-periwinkle" : ""}`}
            >
              Founders
            </Button>
            <Button 
              variant={location.pathname === "/privacy" ? "default" : "ghost"}
              onClick={() => navigate("/privacy")}
              size="sm"
              className={`text-xs sm:text-sm ${location.pathname !== "/privacy" ? "text-periwinkle hover:text-periwinkle" : ""}`}
            >
              Privacy
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
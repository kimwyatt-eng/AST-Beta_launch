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
            className="text-xl sm:text-2xl font-bold text-foreground cursor-pointer hover:text-accent transition-colors"
            onClick={() => navigate("/")}
          >
            Art<span className="text-accent">Supply</span>Tracker
          </h1>
          
          <div className="flex gap-2 sm:gap-4">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"}
              onClick={() => navigate("/")}
              size="sm"
              className="text-xs sm:text-sm"
            >
              Artists
            </Button>
            <Button 
              variant={location.pathname === "/partners" ? "default" : "ghost"}
              onClick={() => navigate("/partners")}
              size="sm"
              className="text-xs sm:text-sm"
            >
              Partners
            </Button>
            <Button 
              variant={location.pathname === "/investors" ? "default" : "ghost"}
              onClick={() => navigate("/investors")}
              size="sm"
              className="text-xs sm:text-sm"
            >
              Investors
            </Button>
            <Button 
              variant={location.pathname === "/founders" ? "default" : "ghost"}
              onClick={() => navigate("/founders")}
              size="sm"
              className="text-xs sm:text-sm"
            >
              Founders
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
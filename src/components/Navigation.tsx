import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 
            className="text-2xl font-bold text-foreground cursor-pointer hover:text-accent transition-colors"
            onClick={() => navigate("/")}
          >
            Art<span className="text-accent">Supply</span>Tracker
          </h1>
          
          <div className="flex gap-4">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"}
              onClick={() => navigate("/")}
            >
              Artists
            </Button>
            <Button 
              variant={location.pathname === "/partners" ? "default" : "ghost"}
              onClick={() => navigate("/partners")}
            >
              Partners
            </Button>
            <Button 
              variant={location.pathname === "/investors" ? "default" : "ghost"}
              onClick={() => navigate("/investors")}
            >
              Investors
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
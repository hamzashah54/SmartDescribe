import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const handleScrollToGenerator = () => {
    const generatorSection = document.getElementById("generator");
    if (generatorSection) {
      generatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
              SD
            </div>
            <span className="text-lg font-semibold text-foreground">
              SmartDescribe
            </span>
          </div>

          {/* Generate Button */}
          <Button
            onClick={handleScrollToGenerator}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-5 gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Generate
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import Navbar from "@/components/Navbar";
import Generator from "@/components/Generator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Generator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
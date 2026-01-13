const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm">
          © {currentYear} SmartDescribe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
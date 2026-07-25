import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Briefcase, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/services", label: "Services", icon: Briefcase },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center max-w-lg">
        <h1 className="mb-2 text-6xl md:text-7xl font-bold text-primary">404</h1>
        <p className="mb-3 text-2xl font-semibold text-foreground">Page not found</p>
        <p className="mb-8 text-muted-foreground">
          The page you're looking for doesn't exist or may have moved. Here are a few ways forward:
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          {links.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;

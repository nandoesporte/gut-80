import { Link, useLocation } from "react-router-dom";
import { Activity, Book, Home, UtensilsCrossed, LineChart } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm fixed bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            icon={<Home className="w-6 h-6" />}
            text="Início"
            active={isActive("/")}
          />
          <NavLink
            to="/symptoms"
            icon={<Activity className="w-6 h-6" />}
            text="Sintomas"
            active={isActive("/symptoms")}
          />
          <NavLink
            to="/diary"
            icon={<UtensilsCrossed className="w-6 h-6" />}
            text="Diário"
            active={isActive("/diary")}
          />
          <NavLink
            to="/education"
            icon={<Book className="w-6 h-6" />}
            text="Educação"
            active={isActive("/education")}
          />
          <NavLink
            to="/progress"
            icon={<LineChart className="w-6 h-6" />}
            text="Progresso"
            active={isActive("/progress")}
          />
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const NavLink = ({ to, icon, text, active }: NavLinkProps) => (
  <Link
    to={to}
    className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-colors ${
      active
        ? "text-primary-500"
        : "text-gray-400 hover:text-primary-500"
    }`}
  >
    {icon}
    <span className="text-xs font-medium">{text}</span>
  </Link>
);

export default Navigation;
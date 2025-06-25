import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SC2 Карто</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/forum"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Форум
            </Link>
            <Link
              to="/articles"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Статьи
            </Link>
            <Link
              to="/docs"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Документация
            </Link>
            <Link
              to="/projects"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Проекты
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={18} />
            </Button>
            <Button variant="outline" size="sm">
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

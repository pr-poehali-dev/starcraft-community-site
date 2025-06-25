import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/forum", icon: "MessageSquare", label: "Форум" },
    { path: "/articles", icon: "BookOpen", label: "Статьи" },
    { path: "/", icon: "Home", label: "Главная" },
    { path: "/docs", icon: "FileText", label: "Документация" },
    { path: "/projects", icon: "Folder", label: "Проекты" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors min-w-0 ${
                isActive
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-600 hover:text-purple-600 hover:bg-gray-50"
              }`}
            >
              <Icon
                name={item.icon as any}
                size={20}
                className={isActive ? "text-purple-600" : "text-gray-600"}
              />
              <span className="text-xs font-medium truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;

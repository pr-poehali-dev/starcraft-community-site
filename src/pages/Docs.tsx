import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import BottomNavigation from "@/components/BottomNavigation";

const Docs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const docSections = [
    {
      title: "Начало работы",
      description: "Основы работы с редактором карт",
      icon: "Play",
      color: "from-green-500 to-emerald-500",
      articles: [
        { title: "Установка и настройка", difficulty: "Легко", time: "5 мин" },
        { title: "Первая карта", difficulty: "Легко", time: "15 мин" },
        { title: "Интерфейс редактора", difficulty: "Легко", time: "10 мин" },
      ],
    },
    {
      title: "Инструменты",
      description: "Детальное описание всех инструментов",
      icon: "Wrench",
      color: "from-blue-500 to-cyan-500",
      articles: [
        { title: "Кисти и текстуры", difficulty: "Средне", time: "20 мин" },
        { title: "Работа со слоями", difficulty: "Средне", time: "25 мин" },
        { title: "Спрайты и объекты", difficulty: "Сложно", time: "30 мин" },
      ],
    },
    {
      title: "Скриптинг",
      description: "Программирование логики карт",
      icon: "Code",
      color: "from-purple-500 to-violet-500",
      articles: [
        { title: "Основы скриптинга", difficulty: "Средне", time: "40 мин" },
        { title: "События и триггеры", difficulty: "Сложно", time: "45 мин" },
        { title: "API редактора", difficulty: "Сложно", time: "60 мин" },
      ],
    },
    {
      title: "Публикация",
      description: "Как поделиться своими картами",
      icon: "Upload",
      color: "from-orange-500 to-red-500",
      articles: [
        { title: "Экспорт карт", difficulty: "Легко", time: "10 мин" },
        { title: "Загрузка в галерею", difficulty: "Легко", time: "15 мин" },
        { title: "Совместная работа", difficulty: "Средне", time: "25 мин" },
      ],
    },
  ];

  const filteredSections = docSections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.articles.some((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легко":
        return "bg-green-100 text-green-800";
      case "Средне":
        return "bg-yellow-100 text-yellow-800";
      case "Сложно":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              📚 Документация
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Полное руководство по работе с редактором карт
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder="Поиск по документации..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSections.map((section, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={section.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {section.title}
                    </CardTitle>
                    <p className="text-gray-600 mt-1">{section.description}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {section.articles.map((article, articleIndex) => (
                    <div
                      key={articleIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">
                          {article.title}
                        </h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge
                            className={getDifficultyColor(article.difficulty)}
                          >
                            {article.difficulty}
                          </Badge>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Icon name="Clock" size={14} className="mr-1" />
                            {article.time}
                          </span>
                        </div>
                      </div>
                      <Icon
                        name="ChevronRight"
                        size={20}
                        className="text-gray-400"
                      />
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-4" variant="outline">
                  Открыть раздел
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSections.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="SearchX"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ничего не найдено
            </h3>
            <p className="text-gray-600">
              Попробуйте изменить поисковый запрос
            </p>
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Docs;

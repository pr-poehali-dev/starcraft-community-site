import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const FeatureCards = () => {
  const features = [
    {
      title: "Форум сообщества",
      description:
        "Задавайте вопросы, делитесь опытом и получайте помощь от экспертов. Интеграция с Discord.",
      icon: "MessageSquare",
      link: "/forum",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "База знаний",
      description:
        "Подробные статьи и туториалы по редактору карт, техникам и лучшим практикам.",
      icon: "BookOpen",
      link: "/articles",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Документация",
      description:
        "Создавайте и поддерживайте документацию для модулей редактора и ваших проектов.",
      icon: "FileText",
      link: "/docs",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Галерея проектов",
      description:
        "Публикуйте свои карты и моды, получайте отзывы и скачивайте работы других авторов.",
      icon: "FolderOpen",
      link: "/projects",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Всё для работы с редактором карт
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Объединяем инструменты, знания и сообщество в одном месте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-gray-50"
                >
                  <Link to={feature.link}>
                    Перейти
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;

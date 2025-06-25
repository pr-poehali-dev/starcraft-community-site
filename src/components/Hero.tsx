import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Добро пожаловать в сообщество
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              картоделов
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Единая платформа для создателей карт и модов StarCraft 2. Делитесь
            знаниями, публикуйте проекты и развивайтесь вместе с сообществом.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать творить
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Изучить документацию
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-500">
            <div className="flex items-center justify-center">
              <Icon name="Users" size={16} className="mr-2" />
              <span>1000+ активных участников</span>
            </div>
            <div className="flex items-center justify-center">
              <Icon name="Map" size={16} className="mr-2" />
              <span>500+ опубликованных карт</span>
            </div>
            <div className="flex items-center justify-center">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              <span>Discord интеграция</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://media.githubusercontent.com/media/user-attachments/assets/starcraft2-hero.mp4"
            type="video/mp4"
          />
          {/* Fallback background */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SC2 Карто
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-lg leading-relaxed">
            Единая платформа для создателей карт и модов StarCraft 2.
            <br />
            Делитесь знаниями, публикуйте проекты и развивайтесь вместе с
            сообществом.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white shadow-2xl"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать творить
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 shadow-2xl"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Изучить документацию
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
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

      {/* Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-30"></div>
    </section>
  );
};

export default Hero;

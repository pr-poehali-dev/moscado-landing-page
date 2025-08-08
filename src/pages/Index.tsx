import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const benefits = [
    {
      icon: "Factory",
      title: "Собственное производство",
      description: "Полный цикл изготовления текстильной продукции из натуральных материалов высокого качества"
    },
    {
      icon: "Truck",
      title: "Оптовые поставки",
      description: "Широкий ассортимент фетра, войлока и хлопковых изделий для вашего производства"
    },
    {
      icon: "Award",
      title: "100% натуральные материалы",
      description: "Экологичная продукция из качественного хлопка, шерсти и других натуральных волокон"
    },
    {
      icon: "Users",
      title: "Надёжное партнёрство",
      description: "Помогаем вашему бизнесу создавать продукцию, которую запомнят и полюбят клиенты"
    }
  ];

  const products = [
    {
      title: "Фетровые изделия",
      category: "Фетр и войлок",
      description: "Высококачественный фетр различных цветов и толщины для промышленного использования",
      features: ["100% шерсть", "Различные плотности", "Широкая цветовая гамма"]
    },
    {
      title: "Хлопковая продукция", 
      category: "Натуральный хлопок",
      description: "Изделия из 100% хлопка для текстильного производства и швейной промышленности",
      features: ["100% хлопок", "Высокая прочность", "Гипоаллергенность"]
    },
    {
      title: "Сопутствующие товары",
      category: "Дополнительные материалы", 
      description: "Полный комплект материалов и фурнитуры для текстильного производства",
      features: ["Фурнитура", "Нитки", "Аксессуары"]
    }
  ];

  const clients = [
    "Швейные фабрики",
    "Мебельные производства", 
    "Рекламные агентства",
    "Творческие мастерские",
    "Промышленные предприятия"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-hospitality-silver via-white to-hospitality-silver">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-hospitality-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-playfair text-2xl font-bold text-hospitality-navy">
              MOSCADO
            </div>
            <div className="hidden md:flex space-x-8 font-source text-hospitality-navy">
              <a href="#home" className="hover:text-hospitality-gold transition-colors">Главная</a>
              <a href="#benefits" className="hover:text-hospitality-gold transition-colors">Преимущества</a>
              <a href="#products" className="hover:text-hospitality-gold transition-colors">Продукция</a>
              <a href="#clients" className="hover:text-hospitality-gold transition-colors">Клиенты</a>
              <a href="#contact" className="hover:text-hospitality-gold transition-colors">Контакты</a>
            </div>
            <Button className="bg-hospitality-gold hover:bg-hospitality-gold/90 text-hospitality-navy font-source font-semibold">
              Запросить прайс
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge className="bg-hospitality-gold/10 text-hospitality-navy border-hospitality-gold">
                  Текстильное производство
                </Badge>
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-hospitality-navy leading-tight">
                  Надёжный партнёр для вашего бизнеса
                </h1>
                <p className="font-source text-xl text-hospitality-gray leading-relaxed">
                  Собственное производство и оптовые поставки текстильной продукции 
                  из натуральных материалов. Широкий ассортимент изделий из 100% хлопка, 
                  фетра, войлока и сопутствующих товаров для вашего производства.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-hospitality-navy hover:bg-hospitality-navy/90 text-white font-source font-semibold px-8">
                  Получить каталог
                </Button>
                <Button size="lg" variant="outline" className="border-hospitality-gold text-hospitality-navy hover:bg-hospitality-gold/10 font-source font-semibold px-8">
                  Смотреть продукцию
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-hospitality-navy">500+</div>
                  <div className="font-source text-sm text-hospitality-gray">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-hospitality-navy">100%</div>
                  <div className="font-source text-sm text-hospitality-gray">Натуральные материалы</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-hospitality-navy">24/7</div>
                  <div className="font-source text-sm text-hospitality-gray">Поддержка клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/1ecf1abc-75cb-4282-8160-5641c0d142aa.jpg" 
                  alt="Текстильное производство" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hospitality-navy/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-hospitality-gold text-hospitality-navy p-4 rounded-xl shadow-lg">
                <div className="font-playfair text-lg font-semibold">Качество</div>
                <div className="font-source text-sm">Собственное производство</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-hospitality-gold/10 text-hospitality-navy border-hospitality-gold mb-4">
              Наши преимущества
            </Badge>
            <h2 className="font-playfair text-4xl font-bold text-hospitality-navy mb-6">
              Почему выбирают Moscado
            </h2>
            <p className="font-source text-xl text-hospitality-gray max-w-3xl mx-auto">
              Мы специализируемся на производстве и поставках высококачественной текстильной продукции 
              для различных отраслей промышленности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-hospitality-gold/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-hospitality-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="text-hospitality-gold" size={28} />
                  </div>
                  <CardTitle className="font-playfair text-xl text-hospitality-navy">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-source text-hospitality-gray text-center leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-hospitality-silver to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-hospitality-navy/10 text-hospitality-navy border-hospitality-navy mb-4">
              Наша продукция
            </Badge>
            <h2 className="font-playfair text-4xl font-bold text-hospitality-navy mb-6">
              Широкий ассортимент текстильных материалов
            </h2>
            <p className="font-source text-xl text-hospitality-gray max-w-3xl mx-auto">
              От натурального хлопка до высококачественного фетра - все необходимые материалы для вашего производства
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 bg-white border-none">
                <CardHeader>
                  <Badge variant="outline" className="border-hospitality-gold text-hospitality-navy w-fit mb-2">
                    {product.category}
                  </Badge>
                  <CardTitle className="font-playfair text-xl text-hospitality-navy">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="font-source text-hospitality-gray leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-hospitality-gold" />
                        <span className="font-source text-sm text-hospitality-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/1e851785-fc60-4617-8a07-f41fef7f1217.jpg" 
                alt="Фетровые материалы" 
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-playfair text-3xl font-bold text-hospitality-navy">
                Качество, проверенное временем
              </h3>
              <p className="font-source text-lg text-hospitality-gray leading-relaxed">
                Наша продукция изготавливается из отборных натуральных материалов с соблюдением 
                всех технологических стандартов. Мы гарантируем стабильное качество и своевременную поставку.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" className="text-hospitality-gold" size={20} />
                  <span className="font-source text-hospitality-gray">Контроль качества на каждом этапе</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Leaf" className="text-hospitality-gold" size={20} />
                  <span className="font-source text-hospitality-gray">Только натуральные материалы</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-hospitality-gold" size={20} />
                  <span className="font-source text-hospitality-gray">Быстрая обработка заказов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-hospitality-gold/10 text-hospitality-navy border-hospitality-gold mb-4">
              Наши клиенты
            </Badge>
            <h2 className="font-playfair text-4xl font-bold text-hospitality-navy mb-6">
              Работаем с различными отраслями
            </h2>
            <p className="font-source text-xl text-hospitality-gray max-w-3xl mx-auto">
              Наша продукция востребована в швейной промышленности, мебельном производстве и творческих индустриях
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-hospitality-gold/20">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-hospitality-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Building" className="text-hospitality-gold" size={24} />
                  </div>
                  <p className="font-source font-semibold text-hospitality-navy">{client}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-hospitality-navy to-hospitality-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-hospitality-gold/20 text-hospitality-gold border-hospitality-gold mb-6">
              Свяжитесь с нами
            </Badge>
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Готовы стать нашим партнёром?
            </h2>
            <p className="font-source text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Получите персональное предложение и каталог нашей продукции. 
              Мы поможем подобрать оптимальные материалы для вашего производства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-hospitality-gold hover:bg-hospitality-gold/90 text-hospitality-navy font-source font-semibold px-8">
                Получить каталог
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-source font-semibold px-8">
                Запросить прайс-лист
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
              <div className="text-center">
                <Icon name="Phone" className="text-hospitality-gold mb-4 mx-auto" size={32} />
                <h3 className="font-source font-semibold mb-2">Телефон</h3>
                <p className="text-white/80">+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <Icon name="Mail" className="text-hospitality-gold mb-4 mx-auto" size={32} />
                <h3 className="font-source font-semibold mb-2">Email</h3>
                <p className="text-white/80">info@moscado.ru</p>
              </div>
              <div className="text-center">
                <Icon name="MapPin" className="text-hospitality-gold mb-4 mx-auto" size={32} />
                <h3 className="font-source font-semibold mb-2">Производство</h3>
                <p className="text-white/80">Москва и область</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hospitality-dark text-white/60 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-playfair text-2xl font-bold text-white mb-4">MOSCADO</div>
            <p className="font-source">© 2024 Moscado. Производство и поставки текстильной продукции.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
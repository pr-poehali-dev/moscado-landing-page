import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const benefits = [
    {
      icon: "Crown",
      title: "Премиальный сервис",
      description: "Элитные решения для гостиниц класса люкс с индивидуальным подходом к каждому клиенту"
    },
    {
      icon: "TrendingUp",
      title: "Рост доходности",
      description: "Увеличение средней выручки на номер до 25% благодаря оптимизации операционных процессов"
    },
    {
      icon: "Shield",
      title: "Надежность системы",
      description: "99.9% времени безотказной работы с комплексной системой резервного копирования"
    },
    {
      icon: "Users",
      title: "Персонализация",
      description: "Индивидуальные решения для каждого типа заведения: отели, спа, банные комплексы"
    }
  ];

  const cases = [
    {
      title: "Отель Метрополь",
      category: "5-звездочный отель",
      result: "+35% выручка",
      description: "Внедрение комплексной системы управления увеличило операционную эффективность"
    },
    {
      title: "Спа-центр Аквамарин",
      category: "Премиум SPA",
      result: "+28% клиентов",
      description: "Автоматизация процессов бронирования и управления клиентской базой"
    },
    {
      title: "Банный комплекс Царь-Баня",
      category: "Банный комплекс",
      result: "+42% загрузка",
      description: "Оптимизация расписания и внедрение системы лояльности"
    }
  ];

  const partners = [
    "Marriott International",
    "Hilton Worldwide",
    "InterContinental Hotels",
    "Radisson Hotel Group",
    "Accor Hotels"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-hospitality-silver via-white to-hospitality-silver">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-hospitality-gold/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-playfair text-2xl font-bold text-hospitality-navy">
              MOSCADO
            </div>
            <div className="hidden md:flex space-x-8 font-source text-hospitality-navy">
              <a href="#home" className="hover:text-hospitality-gold transition-colors">Главная</a>
              <a href="#benefits" className="hover:text-hospitality-gold transition-colors">Преимущества</a>
              <a href="#cases" className="hover:text-hospitality-gold transition-colors">Кейсы</a>
              <a href="#partners" className="hover:text-hospitality-gold transition-colors">Партнеры</a>
              <a href="#contact" className="hover:text-hospitality-gold transition-colors">Контакты</a>
            </div>
            <Button className="bg-hospitality-gold hover:bg-hospitality-gold/90 text-hospitality-navy font-source font-semibold">
              Связаться с нами
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
                  Для индустрии гостеприимства
                </Badge>
                <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-hospitality-navy leading-tight">
                  Премиальные решения для директоров отелей
                </h1>
                <p className="font-source text-xl text-hospitality-gray leading-relaxed">
                  Увеличиваем прибыльность гостиниц, банных комплексов и спа-центров 
                  с помощью инновационных технологий управления и автоматизации процессов
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-hospitality-navy hover:bg-hospitality-navy/90 text-white font-source font-semibold px-8">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-hospitality-gold text-hospitality-navy hover:bg-hospitality-gold/10 font-source font-semibold px-8">
                  Смотреть кейсы
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-hospitality-navy">200+</div>
                  <div className="font-source text-sm text-hospitality-gray">Успешных проектов</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-hospitality-navy">98%</div>
                  <div className="font-source text-sm text-hospitality-gray">Клиенты остаются</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-3xl font-bold text-hospitality-navy">15+</div>
                  <div className="font-source text-sm text-hospitality-gray">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/e7ae4931-5015-4e12-ade1-42a487dfd02d.jpg" 
                  alt="Премиальный отель" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hospitality-navy/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-hospitality-gold text-hospitality-navy p-4 rounded-xl shadow-lg">
                <div className="font-playfair text-lg font-semibold">+35%</div>
                <div className="font-source text-sm">Средний рост выручки</div>
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
              Почему директора выбирают Moscado
            </h2>
            <p className="font-source text-xl text-hospitality-gray max-w-3xl mx-auto">
              Мы понимаем специфику индустрии гостеприимства и предлагаем решения, 
              которые реально работают в российских реалиях
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

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gradient-to-br from-hospitality-silver to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-hospitality-navy/10 text-hospitality-navy border-hospitality-navy mb-4">
              Кейсы клиентов
            </Badge>
            <h2 className="font-playfair text-4xl font-bold text-hospitality-navy mb-6">
              Истории успеха наших клиентов
            </h2>
            <p className="font-source text-xl text-hospitality-gray max-w-3xl mx-auto">
              Реальные результаты внедрения наших решений в ведущих заведениях России
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((caseStudy, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 bg-white border-none">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-hospitality-gold text-hospitality-navy">
                      {caseStudy.category}
                    </Badge>
                    <div className="font-playfair text-2xl font-bold text-hospitality-gold">
                      {caseStudy.result}
                    </div>
                  </div>
                  <CardTitle className="font-playfair text-xl text-hospitality-navy">
                    {caseStudy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-source text-hospitality-gray leading-relaxed">
                    {caseStudy.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-hospitality-navy hover:bg-hospitality-navy/90 text-white font-source font-semibold px-8">
              Посмотреть все кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-hospitality-gold/10 text-hospitality-navy border-hospitality-gold mb-4">
              Наши партнеры
            </Badge>
            <h2 className="font-playfair text-4xl font-bold text-hospitality-navy mb-6">
              Нам доверяют лидеры индустрии
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="font-source font-semibold text-hospitality-gray hover:text-hospitality-navy transition-colors cursor-pointer">
                  {partner}
                </div>
              </div>
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
              Готовы увеличить прибыльность вашего заведения?
            </h2>
            <p className="font-source text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Получите персональную консультацию и план внедрения решений для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-hospitality-gold hover:bg-hospitality-gold/90 text-hospitality-navy font-source font-semibold px-8">
                Заказать консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-source font-semibold px-8">
                Скачать презентацию
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
                <h3 className="font-source font-semibold mb-2">Офис</h3>
                <p className="text-white/80">Москва, Тверская 15</p>
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
            <p className="font-source">© 2024 Moscado. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
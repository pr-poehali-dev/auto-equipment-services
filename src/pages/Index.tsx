import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Settings',
      title: 'Установка дополнительного оборудования',
      description: 'Профессиональная установка автомобильной электроники, сигнализаций, мультимедиа систем'
    },
    {
      icon: 'Sparkles',
      title: 'Услуги детейлинга',
      description: 'Комплексная химчистка, полировка кузова, керамическое покрытие премиум-класса'
    },
    {
      icon: 'Shield',
      title: 'Бронирование авто',
      description: 'Защитные пленки для кузова, антигравийное покрытие, бронирование оптики'
    },
    {
      icon: 'Lightbulb',
      title: 'Восстановление и тюнинг оптики',
      description: 'Реставрация фар, установка LED/Xenon, тонировка оптики, защитные покрытия'
    }
  ];

  const pricing = [
    { name: 'Детейлинг Базовый', price: 'от 8 000 ₽', features: ['Химчистка салона', 'Мойка кузова', 'Чернение резины'] },
    { name: 'Детейлинг Премиум', price: 'от 25 000 ₽', features: ['Полная химчистка', 'Полировка кузова', 'Керамика 1 слой', 'Чистка дисков'] },
    { name: 'Бронирование', price: 'от 35 000 ₽', features: ['PPF пленка', 'Капот + фары', 'Гарантия 5 лет'] },
    { name: 'Тюнинг оптики', price: 'от 12 000 ₽', features: ['Восстановление', 'LED модули', 'Покрытие UV'] }
  ];

  const portfolio = [
    { image: '/img/b09666f5-0647-47d7-81d2-23ad13d85a6c.jpg', title: 'Керамическое покрытие Audi Q7' },
    { image: '/img/c0b0195e-f02b-46cf-b835-6c63ecde7c86.jpg', title: 'Восстановление оптики BMW X5' },
    { image: '/img/17c34415-fc3e-499a-bae4-a8ee4574a0d3.jpg', title: 'Бронирование PPF Mercedes GLE' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AutoPro
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
            Ваш автомобиль<br />заслуживает лучшего
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональный детейлинг, бронирование и тюнинг оптики с использованием инновационных технологий и премиальных материалов
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на услугу
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-primary hover:bg-primary/10">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Прайс-лист</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((item, index) => (
              <Card key={index} className="hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{item.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">{item.price}</div>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-secondary mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Наши работы</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((work, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all">
                <div className="relative overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <h3 className="text-xl font-heading font-semibold text-white">{work.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Свяжитесь с нами</h2>
          <Card className="border-primary/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Телефон</label>
                  <Input 
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, какая услуга вас интересует..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-background border-border min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg h-12">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-col gap-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@autopro.ru</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>г. Москва, ул. Автомобильная, д. 1</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 AutoPro. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
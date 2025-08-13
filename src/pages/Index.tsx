import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="/img/b3955dd7-d2e9-4d17-9651-5f0d34c9ca8a.jpg" 
          alt="Sevkabel Port Evening"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-montserrat font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            PARTY
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300 font-light">
            В СЕВКАБЕЛЬ ПОРТУ
          </p>
          <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
            Обещаем пьянки гулянки в самом атмосферном месте Питера
          </p>
          
          {/* Date Selection */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={() => setSelectedDate('15.08')}
              variant={selectedDate === '15.08' ? 'default' : 'outline'}
              className={`text-lg py-6 px-8 transition-all duration-300 ${
                selectedDate === '15.08' 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
              }`}
            >
              15 АВГУСТА
            </Button>
            <Button
              onClick={() => setSelectedDate('18.08')}
              variant={selectedDate === '18.08' ? 'default' : 'outline'}
              className={`text-lg py-6 px-8 transition-all duration-300 ${
                selectedDate === '18.08' 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
              }`}
            >
              18 АВГУСТА
            </Button>
          </div>
          
          {selectedDate && (
            <div className="animate-fade-in">
              <Button className="bg-red-500 hover:bg-red-600 text-white text-xl py-4 px-8">
                ЗАПИСАТЬСЯ НА {selectedDate}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-gray-900" id="program">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">ПРОГРАММА</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Music" className="text-red-500" size={32} />
                  <CardTitle className="text-white">DJ СЕТЫ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Лучшие диджеи города создадут незабываемую атмосферу танцпола</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Martini" className="text-red-500" size={32} />
                  <CardTitle className="text-white">БАР</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Крафтовые коктейли и премиальный алкоголь от лучших барменов</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Camera" className="text-red-500" size={32} />
                  <CardTitle className="text-white">ФОТОЗОНА</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Стильные локации для незабываемых кадров в индустриальном стиле</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-black" id="location">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">МЕСТО</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/98650ac5-b393-4a79-9986-72a40a68e15e.jpg" 
                alt="Sevkabel Port Interior"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-red-500">СЕВКАБЕЛЬ ПОРТ</h3>
              <p className="text-xl text-gray-300">
                Легендарное пространство на берегу Невы в бывшем заводе по производству кабелей
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-red-500" size={24} />
                  <span className="text-lg">Кожевенная линия, 40</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-red-500" size={24} />
                  <span className="text-lg">Начало в 21:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" className="text-red-500" size={24} />
                  <span className="text-lg">18+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dates Section */}
      <section className="py-20 bg-gray-900" id="dates">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">ДАТЫ</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 p-8">
              <CardContent className="space-y-4">
                <div className="text-6xl font-bold text-red-500">15</div>
                <div className="text-2xl">АВГУСТА</div>
                <div className="text-lg text-gray-300">ЧЕТВЕРГ</div>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-lg py-3">
                  ВЫБРАТЬ ДАТУ
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8">
              <CardContent className="space-y-4">
                <div className="text-6xl font-bold text-red-500">18</div>
                <div className="text-2xl">АВГУСТА</div>
                <div className="text-lg text-gray-300">ВОСКРЕСЕНЬЕ</div>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-lg py-3">
                  ВЫБРАТЬ ДАТУ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-20 bg-black" id="contacts">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">КОНТАКТЫ</h2>
          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-700 p-8">
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Phone" className="text-red-500" size={24} />
                    <span className="text-xl">+7 (812) 123-45-67</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Mail" className="text-red-500" size={24} />
                    <span className="text-xl">party@sevkabel.ru</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Instagram" className="text-red-500" size={24} />
                    <span className="text-xl">@sevkabel_party</span>
                  </div>
                </div>
                <Button className="w-full max-w-md mx-auto bg-red-500 hover:bg-red-600 text-xl py-4">
                  ЗАБРОНИРОВАТЬ МЕСТО
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p className="text-gray-500">© 2024 Sevkabel Party. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
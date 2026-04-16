'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { addToCart } from '@/lib/cart';

export default function Home() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [notification, setNotification] = useState('');

  const services = [
    { id: 1, name: 'Бесконтактная мойка', price: 500, description: 'Деликатная очистка кузова без повреждений', fullDescription: 'Бесконтактная мойка - это современный и безопасный способ очистки автомобиля. Специальная пена растворяет грязь, не повреждая лакокрасочное покрытие. Идеально подходит для регулярного ухода за автомобилем.' },
    { id: 2, name: 'Мойка с воском', price: 800, description: 'Мойка + защитное покрытие воском', fullDescription: 'Комплексная услуга включает бесконтактную мойку и нанесение защитного воска. Воск создает защитный слой, отталкивающий воду и грязь, придает блеск кузову и защищает от мелких царапин.' },
    { id: 3, name: 'Полировка кузова', price: 1500, description: 'Восстановление блеска и защита', fullDescription: 'Профессиональная полировка удаляет мелкие царапины, потертости и окисление лакокрасочного покрытия. Восстанавливает первоначальный блеск автомобиля и создает защитный слой на несколько месяцев.' },
    { id: 4, name: 'Химчистка салона', price: 2000, description: 'Глубокая очистка сидений и ковриков', fullDescription: 'Глубокая химчистка салона включает очистку сидений, ковриков, потолка и пластиковых элементов. Удаляем пятна, неприятные запахи и восстанавливаем свежесть интерьера. Используем профессиональные средства безопасные для здоровья.' },
    { id: 5, name: 'Мойка двигателя', price: 1000, description: 'Профессиональная очистка моторного отсека', fullDescription: 'Безопасная мойка двигателя с защитой электрических компонентов. Удаляем масляные загрязнения, пыль и грязь. Чистый двигатель лучше охлаждается и легче диагностируется при техническом обслуживании.' },
    { id: 6, name: 'Комплексная мойка', price: 3500, description: 'Полный комплекс услуг', fullDescription: 'Максимальный уход за автомобилем! Включает: бесконтактную мойку, мойку с воском, химчистку салона, мойку двигателя и чернение шин. Ваш автомобиль будет выглядеть как новый!' },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Алексей Иванов',
      rating: 5,
      text: 'Отличная мойка! Машина блестит как новая. Персонал вежливый, работают быстро и качественно. Рекомендую!',
      date: '15 февраля 2024'
    },
    {
      id: 2,
      name: 'Мария Петрова',
      rating: 5,
      text: 'Пользуюсь услугами уже год. Всегда довольна результатом. Особенно нравится химчистка салона - убирают даже самые сложные пятна.',
      date: '8 февраля 2024'
    },
    {
      id: 3,
      name: 'Дмитрий Сидоров',
      rating: 4,
      text: 'Хорошее соотношение цены и качества. Бесконтактная мойка на высоте. Единственный минус - иногда приходится ждать в очереди.',
      date: '1 февраля 2024'
    },
    {
      id: 4,
      name: 'Елена Смирнова',
      rating: 5,
      text: 'Лучшая автомойка в районе! Делали полировку кузова - результат превзошел все ожидания. Царапины исчезли, машина выглядит как из салона.',
      date: '25 января 2024'
    },
    {
      id: 5,
      name: 'Игорь Козлов',
      rating: 5,
      text: 'Профессиональный подход к делу. Мойка двигателя выполнена аккуратно и качественно. Цены адекватные, буду обращаться еще.',
      date: '18 января 2024'
    },
    {
      id: 6,
      name: 'Ольга Новикова',
      rating: 5,
      text: 'Очень довольна комплексной мойкой! Сделали все быстро, качественно и по разумной цене. Теперь только сюда!',
      date: '10 января 2024'
    }
  ];

  const handleAddToCart = (service: any) => {
    addToCart({ id: service.id, name: service.name, price: service.price });
    setNotification(`${service.name} добавлена в корзину!`);
    setSelectedService(null);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {notification && (
        <div className="fixed top-20 right-4 glass-card px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-xl z-50 animate-bounce">
          <p className="text-green-400 font-semibold text-sm sm:text-base">{notification}</p>
        </div>
      )}

      {/* Модальное окно */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-2xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4 sm:mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedService.name}</h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white text-2xl sm:text-3xl leading-none"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
              {selectedService.fullDescription}
            </p>
            
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <span className="text-gray-300 text-base sm:text-lg">Стоимость:</span>
              <span className="text-3xl sm:text-4xl font-bold text-white">{selectedService.price}₽</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => handleAddToCart(selectedService)}
                className="flex-1 bg-blue-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-xl text-base sm:text-lg"
              >
                Добавить в корзину
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="sm:w-auto px-6 bg-gray-700 text-white py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-600 transition text-base sm:text-lg"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-16 flex-grow">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg px-2">
            Профессиональная мойка вашего автомобиля
          </h2>
          <p className="text-lg sm:text-2xl text-gray-300 drop-shadow">
            Быстро, качественно, доступно
          </p>
        </div>

        {/* Все услуги */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 drop-shadow-lg">
            Наши услуги
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="glass-card p-6 sm:p-8 rounded-2xl shadow-2xl hover:scale-105 transition transform cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{service.name}</h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{service.description}</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">{service.price}₽</p>
                <button className="w-full bg-blue-600 text-white py-2 sm:py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg text-sm sm:text-base">
                  Подробнее
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Отзывы */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 drop-shadow-lg">
            Отзывы наших клиентов
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="glass-card p-5 sm:p-6 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h4 className="text-lg sm:text-xl font-bold text-white">{review.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                  {review.text}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

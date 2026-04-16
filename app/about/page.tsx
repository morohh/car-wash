import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="container mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-16 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 drop-shadow-lg">О нас</h2>

          <div className="glass-card p-6 sm:p-10 rounded-2xl shadow-2xl mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Наша история</h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Мы работаем на рынке автомобильных услуг уже более 10 лет. За это время мы заслужили 
              доверие тысяч клиентов благодаря качественному сервису и профессиональному подходу к каждому автомобилю.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Наша команда состоит из опытных специалистов, которые постоянно совершенствуют свои навыки 
              и следят за новейшими технологиями в области автомобильной мойки и детейлинга.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="glass-card p-5 sm:p-6 rounded-2xl shadow-xl text-center">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">10+ лет</h4>
              <p className="text-gray-300 text-sm sm:text-base">на рынке</p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl shadow-xl text-center">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">5000+</h4>
              <p className="text-gray-300 text-sm sm:text-base">довольных клиентов</p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl shadow-xl text-center">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">4.9/5</h4>
              <p className="text-gray-300 text-sm sm:text-base">средний рейтинг</p>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Наши преимущества</h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-base sm:text-lg">
              <li className="flex items-start">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3 text-white">✓</span>
                <span>Профессиональное оборудование и качественная химия</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3 text-white">✓</span>
                <span>Опытные мастера с многолетним стажем</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3 text-white">✓</span>
                <span>Быстрое обслуживание без потери качества</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3 text-white">✓</span>
                <span>Гибкая система скидок и бонусов</span>
              </li>
              <li className="flex items-start">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3 text-white">✓</span>
                <span>Удобное расположение и график работы 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

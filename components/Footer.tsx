import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="glass mt-auto py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">АвтоМойка</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Профессиональная мойка и уход за вашим автомобилем с 2014 года
            </p>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 hover:text-white transition">
                  Корзина
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="text-gray-400">
                <span className="text-blue-400">Телефон:</span>
                <br />
                <a href="tel:+79991234567" className="hover:text-white transition">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="text-gray-400">
                <span className="text-blue-400">Email:</span>
                <br />
                <a href="mailto:info@avtomoyka.ru" className="hover:text-white transition">
                  info@avtomoyka.ru
                </a>
              </li>
              <li className="text-gray-400">
                <span className="text-blue-400">Адрес:</span>
                <br />
                г. Москва, ул. Примерная, 123
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Мы в соцсетях</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a
                  href="https://vk.com/avtomoyka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.41c-.37.37-1.05.63-1.67.63-.93 0-1.31-.47-2.42-1.58-.85-.85-1.23-1.01-1.45-1.01-.29 0-.38.09-.38.52v1.43c0 .38-.12.61-1.12.61-1.81 0-3.82-1.09-5.24-3.13-2.14-3.02-2.73-5.31-2.73-5.78 0-.23.09-.44.52-.44h1.43c.39 0 .54.18.69.59.78 2.38 2.09 4.46 2.63 4.46.2 0 .29-.09.29-.59v-2.28c-.06-1.01-.59-1.09-.59-1.45 0-.18.15-.37.39-.37h2.25c.33 0 .45.18.45.56v3.08c0 .33.15.45.24.45.2 0 .36-.12.73-.49 1.13-1.27 1.94-3.23 1.94-3.23.11-.23.29-.44.68-.44h1.43c.43 0 .52.22.43.56-.16.78-1.94 3.38-1.94 3.38-.16.26-.22.38 0 .68.16.22.69.68 1.05 1.08.65.73 1.15 1.34 1.28 1.76.14.43-.07.65-.5.65z"/>
                  </svg>
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 АвтоМойка. Все права защищены.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Работаем ежедневно с 8:00 до 22:00
          </p>
        </div>
      </div>
    </footer>
  );
}

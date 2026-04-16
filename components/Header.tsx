'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, [pathname]);

  useEffect(() => {
    // Закрываем меню при смене страницы
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    window.location.href = '/';
  };

  return (
    <nav className="glass fixed w-full top-0 z-50 p-3 sm:p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
          АвтоМойка
        </Link>

        {/* Десктопное меню */}
        <div className="hidden md:flex items-center gap-3 sm:gap-6 text-sm sm:text-base">
          <Link href="/about" className="text-white hover:text-blue-300 transition">
            О нас
          </Link>
          <Link href="/cart" className="text-white hover:text-blue-300 transition">
            Корзина
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="text-white hover:text-blue-300 transition">
                Профиль
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 text-white font-semibold transition"
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white hover:text-blue-300 transition">
                Вход
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Регистрация
              </Link>
            </>
          )}
        </div>

        {/* Кнопка бургер-меню для мобильных */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
          aria-label="Меню"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Мобильное выпадающее меню */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 glass-card rounded-lg overflow-hidden">
          <div className="flex flex-col">
            <Link
              href="/about"
              className="text-white hover:bg-white/10 px-4 py-3 transition border-b border-gray-700"
            >
              О нас
            </Link>
            <Link
              href="/cart"
              className="text-white hover:bg-white/10 px-4 py-3 transition border-b border-gray-700"
            >
              Корзина
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-white hover:bg-white/10 px-4 py-3 transition border-b border-gray-700"
                >
                  Профиль
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-white/10 px-4 py-3 transition text-left"
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white hover:bg-white/10 px-4 py-3 transition border-b border-gray-700"
                >
                  Вход
                </Link>
                <Link
                  href="/register"
                  className="text-white hover:bg-white/10 px-4 py-3 transition"
                >
                  Регистрация
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

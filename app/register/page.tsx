'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      setError(data.error || 'Ошибка регистрации');
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-md mx-auto glass-card p-6 sm:p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-blue-300">Регистрация</h2>
          
          {error && (
            <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-gray-300 mb-2 font-semibold text-sm sm:text-base">Имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 sm:py-3 bg-gray-800/50 border-2 border-blue-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-semibold text-sm sm:text-base">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 sm:py-3 bg-gray-800/50 border-2 border-blue-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-semibold text-sm sm:text-base">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 sm:py-3 bg-gray-800/50 border-2 border-blue-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white text-sm sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 sm:py-3 rounded-lg hover:scale-105 transition transform font-semibold text-base sm:text-lg shadow-xl"
            >
              Зарегистрироваться
            </button>
          </form>

          <p className="text-center mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base">
            Уже есть аккаунт?{' '}
            <Link href="/login" className="text-blue-400 hover:underline font-semibold">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

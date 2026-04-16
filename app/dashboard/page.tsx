'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import { getOrders, Order } from '@/lib/orders';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
    } else {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setOrders(getOrders(parsedUser.email));
    }
  }, [router]);

  const getStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'В обработке';
      case 'completed':
        return 'Завершен';
      case 'cancelled':
        return 'Отменен';
      default:
        return status;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-400';
      case 'completed':
        return 'text-green-400';
      case 'cancelled':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-white text-center drop-shadow-lg">Личный кабинет</h2>
          
          <div className="glass-card p-6 sm:p-10 rounded-2xl shadow-2xl mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Добро пожаловать, {user.name}!</h3>
            <p className="text-gray-300 text-base sm:text-lg">Email: {user.email}</p>
          </div>

          <div className="glass-card p-6 sm:p-10 rounded-2xl shadow-2xl">
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <h4 className="text-2xl sm:text-3xl font-bold text-white">История заказов</h4>
              <Link 
                href="/"
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-sm sm:text-base"
              >
                Новый заказ
              </Link>
            </div>

            {orders.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-300 mb-6 text-base sm:text-lg">У вас пока нет заказов</p>
                <Link 
                  href="/"
                  className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition inline-block font-semibold text-sm sm:text-base"
                >
                  Перейти к услугам
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="bg-gray-800/50 p-4 sm:p-6 rounded-xl border border-gray-700">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-3 sm:gap-4 mb-4">
                      <div>
                        <p className="text-lg sm:text-xl font-bold text-white mb-1">Заказ {order.id}</p>
                        <p className="text-sm text-gray-300">
                          {new Date(order.date).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`font-semibold text-sm sm:text-base ${getStatusColor(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-white">{order.total}₽</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm sm:text-base">
                          <span className="text-gray-300">
                            {item.name} x {item.quantity}
                          </span>
                          <span className="text-gray-300">{item.price * item.quantity}₽</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

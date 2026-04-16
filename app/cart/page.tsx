'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { getCart, removeFromCart, clearCart, getCartTotal, CartItem } from '@/lib/cart';
import { addOrder } from '@/lib/orders';

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const router = useRouter();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id: number) => {
    const updatedCart = removeFromCart(id);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
      return;
    }

    const userData = JSON.parse(user);
    const orderNum = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Сохраняем заказ
    addOrder({
      id: orderNum,
      userEmail: userData.email,
      items: cart,
      total: getCartTotal(),
      date: new Date().toISOString(),
      status: 'pending'
    });

    setOrderNumber(orderNum);
    setOrderPlaced(true);
    clearCart();
    setCart([]);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen">
        <Header />

        <main className="container mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-16">
          <div className="max-w-2xl mx-auto glass-card p-8 sm:p-12 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Спасибо за заказ!</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6">Ваш заказ успешно оформлен</p>
            <div className="bg-blue-900/30 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-blue-500/30">
              <p className="text-gray-300 mb-2 text-sm sm:text-base">Номер заказа:</p>
              <p className="text-2xl sm:text-3xl font-bold text-white">{orderNumber}</p>
            </div>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">Мы свяжемся с вами в ближайшее время для подтверждения</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/dashboard"
                className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block text-sm sm:text-base"
              >
                Мои заказы
              </Link>
              <Link 
                href="/"
                className="bg-gray-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-600 transition inline-block text-sm sm:text-base"
              >
                На главную
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12 drop-shadow-lg">Корзина</h2>

        {cart.length === 0 ? (
          <div className="max-w-2xl mx-auto glass-card p-8 sm:p-12 rounded-2xl shadow-2xl text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Корзина пуста</h3>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">Добавьте услуги из каталога</p>
            <Link 
              href="/"
              className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-block text-sm sm:text-base"
            >
              Перейти к услугам
            </Link>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {cart.map((item) => (
                <div key={item.id} className="glass-card p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row justify-between sm:items-center gap-3 sm:gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.name}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">Количество: {item.quantity}</p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
                    <p className="text-xl sm:text-2xl font-bold text-white">{item.price * item.quantity}₽</p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 transition text-sm sm:text-base"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-2xl">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <span className="text-xl sm:text-2xl font-bold text-white">Итого:</span>
                <span className="text-3xl sm:text-4xl font-bold text-white">{getCartTotal()}₽</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold hover:bg-blue-700 transition shadow-xl"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

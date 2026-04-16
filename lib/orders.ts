export interface Order {
  id: string;
  userEmail: string;
  items: Array<{
    id: number;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  date: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export function getOrders(userEmail: string): Order[] {
  if (typeof window === 'undefined') return [];
  const orders = localStorage.getItem('orders');
  const allOrders: Order[] = orders ? JSON.parse(orders) : [];
  return allOrders.filter(order => order.userEmail === userEmail);
}

export function getAllOrders(): Order[] {
  if (typeof window === 'undefined') return [];
  const orders = localStorage.getItem('orders');
  return orders ? JSON.parse(orders) : [];
}

export function addOrder(order: Order) {
  if (typeof window === 'undefined') return;
  const orders = getAllOrders();
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function updateOrderStatus(orderId: string, status: Order['status']) {
  if (typeof window === 'undefined') return;
  const orders = getAllOrders();
  const orderIndex = orders.findIndex(o => o.id === orderId);
  if (orderIndex !== -1) {
    orders[orderIndex].status = status;
    localStorage.setItem('orders', JSON.stringify(orders));
  }
}

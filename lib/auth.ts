// Серверное хранилище пользователей (в памяти)
// В продакшене используйте базу данных
export interface User {
  email: string;
  password: string;
  name: string;
}

// Хранилище на сервере
const users: User[] = [];

export function registerUser(email: string, password: string, name: string): boolean {
  if (users.find(u => u.email === email)) {
    return false;
  }
  users.push({ email, password, name });
  return true;
}

export function loginUser(email: string, password: string): User | null {
  const user = users.find(u => u.email === email && u.password === password);
  return user || null;
}

export function getAllUsers(): User[] {
  return users;
}

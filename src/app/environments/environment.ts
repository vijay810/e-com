export const environment = {
  production: false,
  apiUrl: 'https://dummyjson.com',

  roles: {
    admin: 'ADMIN',
    user: 'USER'
  },

  users: [
    {
      username: 'admin',
      password: 'admin123',
      role: 'ADMIN'
    },
    {
      username: 'user',
      password: 'user123',
      role: 'USER'
    }
  ]
};
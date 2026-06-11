import { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = () => {

  const user = JSON.parse(
    localStorage.getItem('user') || '{}'
  );

  return user.role === 'USER';
};
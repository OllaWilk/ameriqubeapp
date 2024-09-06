import Cookies from 'js-cookie';

export const handleRemoveCookies = (): void => {
  const allCookies = Cookies.get();
  Object.keys(allCookies).forEach((cookie) => Cookies.remove(cookie));
  console.log('All cookies removed:', allCookies);
  window.location.reload();
};

export const handleAcceptCookies = (): void => {
  Cookies.set('userAcceptedCookies', 'true', { expires: 365 });
  window.location.reload();
};

export const hasUserAcceptedCookies = (): boolean => {
  return Cookies.get('userAcceptedCookies') === 'true';
};

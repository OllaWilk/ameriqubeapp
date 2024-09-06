import Cookies from 'js-cookie';

export const handleRemoveCookies = (): void => {
  const allCookies = Cookies.get(); // Pobierz wszystkie ciasteczka
  Object.keys(allCookies).forEach((cookie) => Cookies.remove(cookie)); // Usuń każde ciasteczko
  console.log('All cookies removed:', allCookies);
  window.location.reload(); // Przeładuj stronę, aby zmiany były widoczne
};

export const handleAcceptCookies = (): void => {
  Cookies.set('userAcceptedCookies', 'true', { expires: 365 }); // Zapisz ciasteczko na 365 dni
  window.location.reload(); // Przeładuj stronę, aby zmiany były widoczne
};

export const hasUserAcceptedCookies = (): boolean => {
  return Cookies.get('userAcceptedCookies') === 'true';
};

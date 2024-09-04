import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { LanguagesType, Region, RegionType } from '../types/navigation-types';

const LANGUAGE_COOKIE = 'app_language';
const REGION_COOKIE = 'app_region';
const ACCEPTED_COOKIES = 'userAcceptedCookies';

export const useLanguageAndRegionCookie = () => {
  const { i18n } = useTranslation();

  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(() => {
    return Cookies.get(ACCEPTED_COOKIES) === 'true';
  });

  //Check cookies or set default values
  const initialLanguage: LanguagesType = cookiesAccepted
    ? (Cookies.get(LANGUAGE_COOKIE) as LanguagesType) || i18n.language
    : (i18n.language as LanguagesType);

  const initialRegion: RegionType = cookiesAccepted
    ? (Cookies.get(REGION_COOKIE) as RegionType) || Region.USA
    : Region.USA;

  // Set state based on initial values
  const [language, setLanguage] = useState<LanguagesType>(initialLanguage);
  const [region, setRegion] = useState<RegionType>(initialRegion);

  const changeLanguage = useCallback(
    (lang: LanguagesType) => {
      i18n.changeLanguage(lang);
      setLanguage(lang);
      cookiesAccepted && Cookies.set(LANGUAGE_COOKIE, lang, { expires: 365 }); //save cookies for 1 year
    },
    [i18n, setLanguage, cookiesAccepted]
  );

  const changeRegion = useCallback(
    (reg: RegionType) => {
      setRegion(reg);
      cookiesAccepted && Cookies.set(REGION_COOKIE, reg, { expires: 365 }); //save cookies for 1 year
    },
    [cookiesAccepted]
  );

  console.log(region);
  const acceptCookies = useCallback(() => {
    setCookiesAccepted(true);
    Cookies.set(ACCEPTED_COOKIES, 'true', { expires: 365 }); // save cookie acceptance for 1 year
    Cookies.set(LANGUAGE_COOKIE, language, { expires: 365 });
    Cookies.set(REGION_COOKIE, region, { expires: 365 });
  }, [language, region]);

  return {
    language,
    changeLanguage,
    region,
    changeRegion,
    cookiesAccepted,
    acceptCookies,
  };
};

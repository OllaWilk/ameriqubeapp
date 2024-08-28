import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { LanguagesType, Region, RegionType } from '../types/navigation-types';

const LANGUAGE_COOKIE = 'app_language';
const REGION_COOKIE = 'app_region';

export const useLanguageAndRegionCookie = () => {
  const { i18n } = useTranslation();

  const initialLanguage =
    (Cookies.get(LANGUAGE_COOKIE) as LanguagesType) ||
    (i18n.language as LanguagesType);
  const initialRegion = (Cookies.get(REGION_COOKIE) as RegionType) || Region.EU;

  const [language, setLanguage] = useState<LanguagesType>(initialLanguage);
  const [region, setRegion] = useState<RegionType>(initialRegion);

  const changeLanguage = useCallback(
    (lang: LanguagesType) => {
      i18n.changeLanguage(lang);
      setLanguage(lang);
      Cookies.set(LANGUAGE_COOKIE, lang, { expires: 365 }); //save cookies for 1 year
    },
    [i18n, setLanguage]
  );

  const changeRegion = (reg: RegionType) => {
    setRegion(reg);
    Cookies.set(REGION_COOKIE, reg, { expires: 365 }); //save cookies for 1 year
  };

  useEffect(() => {
    changeLanguage(language);
    changeRegion(region);
  }, [language, region, changeLanguage]);

  return {
    language,
    changeLanguage,
    region,
    changeRegion,
  };
};

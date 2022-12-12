import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react'
 

/**
 * Checks for cases when user's preferred locale is set to locale
 * construct like 'en-US', 'ro-MD', etc. and redirects to a 
 * supported version of the website with pre-built pages
 * 
 * @returns locale, otherLocales, switchToLocale
 */


const useLocale = () => {
    const router = useRouter();
    const localeCookie = 'NEXT_LOCALE';
    const cookieLang = getCookie(localeCookie)

    const supportedLocales = ['ro', 'ru', 'en'];
  
    const isSupportedLocale = supportedLocales.filter(locale => new RegExp(`^${locale}`, 'i').test(router.locale || ''));
  
    const currentLocale = (typeof cookieLang === 'string' ? cookieLang : isSupportedLocale?.[0]) || 'RO';
    
    const [ userLocale, setUserLocale ] = useState<string>(currentLocale);

    const otherLocales = supportedLocales.filter(locale => locale !== currentLocale);
  
    const switchToLocale = useCallback(
      (locale: string) => {
        const path = router.asPath;
  
        setCookie(localeCookie, locale);

        setUserLocale(locale);

        return router.push(path, path, { locale });
      },
      [router]
    );
  
    useEffect(() => {
      setUserLocale(currentLocale);
    }, [])
  
    return {
        userLocale,
        otherLocales,
        switchToLocale
    }
}

export default useLocale;
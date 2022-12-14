const detectorOptions = {
    // order and from where user language should be detected
    order: ['path', 'localStorage', 'navigator'],
  
    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,
  
    // cache user language on
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
  
    // optional expire and domain for set cookie
    cookieMinutes: 10,
    cookieDomain: 'poczatek.info',
  
    // optional htmlTag with lang attribute, the default is:
    htmlTag: document.documentElement,
  
    // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
    cookieOptions: { path: '/', sameSite: 'strict' }
  }

  export default detectorOptions;
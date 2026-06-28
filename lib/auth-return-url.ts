export function getAuthReturnUrl() {
  if (typeof window === 'undefined') return '/';
  return `${window.location.pathname}${window.location.search}${window.location.hash}` || '/';
}

export function authReturnProps(returnUrl = getAuthReturnUrl()) {
  return {
    forceRedirectUrl: returnUrl,
    fallbackRedirectUrl: returnUrl,
    signInForceRedirectUrl: returnUrl,
    signInFallbackRedirectUrl: returnUrl,
    signUpForceRedirectUrl: returnUrl,
    signUpFallbackRedirectUrl: returnUrl,
  };
}

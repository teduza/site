/**
 * Resolves asset paths correctly whether hosted on:
 * - GitHub Pages subpath (e.g. teduza.github.io/site/)
 * - Custom domain root (e.g. sarkisian.site/)
 * - Localhost / preview environment
 */
export const getAssetPath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (typeof window !== 'undefined' && window.location.pathname.startsWith('/site')) {
    return `/site${cleanPath}`;
  }
  return cleanPath;
};

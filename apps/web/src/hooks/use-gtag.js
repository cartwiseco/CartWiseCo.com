import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useGtag() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: location.pathname + location.search,
    });
  }, [location]);
}

import { useState, useEffect } from 'react';

export type OS = 'windows' | 'macos' | 'linux';

export function useOS() {
  const [os, setOs] = useState<OS>('windows');

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('mac')) {
      setOs('macos');
    } else if (userAgent.includes('linux') || userAgent.includes('x11')) {
      setOs('linux');
    } else {
      setOs('windows');
    }
  }, []);

  return os;
}

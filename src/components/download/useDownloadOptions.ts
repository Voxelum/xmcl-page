import { useState, useMemo } from 'react';
import type { DownloadOption } from './types';

export function useDownloadOptions() {
  const [selectedOption, setSelectedOption] = useState<string>('default');

  const options: DownloadOption[] = useMemo(() => [
    { label: 'Default', value: 'default', description: 'Recommended for most users' },
    { label: 'Portable', value: 'portable', description: 'No installation required' },
  ], []);

  return {
    options,
    selectedOption,
    setSelectedOption,
  };
}

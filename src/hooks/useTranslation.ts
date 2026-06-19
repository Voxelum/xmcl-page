// Legacy hook for backwards compatibility
// This file provides the old interface while using the new context system
import { useTranslation as useNewTranslation } from '@/contexts/TranslationContext';

export function useTranslation() {
  return useNewTranslation();
}
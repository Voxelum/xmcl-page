import React, { createContext, useContext } from "react";

export const PageLocaleContext = createContext<SupportedLocale | undefined>(undefined);

export function usePageLocale() {
  return useContext(PageLocaleContext);
}

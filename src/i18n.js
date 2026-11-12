import { createContext, useContext } from 'react';
import { content } from './content/index.js';

/** The current page's locale ('en' | 'de'), provided by <App>. */
export const LocaleContext = createContext('en');

export const useLocale = () => useContext(LocaleContext);
export const useContent = () => content[useLocale()];

/** Client-side navigation function, provided by <App>. */
export const NavigateContext = createContext(() => {});
export const useNavigate = () => useContext(NavigateContext);

declare module 'alpinejs';

import Alpine from 'alpinejs';

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}
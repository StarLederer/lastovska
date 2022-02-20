import { writable } from 'svelte/store';

export type I18n = {
  current: string;
  locales: string[];
};

export const i18n = writable<I18n>({
  current: '',
  locales: [],
});

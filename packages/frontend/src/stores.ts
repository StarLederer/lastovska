import { writable } from 'svelte/store';
import { loadHtml } from 'vite-plugin-content-editor-svelte/lib/runtime';

import locales from './locales';

//
//
// I18n

export type I18n = {
  current: string;
  locales: string[];
};

export const i18n = writable<I18n>({
  current: locales[0],
  locales,
});

//
//
// Content

let currentContentPath: string;
const prodContentStore = writable({});

export const getProdContentStore = async (path: string) => {
  if (!prodContentStore || currentContentPath !== path) {
    currentContentPath = path;
    const content = await loadHtml(path);
    prodContentStore.set(content);
  }

  return prodContentStore;
};

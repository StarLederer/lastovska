import App from './App.svelte'
import backend from "./backend";
import { i18n } from './lib/stores';
import type { I18n } from "./lib/stores";

const app = new App({
  target: document.body
});

(async () => {
  const locales = (await (await fetch(`${backend}/api/i18n/locales`)).json())

  locales.forEach(l => {
    i18n.update((o) => {
      o.locales.push(l.code)
      if (l.isDefault) o.current = l.code;

      return o;
    });
  })
})();

export default app

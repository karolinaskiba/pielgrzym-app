/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { registerPlugins } from '@/plugins';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import pl from './locales/pl.json';
import App from './App.vue';

import { createApp } from 'vue';

const messages: Record<string, any> = {
  en,
  pl,
};

const i18n = createI18n({
  locale: 'pl', // Domyślny język
  messages,
});

const app = createApp(App);

app.use(i18n);

registerPlugins(app);

app.mount('#app');

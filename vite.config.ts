import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,JPG,jpeg,gif}'],
  },
  manifest: {
    name: 'Подбор оборудования',
    short_name: 'Таблицы',
    description: 'Приложение по подбору оборудования для сотрудников ГК Сети-Телеком',
    lang: 'ru',
    icons: [
      {
        src: '/ct-app/assets/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/ct-app/assets/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#0369A1',
    background_color: '#0369A1',
    display: 'standalone',
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePWA],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  base: '/ct-app/',
});

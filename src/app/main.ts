import { createApp } from 'vue';
import './style.css';
import { type App } from 'vue';
import MainApp from './app.vue';
import router from './router';

const app = createApp(MainApp);

app.use(router);

const startApp = async (app: App) => {
  await router.isReady();

  app.mount('#app');
};

startApp(app).catch(console.error);

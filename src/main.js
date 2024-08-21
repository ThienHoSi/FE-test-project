
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import i18n from "./locales";

import Calendar from "./components/Icons/Calendar.vue";
import PenTool from "./components/Icons/PenTool.vue";
import People from "./components/Icons/People.vue";

const app = createApp(App);
app.component('Calendar', Calendar)
app.component('PenTool', PenTool)
app.component('People', People)
app.use(i18n);
app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "./global-components";
import utils from "./utils";
import "./libs";

// Sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// moment
import moment from "moment";
moment.locale("th");

// SASS Theme
import "./assets/sass/app.scss";

const app = createApp(App)
  .use(store)
  .use(router)
  .use(moment)
  .use(VueSweetalert2);

globalComponents(app);
utils(app);

app.mount("#app");

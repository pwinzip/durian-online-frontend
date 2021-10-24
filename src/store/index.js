import { createStore } from "vuex";
import main from "./main";
// import sideMenu from "./side-menu";
// import simpleMenu from "./simple-menu";
// import topMenu from "./top-menu";
import sideMenuAdmin from "./side-menu-admin";
import sideMenuBuy from "./side-menu-buy";
import sideMenuSell from "./side-menu-sell";

const store = createStore({
  modules: {
    main,
    sideMenuAdmin,
    sideMenuBuy,
    sideMenuSell,
    // sideMenu,
    // simpleMenu,
    // topMenu,
  },
});

export function useStore() {
  return store;
}

export default store;

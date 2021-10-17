const state = () => {
  return {
    menu: [
      {
        icon: "HomeIcon",
        pageName: "sell-home",
        title: "Sell Home",
      },
      {
        icon: "BoxIcon",
        pageName: "sell-bid",
        title: "Sell Bid",
      },
      {
        icon: "InboxIcon",
        pageName: "sell-transfer",
        title: "Sell Transfer",
      },
    ],
  };
};

// getters
const getters = {
  menu: (state) => state.menu,
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

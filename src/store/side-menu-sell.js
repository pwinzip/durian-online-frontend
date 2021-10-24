const state = () => {
  return {
    menu: [
      // {
      //   icon: "HomeIcon",
      //   pageName: "sell-home",
      //   title: "Sell Home",
      // },
      {
        icon: "BoxIcon",
        pageName: "sell-bid",
        title: "ประมูลขายทุเรียน",
      },
      {
        icon: "BoxIcon",
        pageName: "sell-bid-status",
        title: "สถานะประมูลขายทุเรียน",
      },
      {
        icon: "InboxIcon",
        pageName: "sell-transfer",
        title: "โอนเงิน",
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

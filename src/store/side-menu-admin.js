const state = () => {
  return {
    menu: [
      {
        icon: "HomeIcon",
        pageName: "admin-home",
        title: "Admin Home",
      },
      {
        icon: "ToolIcon",
        pageName: "admin-manage",
        title: "Admin Manage",
      },
      {
        icon: "CheckIcon",
        pageName: "admin-approve-transfer",
        title: "Admin Approve Transfer",
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

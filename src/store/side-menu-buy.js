const state = () => {
  return {
    menu: [
      // {
      //   icon: "HomeIcon",
      //   pageName: "buy-home",
      //   title: "หน้าหลัก",
      //   subMenu: [
      //     {
      //       icon: "",
      //       pageName: "buy-durian-1",
      //       title: "หมอนทอง",
      //     },
      //   ],
      // },
      {
        icon: "BoxIcon",
        pageName: "buy-offer",
        title: "รับซื้อทุเรียน",
      },
      {
        icon: "CreditCardIcon",
        pageName: "buy-offer-status",
        title: "สถานะการรับซื้อ",
      },
      // {
      //   icon: "CreditCardIcon",
      //   pageName: "buy-bid",
      //   title: "รายการประมูลซื้อ",
      // },
      {
        icon: "InboxIcon",
        pageName: "buy-transfer",
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

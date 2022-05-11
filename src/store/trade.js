// 交易模块的小仓库
import { reqAddressInfo,reqOrderInfo } from "@/api";
//准备actions——用于响应组件中的动作
const actions = {
	//获取用户地址信息
  async getUserAddress({ commit }) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit("GETUSERADDRESS", result.data);
    }
  },
  //获取商品清单数据
  async getOrderInfo({commit}) {
    let result = await reqOrderInfo();
    if(result.code==200){
      commit("GETORDERINFO",result.data);
    }
  },
};

//准备mutations——用于操作数据（state）
const mutations = {
	GETUSERADDRESS(state, address) {
    state.address = address;
  },
  GETORDERINFO(state,orderInfo){
    state.orderInfo = orderInfo;
  }
};

//准备state——用于存储数据
const state = {
  address: [],
  orderInfo:{}
};

//准备getters——用于将state中的数据进行加工
const getters = {
  
};

//创建并暴露store类的一个实例
export default {
	// namespaced:true,
	actions,
	mutations,
	state,
	getters
}
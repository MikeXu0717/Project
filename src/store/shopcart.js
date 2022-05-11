// shopcart模块的小仓库
import { reqCartList,reqDeleteCartById,reqUpdateCheckedByid } from "@/api";
//准备actions——用于响应组件中的动作
const actions = {
	async getCartList({ commit }) {
		//params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
		let result = await reqCartList();
		if (result.code == 200) {
			commit("GETCARTLIST", result.data);
		}
	},
	//删除购物车某一个产品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
	//修改购物车某一个产品的选中状态
	async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedByid(skuId, isChecked);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
	//删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    //context:小仓库，commit【提交mutations修改state】 getters【计算属性】 dispatch【派发action】 state【当前仓库数据】
    //获取购物车中全部的产品（是一个数组）
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise = item.isChecked == 1 ? dispatch("deleteCartListBySkuId", item.skuId): "";
      //将每一次返回的Promise添加到数组当中
      PromiseAll.push(promise);
    });
    //只要全部的p1|p2....都成功，返回结果即为成功
    //如果有一个失败，返回即为失败结果
    return Promise.all(PromiseAll);
  },
	//修改全部产品选中的状态
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    //数组
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", {
        skuId: item.skuId,
        isChecked,
      });
      promiseAll.push(promise);
    });
    //最终返回结果
    return Promise.all(promiseAll);
  },
};

//准备mutations——用于操作数据（state）
const mutations = {
	GETCARTLIST(state, cartList) {
		state.cartList = cartList;
	},
};

//准备state——用于存储数据
const state = {
	cartList : [],
};

//准备getters——用于将state中的数据进行加工
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};

//创建并暴露store类的一个实例
export default {
	// namespaced:true,
	actions,
	mutations,
	state,
	getters
}
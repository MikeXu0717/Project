// search模块的小仓库
import { reqGetSearchInfo } from "@/api";
//准备actions——用于响应组件中的动作
const actions = {
	async getSearchList({ commit }, params = {}) {
		//params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
		let result = await reqGetSearchInfo(params);
		if (result.code == 200) {
			commit("GETSEARCHLIST", result.data);
		}
	},
};

//准备mutations——用于操作数据（state）
const mutations = {
	GETSEARCHLIST(state, searchList) {
		state.searchList = searchList;
	},
};

//准备state——用于存储数据
const state = {
	searchList: {}
};

//准备getters——用于将state中的数据进行加工
//项目当中getters主要的作用是:简化仓库中的数据(简化数据而生)
//可以把我们将来在组件当中需要用的数据简化一下【将来组件在获取数据的时候就方便了】
const getters = {
	//当前形参state，当前仓库中的state，并非大仓库中的那个state
	goodsList(state) {
		//state.searchList.goodsList如果服务器数据回来了，没问题是一个数组
		//假如网络不给力|没有网state.searchList.goodsList应该返回的是undefined
		//计算新的属性的属性值至少给人家来一个数组
		return state.searchList.goodsList || [];
	},
	trademarkList(state){
    return state.searchList.trademarkList||[];
  },
  attrsList(state){
    return state.searchList.attrsList||[];
  }
};

//创建并暴露store类的一个实例
export default {
	// namespaced:true,
	actions,
	mutations,
	state,
	getters
}
import { reqgetCategoryList,reqGetBannerList,reqFloorList } from "@/api";
// home模块的小仓库
//准备actions——用于响应组件中的动作
const actions={
	// 通过api里面的接口函数调用，向服务器发请求获取数据
	async categoryList({commit}){
		let result = await reqgetCategoryList();
		if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
	},
	// 获取首页轮播图的数据
	async getBannerList({commit}){
		let result = await reqGetBannerList();
		if (result.code == 200) {
      commit("GETBANNERLIST", result.data);
    }
	},
	// 获取floor的数据
	async getFloorList({commit}){
		let result = await reqFloorList();
		if (result.code == 200) {
      commit("GETFLOORLIST", result.data);
    }
	}
};

//准备mutations——用于操作数据（state）
const mutations={
	CATEGORYLIST(state,categoryList){
		state.categoryList = categoryList.slice(0,16);
	},
	GETBANNERLIST(state,bannerList){
		state.bannerList = bannerList;
	},
	GETFLOORLIST(state,floorList){
		state.floorList = floorList;
	},
};

//准备state——用于存储数据
const state={
	//home仓库中存储三级菜单的数据
	categoryList:[],
	// 轮播图的数据
	bannerList:[],
	// floor组件的数据
	floorList:[],
};

//准备getters——用于将state中的数据进行加工
const getters={};

//创建并暴露store类的一个实例
export default {
	// namespaced:true,
	actions,
	mutations,
	state,
	getters
}
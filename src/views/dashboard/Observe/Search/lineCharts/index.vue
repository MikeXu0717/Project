<template>
  <div>
    <div class="header">
      <span class="search-header">搜索用户数</span>
      <svg t="1637478175000" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2179" width="26" height="26"><path d="M536 480v192a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V480a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16z m-32-128h16a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16z m8 448c159.056 0 288-128.944 288-288s-128.944-288-288-288-288 128.944-288 288 128.944 288 288 288z m0 48c-185.568 0-336-150.432-336-336s150.432-336 336-336 336 150.432 336 336-150.432 336-336 336z" p-id="2180" fill="#8a8a8a"></path></svg>
    </div>
    <div class="main">
      <span class="main-title">12321</span>
      <span class="main-content">17.1</span>
        <svg t="1651821564002" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2161" width="16" height="16"><path d="M529.143158 7.436293l347.212925 397.874796a21.748783 21.748783 0 0 1-16.375554 36.077393h-170.66398a21.492915 21.492915 0 0 0-21.492915 18.678367c-12.793402 92.624229-90.065549 502.268955-455.95684 562.909679a21.748783 21.748783 0 0 1-17.654895-38.380206c62.687669-49.126663 144.56544-144.309572 167.593564-313.694212a1571.285609 1571.285609 0 0 0 12.793402-207.508977 22.260519 22.260519 0 0 0-21.748783-22.260519H165.298811a21.748783 21.748783 0 0 1-16.375554-36.077393L496.39205 7.436293a21.748783 21.748783 0 0 1 32.751108 0z" p-id="2162"></path></svg>
        <svg t="1651821718966" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3040" width="16" height="16"><path d="M507.649902 1015.81158L160.153845 618.161453a21.75049 21.75049 0 0 1 16.376839-36.080224h187.565987a22.262266 22.262266 0 0 0 21.750489-22.262266 1630.774944 1630.774944 0 0 0-12.538517-207.525259C350.022825 182.895773 268.138628 87.705395 204.934264 38.574877A21.75049 21.75049 0 0 1 223.102321 0.447548C588.766434 60.837143 665.532868 470.514012 679.350826 563.401397a21.238713 21.238713 0 0 0 21.494601 18.679832h170.677372a21.75049 21.75049 0 0 1 16.120951 36.080224L540.403581 1015.81158a21.75049 21.75049 0 0 1-32.753679 0z" p-id="3041"></path></svg>
    </div>
    <div class="footer">
      <div class="charts" ref="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: '',
  mounted() {
    //初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    //配置数据
    lineCharts.setOption({
      xAxis: {
        //隐藏x轴
        show: false,
        type: "category",
      },
      yAxis: {
        //隐藏y轴
        show: false,
      },
      //系列
      series: [
        {
          // smooth:true,
          type: "line",
          data: [10, 7, 33, 12, 48, 9,29,10,44],
          //拐点的样式的设置
          itemStyle: {
            opacity: 0,
          },
          //线条的样式
          lineStyle: {
            color: "blue",
          },
          //填充颜色设置
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "blue", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
      ],
      //布局调试
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
      },
    });
  },
}
</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
}
.search-header{
  margin-right: 20px;
}
.main{
  margin: 10px 0px ;
}
.main-title{
  margin-right: 30px;
}
.main-content{
  margin-right: 10px;
}
.charts{
  width: 100%;
  height: 50px;
}
</style>

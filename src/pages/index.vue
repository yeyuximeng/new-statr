<template>
    <div class="dsahboard"></div>
</template>

<script>
  import Echarts from 'echarts';
  import Vue from 'vue';
  Vue.prototype.$echarts = Echarts;
    export default {
        name: "index",
        data() {
          return {
            echart: 'dsahboard',
            option: {
              legend: {},
              tooltip: {},
              dataset: {
                source: [
                  ['product', '2015', '2016', '2017'],
                  ['毛衣', 43.3, 85.8, 93.7],
                  ['袜子', 83.1, 73.4, 55.1],
                  ['外套', 86.4, 65.2, 82.5],
                  ['鞋子', 72.4, 53.9, 39.1],
                ]
              },
              xAxis: {type: 'category'},
              yAxis: {},
              series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
              ]
            },
          }
        },
      mounted(){
          this.renderEchart();
      },
      methods: {
          renderEchart() {
            const echarts = Echarts.init(document.getElementsByClassName(this.echart)[0]);
            echarts.setOption(this.option);
            window.addEventListener('resize', () => {
              echarts.resize();
            });
          }
      },
    }
</script>

<style scoped>
.dsahboard{
  height: calc(100vh - 4rem);
}
</style>

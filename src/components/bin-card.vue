<template>
  <div class="bin-card">
    <div v-for="(i, index) in 20" class="card-item">
      <el-card class="body-style" shadow="always">
        <div>
          <img :src="courseImg" alt="Java入门" width="100%" height="120px">
          <h3>Java 入门</h3>
          <div class="bottom clearfix">
            <span>适合想要跨入互联网行业的同学来学习。</span>
          </div>
          <el-button type="primary" class="right-btn" size="small" round>进入学习</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import Moment from 'moment'
    export default {
      name: "bin-card",
      data() {
          return {
            currentDate: Moment().format('YYYY-MM-DD HH:mm:ss'),
            courseImg: require('../assets/images/course/course.jpg'),
          }
      }
    }
</script>

<style lang="less" scoped>
@import "../assets/styles/theme/index.css";
.bin-card{
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  align-items: center;
  h3{
    margin: 0;
  }
}
.card-item{
  flex: 1;
  min-width: 20rem;
  margin: 1rem;
  &:hover{
    box-shadow: #cccccc 0 .2rem .4rem .2rem;
    transition: all 500ms ease;
  }
  .bottom{
    margin-bottom: 5px;
    span{
      font-size: .8rem;
    }
  }
  .right-btn{
    margin-left: 80%;
  }
}
</style>

<template>
  <div class="course-list">
    <bin-card></bin-card>
  </div>
</template>

<script>
  import binCard from '../../components/bin-card';
  export default {
    name: "course-list",
    components: {
      binCard,
    }
  }
</script>

<style lang="less" scoped>
  .course-list{
    width: 50rem;
    margin: 0 auto;
  }
</style>

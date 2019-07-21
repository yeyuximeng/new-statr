<template>
  <div>{{$store.state.skill.name}}</div>
</template>

<script>
    export default {
        name: "skill-name",
        props: {
          name: {
            type: String,
            default: 'skill-name',
          }
        },
    }
</script>

<style scoped>

</style>

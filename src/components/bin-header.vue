<template>
    <div class="bin-header">
      <div class="nav-bar">
        <div class="logo"></div>
        <div class="nav-bar-right">
          <div class="menus">
              <a
                v-for="menu in menus"
                :key="menu.desc"
                :href="link(menu)"
                :class="{active:menu.desc === $route.meta.title}"
              >
<!--                <i :class="`el-icon-${menu.icon}`"></i>-->
                {{menu.desc}}
              </a>
          </div>
          <div class="actions">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "bin-header",
      data() {
        return {
          menus: this.$constants.menus,
        }
      },
      methods: {
        link(menu){
          return `${window.location.origin}/#${menu.link}${menu.defaultChild ? '/' + menu.defaultChild : ''}`;
        }
      },
    }
</script>

<style lang="less" scoped>
  @import "../assets/styles/theme/icon.css";
.bin-header{
  z-index: 1000;
  .nav-bar{
    display: flex;
    height: 4rem;
    background-color: #34496a;
    .logo{
      display: flex;
      width: 3rem;
      &:after{
        content: '';
        flex: 1;
        background-size: 80%;
        background-repeat: no-repeat;
        background-position: center 56%;
        background-image: url(../assets/logo.png);
      }
    }
    .nav-bar-right{
      flex: 1;
      display: flex;
      justify-content: space-between;
      .menus{
        flex: 1;
        display: flex;
        box-sizing: border-box;
        a {
          color: #fff;
          font-size: .85rem;
          width: 7rem;
          display: flex;
          align-items: center;
          text-decoration: none;
          justify-content: center;
          position: relative;
        }
        a:after, a:before{
          content: "";
          position: absolute;
          bottom: 0;
          height: .2rem;
          width: 0;
          background-color: transparent;
        }
        a:after{
          right: 50%;
        }
        a:before{
          left: 50%;
        }
        i {
          margin-right: .2rem;
        }
        & :hover{
          background-color: rgba(32,160,255,.3);
          &:after, &:before{
            width: 50%;
            background-color: #ff9131;
            transition: all 800ms ease;
          }
          transition: all 500ms ease;
        }
        & .active{
          color: #20a0ff;
          background-color: rgba(8, 33, 53, 0.3);
          &:after, &:before{
            width: 50%;
            background-color: #ff7290;
          }
        }
      }
      .actions{

      }
    }
  }
}
</style>

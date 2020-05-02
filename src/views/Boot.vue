<template>
  <div class="boot_page">
    <div class="logo_wrapper">
      <div class="logo_top">
        <span class="microsoft-font">Microsoft</span><sup>&reg;</sup>
        <img src="@/assets/images/win_logo.png" class="logo_img">
        <sup class="trade">&trade;</sup>
      </div>
      <div class="logo_btm">
        <span>Windows</span><sup>&reg;</sup>
        <span class="xp">xp</span>
      </div>
      <div class="act_box">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
    <div class="btm_logo">
      <span class="btm_logo_left">Copyright &copy; Microsoft Corporation</span>
      <span class="btm_logo_right">Microsoft</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.boot_page{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  user-select: none;
  background: black;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .logo_wrapper{
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -50px;
    .logo_top{
      .microsoft-font{
        font-size: 30px;
        font-weight: lighter;
      }
      .logo_img{
        height: 200px;
      }
      .trade{
        left: -35px;
      }
      sup{
        position: relative;
        top: -5px;
      }
    }
    .logo_btm{
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-start;
      font-size: 70px;
      font-weight: 600;
      .xp{
        font-size: 40px;
        color: #E6731B;
      }
      sup{
        position: relative;
        top: 15px;
      }
    }
    .act_box {
      width: 225px;
      height: 15px;
      border: 2px solid #b2b2b2;
      border-radius: 7px;
      margin: 0 auto;
      padding: 2px 1px;
      overflow: hidden;
      font-size: 0;
      margin-top: 50px;
      .box {
        width: 12px;
        height: 100%;
        background: linear-gradient(to bottom, #2838c7 0%, #5979ef 17%, #869ef3 32%, #869ef3 45%, #5979ef 59%, #2838c7 100%);
        display: inline-block;
        margin-right: 2px;
        animation: loader 3s infinite;
        animation-timing-function: linear;
      }
      @keyframes loader {
        0% {
          transform: translate(-50px);
        }
        100% {
          transform: translate(225px);
        }
      }
    }
    sup{
      font-size: 15px;
      font-weight: 500;
    }
  }
  .btm_logo{
    position: fixed;
    bottom: 20px;
    width: 1200px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    .btm_logo_right{
      font-family: 'YaHei Bold';
      font-size: 20px;
      font-style: italic;
    }
  }
}
</style>

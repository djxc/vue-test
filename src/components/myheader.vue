<template>
    <div id='myheader'>
      <div id='conbtn'>
        <span class="label label-info">菜单</span>
      </div>
      <div>
        <h1>{{ msg }}</h1>
      </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'myheader',
  data () {
    return {
      msg: '城市发展规划模拟信息平台'
    }
  }
}
$(function () {
  $('#conbtn').click(function () {
    $('#left').animate({width: 'toggle'}, 350)
  })
})
</script>
<style>
h1, h2 {
  font-weight: normal;
  color: rgb(230, 209, 22);
}
#myheader{
  background-color: rgb(5, 5, 4);
  position: absolute;
  width: 100%;
  height: 8%;
  left: 0px;
  top: 0px;
  padding: 0px;
  margin: 0px;
}
#conbtn {
  float: left;
  padding-top: 1%;
  padding-left: 1%;
  padding-right: 1%;
  height: 100%;
  background-color: blueviolet;
}
#conLeft {
  font-size: 20px;
  color: rgb(230, 209, 22);

}
</style>

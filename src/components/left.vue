<template>
    <div id='left'>
      <input value='left'  class="form-control"><br>
      <button class="btn btn-primary" id='showhiden'>点击</button>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'left'
}
$(function () {
  $('#showhiden').click(function () {
    console.log('testjquery')
    $('#myheader').slideToggle()
  })
})
</script>
<style>
#left{
  position: absolute;
  background-color: aqua;
  left: 0px;
  top: 8%;
  width: 16%;
  height: 92%;
}
</style>

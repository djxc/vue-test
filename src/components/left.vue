<template>
    <div id="left">
      <input value="left"><br>
      <button id="showhiden">点击</button>
    </div>
</template>

<script>
export default {
  name: 'left'
}
$(function () {
    $('#showhiden').click(function () {
        console.log('testjquery')
        $("#myheader").slideToggle()
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

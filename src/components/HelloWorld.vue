<template>
  <div class="hello">
    <div id="head">
      <h1>{{ msg }}</h1>
    </div>
    <div id="app">
      <button v-on:click="reverseMessage">逆转消息</button>
      <ol>
        <li v-for="todo in todos" :key="todo.text">
          {{ todo.text }}
        </li>
      </ol>
      <router-link to='dj'>关于</router-link>
    </div>
    <div id="left">
      <input value="left"><br>
      <button>ddd</button>
    </div>
    <div id="foot"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '城市发展规划模拟信息平台',
      name: 'dj',
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.msg = this.msg.split('').reverse().join('')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#head{
  background-color: rgb(5, 5, 4);
  position: absolute;
  width: 100%;
  height: 8%;
  left: 0px;
  top: 0px;
  padding: 0px;
  margin: 0px;
}
#app{
  background-color: burlywood;
  position: absolute;
  top: 8%;
  width: 100%;
  height: 92%;
  left: 0px;
  margin-top: 0px;
}
#left{
  position: absolute;
  background-color: aqua;
  left: 0px;
  top: 8%;
  width: 16%;
  height: 92%;  
}
</style>

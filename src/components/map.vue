<template>
  <div class='dj'>
    <div id='map'>
    </div>
  </div>
</template>

<script>
import TDLayer from '../assets/js/TDLayer'
import * as esriLoader from 'esri-loader'
esriLoader.loadCss('http://121.248.96.254:8080/arcgis_js_api/library/4.8/esri/css/main.css')
export default {
  name: 'dj',
  data () {
    return {
      msg: '爱是恒久忍耐又有恩赐,爱是不嫉妒'
    }
  },
  methods: {
    createMap3: function () {
      const options = {
        url: 'https://js.arcgis.com/3.25/'
      }
      esriLoader.loadModules(['esri/map'], options)
        .then(([Map]) => {
          // create map with the given options at a DOM node w/ id 'mapNode'
          let map = new Map('map', {
            center: [-118, 34.5],
            zoom: 8,
            basemap: 'dark-gray'
          })
        })
        .catch(err => {
        // handle any script or module loading errors
          console.error(err)
        })
    },
    createMap1: function () {
      // 将1改成其他值加载天地图
      TDLayer.initMap(1)
    }
  },
  mounted () {
    this.createMap1()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,h2 {
  font-weight: normal;
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
#map {
  position: absolute;
  background-color: #42b983;
  top: 8%;
  width: 100%;
  height: 92%;
  left: 0px;
  margin-top: 0px;
}

</style>

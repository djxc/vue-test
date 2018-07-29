<template>
  <div class='dj'>
    <div id='map'>
    </div>
  </div>
</template>

<script>
import * as esriLoader from 'esri-loader'
esriLoader.loadCss('http://localhost:8080/arcgis_js_api/library/4.8/esri/css/main.css')
export default {
  name: 'dj',
  data () {
    return {
      msg: '爱是恒久忍耐又有恩赐,爱是不嫉妒'
    }
  },
  methods: {
    createMap: function () {
      const options = {
        url: 'http://localhost:8080/arcgis_js_api/library/4.8/dojo/dojo.js'
      }
      esriLoader
        .loadModules(['esri/views/MapView', 'esri/WebMap'], options)
        .then(([MapView, WebMap]) => {
          // then we load a web map from an id
          var webmap = new WebMap({
            portalItem: {
              // autocasts as new PortalItem()
              id: 'f2e9b762544945f390ca4ac3671cfa72'
            }
          })
          // and we show that map in a container w/ id #viewDiv
          var view = new MapView({
            map: webmap,
            container: 'map',
            zoom: 4
          })
        })
        .catch(err => {
          // handle any errors
          console.error(err)
        })
    },
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
    }
  },
  mounted () {
    this.createMap()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

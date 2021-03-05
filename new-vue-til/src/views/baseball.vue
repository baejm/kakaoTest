<template>
  <div>
    <div id="map"></div>
    <form @submit.prevent="searchImg">
      <input type="text" v-model="words" />
      <button type="submit">검색</button>
    </form>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item.display_sitename }}
        <a :href="item.doc_url">
          <img :src="item.thumbnail_url" alt="" />
        </a>
        {{ item.datetime }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      words: "",
      items: []
    };
  },
  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
  },
  methods: {
    async searchImg() {
      const response = await axios.get(
        `https://dapi.kakao.com/v2/search/image?query=${this.words}`,
        {
          headers: {
            Authorization: "KakaoAK 95afee05b4316d2f2a817845a48f530f"
          }
        }
      );
      console.log(response);
      this.items = response.data.documents;
    },
    initMap() {
      var container = document.getElementById("map");
      var options = {
        center: new kakao.maps.LatLng(37.635682, 127.068516),
        level: 3
      };
      var map = new kakao.maps.Map(container, options);
      //마커추가하려면 객체를 아래와 같이 하나 만든다.
      var marker = new kakao.maps.Marker({ position: map.getCenter() });
      marker.setMap(map);
    },
    addScript() {
      const script = document.createElement("script");
      /* global kakao */

      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b769fdca65b8a9ca2763c18e8cf41d65";
      document.head.appendChild(script);
    }
  }
};
</script>
<style scoped>
#map {
  width: 300px;
  height: 300px;
}
</style>

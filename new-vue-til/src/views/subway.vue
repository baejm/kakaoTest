<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" />
      <button type="submit">검색</button>
    </form>
    <ul>
      <li v-for="(item, index) in rows" :key="index">{{ item.TRDAR_CD_NM }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
var convert = require("xml-js");
export default {
  data() {
    return {
      items: [],
      rows: []
    };
  },
  methods: {
    async submitForm() {
      const response = await axios.get(
        // "http://openapi.seoul.go.kr:8088/45647963676a756b35316c4c497149/json/subwayTakingInfo/1/150/514/"
        "http://openAPI.seoul.go.kr:8088/45647963676a756b35316c4c497149/xml/PublicParkingTiket/1/5/"
      );
      console.log("1차", response.data);
      const json = convert.xml2json(response.data, {
        compact: true
      });
      //   console.log("2차", this.items);
      this.items = JSON.parse(json);
      console.log("2차", this.items.VwsmTrdhlAptQq);
      var parsedobj = JSON.parse(JSON.stringify(this.items.VwsmTrdhlAptQq));
      console.log(parsedobj.row);
      this.rows = parsedobj.row;
      console.log("이건로우", this.rows);
      //   console.log("4차", this.items.VwsmTrdhlAptQq.row);
      //   const long = this.items.VwsmTrdhlAptQq.row;
      //   console.log("5차", long.TRDAR_CD_NM);
    }
  }
};
</script>

<style></style>

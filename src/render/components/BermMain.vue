<template>
  <el-main class="BermMain">
    <Recent v-if="activeID === 'recent'" />
    <Tags v-if="activeID === 'tags'" />
    <Models v-if="activeID === 'models'" />
    <Moments v-if="activeID === 'moments'" />
  </el-main>
</template>

<style lang="less" scoped>
.BermMain {
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
}
.BPC {
  height: 100%;
  width: 100%;
  padding: 20px;
}
#bps {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>

<script lang="ts">
import { activeID, randomArray, metas, slices } from "../status/index";
import BermPlayer from "../components/BermPlayer.vue";
import Recent from "../components/BermTab/Recent.vue";
import Moments from "../components/BermTab/Moments.vue";
import Tags from "../components/BermTab/Tags.vue";
import Models from "../components/BermTab/Models.vue";

export default {
  name: "BermMain",
  components: { Recent, BermPlayer, Models, Moments, Tags },
  setup() {
    return { activeID, randomArray, metas, slices };
  },
};
</script>

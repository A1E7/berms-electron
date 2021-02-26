<template>
  <el-container v-if="indexStatus.error">
    <h2>{{ indexStatus.statusTitle }}</h2>
    <p>{{ indexStatus.statusMessage }}</p>
  </el-container>
  <el-container v-else>
    <SideMenu />
    <el-container direction="vertical">
      <BermControl height="50px" />
      <BermMain :style="`height: calc(100vh - 50px);`" />
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { indexStatus } from "../status/index";

import BermPlayer from "../components/BermPlayer.vue";
import SideMenu from "../components/SideMenu.vue";
import BermControl from "../components/BermControl.vue";
import BermMain from "../components/BermMain.vue";

export default defineComponent({
  name: "Index",
  components: { BermPlayer, SideMenu, BermControl, BermMain },
  setup() {
    return { indexStatus };
  },
});
</script>

<style lang="less" scoped></style>

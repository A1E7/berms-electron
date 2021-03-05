<template>
  <el-container>
    <el-aside class="SideMenu" width="220px">
      <el-row :gap="24">
        <h3 class="SideMenu__Title">Berms</h3>
      </el-row>
      <el-row v-for="menu in menus" :key="menu.id" :gap="24">
        <el-button
          type="text"
          class="SideMenu__Entry"
          :icon="menu.icon"
          size="mini"
          @click="activeID = menu.id"
          :class="{ 'SideMenu__Entry--Active': activeID === menu.id }"
        >
          {{ menu.title }}
        </el-button>
      </el-row>
    </el-aside>
    <el-container direction="vertical">
      <BermControl height="50px" />
      <BermMain :style="`height: 100vh;padding-top:50px;`" />
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.SideMenu {
  padding: 80px 20px;
  background-color: #e8e2e3;
  border-right: rgba(207, 207, 207, 0.438) 0.5px solid;
  height: 100vh;
  &__Title {
    text-align: left;
    padding: 0px 6px;
    margin-bottom: 18px;
    color: #c28c6b;
    font-size: 1.5rem;
  }
  &__Entry {
    color: #454344;
    font-weight: bold;
    width: 100%;
    text-align: left;
    padding: 0px 6px;
    margin-bottom: 6px;
    &:hover {
      background-color: gray;
    }
    &--Active {
      background-color: #c28c6b;
      &:hover {
        background-color: #c28c6b;
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { indexStatus, menus, activeID } from "../status/index";

import BermPlayer from "../components/BermPlayer.vue";
import BermControl from "../components/BermControl.vue";
import BermMain from "../components/BermMain.vue";

export default defineComponent({
  name: "Index",
  components: { BermPlayer, BermControl, BermMain },
  setup() {
    return { indexStatus, menus, activeID };
  },
});
</script>

<style lang="less" scoped></style>

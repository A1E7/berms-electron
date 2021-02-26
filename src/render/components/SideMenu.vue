<template>
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
</template>

<style lang="less" scoped>
.SideMenu {
  padding: 80px 20px;
  background-color: #131419;
  height: 100vh;
  &__Title {
    text-align: left;
    padding: 0px 6px;
    margin-bottom: 18px;
    color: #c28c6b;
    font-size: 1.5rem;
  }
  &__Entry {
    color: white;
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
import { ref } from "vue";
import { menus, activeID } from "../status/index";
export default {
  name: "SideMenu",
  setup() {
    return { menus, activeID };
  },
};
</script>

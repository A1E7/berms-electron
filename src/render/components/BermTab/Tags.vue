<template>
  <div v-for="(name, index) in view_tags" :key="index" :berm="view_tags">
    {{ name }}
  </div>
</template>
<style lang="less" scoped>
.Recent {
  overflow: scroll;
}
</style>

<script lang="ts">
import { view_tags } from "../../status/index";
export default {
  name: "Tags",
  components: {},
  setup() {
    return { view_tags };
  },
};
</script>

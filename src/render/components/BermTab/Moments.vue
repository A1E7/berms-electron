<template>
  <div v-for="(name, index) in view_moments" :key="index" :berm="view_moments">
    {{ name }}
  </div>
</template>
<style lang="less" scoped>
.Recent {
  overflow: scroll;
}
</style>

<script lang="ts">
import { view_moments } from "../../status/index";
export default {
  name: "Moments",
  components: {},
  setup() {
    return { view_moments };
  },
};
</script>

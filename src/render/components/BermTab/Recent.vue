<template>
  <div v-for="meta in metas" :key="meta.id" :berm="meta">{{ meta }} </div>
</template>
<style lang="less" scoped>
.Recent {
  overflow: scroll;
}
</style>

<script lang="ts">
import { metas } from "../../status/index";
import BermListItem from "../../components/BermListItem.vue";
export default {
  name: "Recent",
  components: { BermListItem },
  setup() {
    return { metas };
  },
};
</script>

<template>
  <div>{{ berm }}</div>
</template>

<style lang="less" scoped></style>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "BermListItem",
  props: {
    berm: {
      type: Object,
      required: true,
    },
  },

  setup() {
    return {};
  },
};
</script>

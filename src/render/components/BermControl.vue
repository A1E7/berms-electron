<template>
  <el-header class="BermControl" :height="height">
    <div class="BermControl__PlayControl">
      <el-row :gutter="0">
        <el-col v-for="(button, index) in playButtons" :key="index" :span="0">
          <el-button
            type="text"
            class="BermControl__PlayControl__Button"
            circle
            :icon="button.icon"
          />
        </el-col>
      </el-row>
    </div>
  </el-header>
</template>

<style lang="less" scoped>
.BermControl {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgab(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &__PlayControl {
    &__Button {
      font-size: 1.2rem;
      color: whitesmoke;
      padding: 4px;
      margin: 0px 2px;
    }
  }
}
</style>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "Control",
  props: {
    height: {
      type: String,
      default: "80px",
    },
  },

  setup() {
    const playButtons = [
      { icon: "el-icon-magic-stick" },
      { icon: "el-icon-d-arrow-left" },
      { icon: "el-icon-video-play" },
      { icon: "el-icon-d-arrow-right" },
    ];
    const status = ref({
      playin: false,
      length: 50,
      type: "video",
      current: 0,
      poster: "",
      playList: [],
    });
    return { playButtons, status };
  },
};
</script>

<template>
  <div class="Models">
    <div
      v-for="(name, index) in view_models"
      :key="index"
      :berm="view_models"
      class="ModelCard"
    >
      <div class="ModelCard__Avatar">
        <el-image :src="`http://baidu.com`" fit="cover">
          <template #error>
            <div class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </template>
        </el-image>
      </div>
      <span class="ModelCard__Name">{{ name }}</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
.Models {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.ModelCard {
  width: 150px;
  height: 180px;
  margin-top: 20px;
  margin-right: 30px;
  &__Avatar {
    width: 150px;
    height: 150px;
    background-color: #131419;
    margin-bottom: 10px;
  }
  &__Name {
    font-size: 0.8rem;
    white-space: nowrap;
  }
}
</style>

<script lang="ts">
import { view_models } from "../../status/index";
export default {
  name: "Models",
  components: {},
  setup() {
    return { view_models };
  },
};
</script>

<template>
    <el-container class="Recent">
        <el-row>
            <el-col v-for="meta in metas" :key="meta.id">
                <div class="ListItem">
                    <span>{{ meta.id }}</span>
                </div>
            </el-col>
        </el-row>
    </el-container>
</template>
<style lang="less" scoped>
.Recent {
    overflow: scroll;
}
</style>

<script lang="ts">
import { ref } from "vue";
import { metas } from "../../status/index";
export default {
    name: "Recent",
    setup() {
        return { metas };
    },
};
</script>
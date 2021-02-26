<template>
    <el-main class="BermMain">
        <Recent v-if="activeID === 'recent'" />
        <el-container v-if="activeID === 'explore'" class="BPC">
            <div id="bps">
                <BermPlayer
                    v-for="(item, index) in randomArray"
                    :key="index"
                    :class="`bp`"
                    :berm="metas[item]"
                    :showMeta="false"
                    :style="`width:calc(100% / ${slices});height:calc()100% / ${slices};`"
                />
            </div>
        </el-container>
        <el-container v-if="activeID === 'tags'"> tags</el-container>
        <el-container v-if="activeID === 'models'"> models</el-container>
        <el-container v-if="activeID === 'moments'"> moments</el-container>
    </el-main>
</template>

<style lang="less" scoped>
.BermMain {
    padding: 0px;
    background-color: #131419;
}
.BPC {
    height: 100%;
    width: 100%;
    padding: 20px;
}
#bps {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>

<script lang="ts">
import { ref } from "vue";
import { activeID, randomArray, metas, slices } from "../status/index";
import BermPlayer from "../components/BermPlayer.vue";
import Recent from "../components/BermTab/Recent.vue";
export default {
    name: "BermMain",
    components: { Recent, BermPlayer },
    setup() {
        return { activeID, randomArray, metas, slices };
    },
};
</script>
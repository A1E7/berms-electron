<template>
  <div class="BermPlayer">
    <div v-show="showMeta" class="BermPlayer__MetaBox">
      <!-- type source -->
      <div class="BermPlayer__MetaBox__LeftTop">
        <span class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__Type"
          >{{ berm.id }} {{ translateType(berm.type) }}</span
        >
        <span
          v-if="berm.source.brand && berm.source.brand !== ''"
          class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__Brand"
          >{{ berm.source.brand }}</span
        >
        <span
          v-if="berm.source.link && berm.source.link !== ''"
          class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__Link"
        >
          linky
        </span>

        <!-- <span class="BermPlayer__MetaBox__Title">{{ berm.source.title }}</span> -->
      </div>
      <!-- scene-tags -->

      <div class="BermPlayer__MetaBox__RightTop">
        <div
          class="BermPlayer__MetaBox__SceneBox"
          v-for="(scene, index) in berm.scenes"
          :key="index"
        >
          <div class="BermPlayer__MetaBox__SceneBox__InfoBox">
            <h1
              v-if="berm.scenes.length > 1"
              class="BermPlayer__MetaBox__SceneBox__InfoBox__Title"
            >
              幕 {{ index + 1 }}
              {{ scene.time === "0:00-end" ? "" : scene.time }}
            </h1>
            <span
              class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__Orientation"
              >{{ scene.orientation }}</span
            >
            <span
              :value="scene.roughness"
              class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__Roughness"
              >{{ scene.roughness }}</span
            >
            <span
              v-for="(tag, index) in scene.tags"
              :key="index"
              class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__SceneTag"
              >{{ tag }}</span
            >
          </div>

          <div class="BermPlayer__MetaBox__SceneBox__ModelBox">
            <div
              v-for="(model, index) in scene.models"
              :key="index"
              class="BermPlayer__MetaBox__SceneBox__Model"
            >
              <span
                class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__ModelName"
                >{{ model.name }}</span
              >
              <span
                class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__ModelBody"
                >{{ model.body }}</span
              >
              <span
                class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__ModelTob"
                >{{ model.tob }}</span
              >
              <span
                v-for="(tag, index) in model.tags"
                :key="index"
                class="BermPlayer__MetaBox__Tag BermPlayer__MetaBox__ModelTag"
                >{{ tag }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="berm.type === 'manga'"
      class="BermPlayer__PlayBox BermPlayer__Manga"
    >
      developing manga area
    </div>
    <div
      v-if="berm.type === 'video'"
      class="BermPlayer__PlayBox BermPlayer__Video"
    >
      <video :src="`file:///${berm.entry}`" muted autoplay controls></video>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
const fs = require("fs");
// import fs from "fs";
export default defineComponent({
  name: "BermPlayer",
  props: {
    berm: {
      type: Object,
      required: true,
    },
    showMeta: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const translateType = (type: string) => {
      const translation: { [k: string]: string } = {
        manga: "漫画",
        video: "视频",
      };
      return translation[type] ? translation[type] : "未知类型";
    };

    return { translateType };
  },
});
</script>

<style lang="less" scoped>
@borderSpace: 12px;

.BermPlayer {
  position: relative;
  overflow: hidden;
  padding: 0px;
  &__MetaBox {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    &__Tag {
      font-size: 0.65rem;
      background-color: gray;
      padding: 3.5px 4.5px;
      border-radius: 3.5px;
      text-align: left;
      white-space: nowrap;
      margin-right: 4px;
      margin-bottom: 4px;
    }
    &__Type {
      color: white;
    }
    &__Brand {
      color: rgb(28, 255, 28);
    }
    &__Link {
      color: blue;
    }
    &__Title {
      font-size: 0.9rem;
      color: white;
    }
    &__Orientation {
      color: white;
    }
    &__Roughness {
      &[value="暴力"] {
        background-color: red;
      }
      &[value="澎湃"] {
        background-color: gold;
        color: black;
      }
      &[value="常规"] {
        background-color: blue;
      }
      &[value="温柔"] {
        background-color: burlywood;
      }
    }
    &__SceneTag {
      color: yellow;
    }
    &__ModelName {
      color: aquamarine;
    }
    &__ModelBody {
      color: blanchedalmond;
    }
    &__ModelTob {
      color: blanchedalmond;
    }
    &__ModelTag {
      color: brown;
    }
    &__SceneBox &__InfoBox &__Title {
      color: white;
      font-size: 1.2rem;
    }
    &__SceneBox__InfoBox,
    &__SceneBox__Model {
      display: inline-flex;
      flex-direction: row;
    }

    &__LeftTop,
    &__RightTop {
      position: absolute;
      display: flex;
      z-index: 2;
      max-width: 50%;
      flex-wrap: wrap;
    }

    &__LeftTop {
      left: @borderSpace;
      top: @borderSpace;
    }
    &__RightTop {
      right: @borderSpace;
      top: @borderSpace;
    }
  }
  &__PlayBox {
    position: absolute;
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      :focus {
        outline: none;
      }
    }
  }
}
</style>
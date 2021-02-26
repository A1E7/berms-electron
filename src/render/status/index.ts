// const fs = require("fs");
import fs from "fs";
const path = require("path");

import { ref } from "vue";
import configs from "../config.sec";

const metas = ref([]);
const menus = [
  { title: "最近添加", id: "recent", icon: "el-icon-film" },
  { title: "模特", id: "models", icon: "el-icon-s-custom" },
  { title: "时刻", id: "moments", icon: "el-icon-time" },
  { title: "标签", id: "tags", icon: "el-icon-collection-tag" },
  { title: "探索", id: "explore", icon: "el-icon-discover" },
];
const randomArray = ref<Array<Number>>([]);
const indexStatus = ref({
  error: false,
  statusTitle: "出错啦",
  statusMessage: "出现了不可预知的错误，请退出重试。",
});
const activeID = ref("explore");
const playingStatus = ref({
  playing: false,
  id: 0,
  total: 0,
  current: 0,
  poster: "",
});
const errorMaps = {
  "no-such-file": () => {},
};

function loadMeta() {
  try {
    if (fs.existsSync(configs.metas_entry)) {
      indexStatus.value.error = false;
      const codes = fs
        .readdirSync(configs.database_entry)
        .filter((code: string) => !code.startsWith("."));
      metas.value = JSON.parse(fs.readFileSync(configs.metas_entry, "utf8"));
      metas.value = metas.value.filter((meta: any) => meta.type === "video");
      metas.value.map((meta: any) => {
        const _path =
          meta.type === "manga"
            ? codes.filter((code: String) => code === meta.id)[0]
            : codes.filter(
                (code: String) => path.parse(code).name === meta.id
              )[0];
        meta.entry = path.join(configs.database_entry, _path);
      });
    }
  } catch (e) {
    indexStatus.value.error = true;
    indexStatus.value.statusTitle = "读取简介文件出错";
    indexStatus.value.statusMessage = e.message;
  }
}

loadMeta();

const slices = 2;
for (let i = 0; i < slices * slices; i++) {
  let random: Number = Math.floor(metas.value.length * Math.random());
  randomArray.value.push(random);
}

export {
  metas,
  randomArray,
  slices,
  playingStatus,
  menus,
  activeID,
  indexStatus,
};

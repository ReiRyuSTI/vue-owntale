<template>
  <main class="flex flex-col items-center w-5/6 mx-auto my-2 font-main">
    <div>
      search bar
    </div>
    <div class="flex flex-col w-full md:flex-row md:flex-wrap justify-center items-center text-left">
      <page-item-card-component
        v-for="(item, key) in PageItems"
        v-bind:key="key"
        :id="item.id"
        :image_link="item.iamge_url"
        :title="item.title"
        :sub_title="item.sub_title"
        :tips="item.tips"
      ></page-item-card-component>
    </div>
  </main>
</template>

<script lang="ts">
import PageItemCardComponent from "@/components/PageItemCardComponent.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageView",
  components: {
    PageItemCardComponent,
  },
  data: () => ({
    PageItems: [
      {
        id: 0,
        iamge_url: require("@/assets/du1.jpg"),
        title: "雨上がり",
        sub_title: "天気の子聖地巡りだったりなかったり",
        tips: [
          {
            content: "シルエットゆったり",
            color: 0,
          },
          {
            content: "高身長女子",
            color: 1,
          },
          {
            content: "こんなのどうよ？",
            color:2,
          },
        ],
      },
      {
        id: 1,
        iamge_url: require("@/assets/du2.jpg"),
        title: "ヒョッコリハン",
        sub_title: "いい大人が何してるかって？",
        tips: [
          {
            content: "シルエットゆったり",
            color: 0,
          },
          {
            content: "高身長女子",
            color: 1,
          },
          {
            content: "こんなのどうよ？",
            color: 2,
          },
        ],
      },
      {
        id: 2,
        iamge_url: require("@/assets/du3.jpg"),
        title: "夜王",
        sub_title: "夜―コンビニ前、といえば",
        tips: [
          {
            content: "シルエットゆったり",
            color: 0,
          },
          {
            content: "高身長女子",
            color: 1,
          },
          {
            content: "こんなのどうよ？",
            color: 2,
          },
        ],
      },
      {
        id: 3,
        iamge_url: require("@/assets/du4.jpg"),
        title: "隠れ家レストラン",
        sub_title: "雰囲気でわかる、これは",
        tips: [
          {
            content: "シルエットゆったり",
            color: 0,
          },
          {
            content: "高身長女子",
            color: 1,
          },
          {
            content: "こんなのどうよ？",
            color: 2,
          },
        ],
      },
      {
        id: 4,
        iamge_url: require("@/assets/du5.jpg"),
        title: "あの雪だるまをもう一度...",
        sub_title: "みんな大好き某ゲームのあのキャラを",
        tips: [
          {
            content: "シルエットゆったり",
            color: 0,
          },
          {
            content: "高身長女子",
            color: 1,
          },
          {
            content: "こんなのどうよ？",
            color: 2,
          },
        ],
      },
      {
        id: 5,
        iamge_url: require("@/assets/du6.jpg"),
        title: "夜明けのホーム",
        sub_title: "通学少女を書き込みたくなる景色",
        tips: [
          {
            content: "シルエットゆったり",
            color: 0,
          },
          {
            content: "高身長女子",
            color: 1,
          },
          {
            content: "こんなのどうよ？",
            color: 2,
          },
        ],
      },
    ],
  }),
});
</script>

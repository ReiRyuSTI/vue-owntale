<template>
  <main
    class="
      flex flex-col
      items-center
      container
      w-full
      md:max-w-7xl
      mx-auto
      my-2
      font-main
    "
  >
    <!-- news content -->
    <home-news-card-component
      :sentense_link="sentense_link"
    ></home-news-card-component>

    <!-- main content -->
    <home-about-card-component
      v-for="(value, key) in about_data"
      v-bind:key="key"
      :image_url="value.image_url"
      :title="value.title"
      :sub_title="value.sub_title"
      :reverse_flag="value.reverse_flag"
    ></home-about-card-component>

    <!-- hover カードコンポーネント -->
    <div class="my-4">
      <div class="grid grid-rows-1">
        <div class="flex w-full relative">
          <home-image-card-component
            v-for="(content, index) in img_data_link1"
            :key="index"
            :image_url="content.image_url"
            :link="content.link"
            :id="content.id"
          ></home-image-card-component>
        </div>
        <div class="flex w-full relative">
          <home-image-card-component
            v-for="(content, index) in img_data_link2"
            :key="index"
            :image_url="content.image_url"
            :link="content.link"
            :id="content.id"
          ></home-image-card-component>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import HomeAboutCardComponent from "@/components/HomeAboutCardComponent.vue";
import HomeImageCardComponent from "@/components/HomeImageCardComponent.vue";
import HomeNewsCardComponent from "@/components/HomeNewsCardComponent.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeAboutCardComponent,
    HomeImageCardComponent,
    HomeNewsCardComponent,
  },
  data: () => ({
    sentense_link: [
      {
        link: "https:www.reina-ryu-f.xyz/Home",
        content: "aaaaaaaaaaaaaaaaaaaab",
      },
      {
        link: "https:www.reina-ryu-f.xyz/Home",
        content: "aaaaaaaaaaaaaaaaaaaac",
      },
      {
        link: "https:www.reina-ryu-f.xyz/Home",
        content: "aaaaaaaaaaaaaaaaaaaad",
      },
    ],
    about_data: [
      {
        image_url: require("@/assets/dum3.png"),
        title: "自分に合った服装わかりますか？",
        sub_title: "最近の洋服のジャンルは多くてわからないですよね～",
        reverse_flag: false,
      },
      {
        image_url: require("@/assets/dum3.png"),
        title: "学生から夜会人への洋服の成長",
        sub_title: "オフィスカジュアルってどういうものでしょうか？",
        reverse_flag: true,
      },
      {
        image_url: require("@/assets/dum4.png"),
        title: "とりあえず自分のおしゃれを探そう",
        sub_title: "いっぱい失敗していっぱい学ぼう",
        reverse_flag: false,
      },
    ],
    img_data_link1: [
      {
        id: 0,
        image_url: require("@/assets/d1.jpg"),
        link: "",
      },
      {
        id: 1,
        image_url: require("@/assets/d2.jpg"),
        link: "",
      },
      {
        id: 2,
        image_url: require("@/assets/d3.jpg"),
        link: "",
      },
      {
        id: 3,
        image_url: require("@/assets/d4.jpg"),
        link: "",
      },
    ],
    img_data_link2: [
      {
        id: 0,
        image_url: require("@/assets/d5.jpg"),
        link: "",
      },
      {
        id: 1,
        image_url: require("@/assets/d6.jpg"),
        link: "",
      },
      {
        id: 2,
        image_url: require("@/assets/d7.jpg"),
        link: "",
      },
      {
        id: 3,
        image_url: require("@/assets/d1.jpg"),
        link: "",
      },
    ],
  }),
});
</script>

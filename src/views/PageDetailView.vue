<template>
  <main
    class="
      flex flex-col
      items-center
      container
      w-5/6
      max-w-6xl
      mx-auto
      my-2
      font-main
    "
  >
    <page-detail-main-component
      :id="PageItem.id"
      :image_url="PageItem.iamge_url"
      :tips="PageItem.tips"
      :title="PageItem.title"
      :sub_title="PageItem.sub_title"
      :contents="PageItem.contents"
    ></page-detail-main-component>
    <div class="flex flex-col w-full rounded-md items-center my-4">
      <div class="text-2xl font-title border-b-2 w-full text-left">
        ItemLinks
      </div>
      <div
        class="
          card
          m-4
          w-full
          rounded-md
          flex flex-row flex-wrap
          justify-around
          space-y-3
        "
      >
        <page-detail-item-links-card-component
          v-for="(item, key) in Itemlinks"
          :key="key"
          :title="item.title"
          :category="item.category"
          :link="item.link"
          :img_link="item.img_link"
        ></page-detail-item-links-card-component>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageDetailMainComponent from "@/components/PageDetailMainComponent.vue";
import PageDetailItemLinksCardComponent from "@/components/PageDetailItemLinkCardComponent.vue";

export default defineComponent({
  components: { PageDetailMainComponent, PageDetailItemLinksCardComponent },
  name: "PageDetailView",
  data: () => ({
    PageItem: {
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
          color: 2,
        },
      ],
      contents: [
        "コートはこれまで袖も丈も つんつるてんが当たり前でした。 . つんつるてんでなく かっこよく着られる トレンチコートもうれしすぎる😭 .",
        "ちなみにワンピは 4色展開を考えているそうです😊 高身長女性のみなさま‼︎ ぜひぜひチェックしてみてください‼︎‼︎ ワンピースほんとにうれしい😆‼︎‼︎‼︎",
      ],
    },
    Itemlinks: [
      {
        id: 0,
        title: "アディダスキャップ",
        category: "キャップ",
        link: "https://www.reina-ryu-f.xyz/Home",
        img_link: require("@/assets/du9.jpg"),
      },
      {
        id: 1,
        title: "アディダスキャップ",
        category: "キャップ",
        link: "https://www.reina-ryu-f.xyz/Home",
        img_link: require("@/assets/du9.jpg"),
      },
      {
        id: 2,
        title: "アディダスキャップ",
        category: "キャップ",
        link: "https://www.reina-ryu-f.xyz/Home",
        img_link: require("@/assets/du9.jpg"),
      },
      {
        id: 3,
        title: "アディダスキャップ",
        category: "キャップ",
        link: "https://www.reina-ryu-f.xyz/Home",
        img_link: require("@/assets/du9.jpg"),
      },
    ],
  }),
});
</script>

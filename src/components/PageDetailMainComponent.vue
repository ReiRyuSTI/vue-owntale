<template>
  <div class="flex flex-col w-full shadow-sm rounded-md items-center">
    <!-- img content -->
    <div
      class="w-auto max-w-2xl h-auto max-h-96 flex justify-center items-center"
    >
      <img
        :src="image_url"
        alt=""
        class="
          w-auto
          h-96
          object-cover
          md:object-contain
          rounded-xl
          overflow-hidden
          md:shadow-xl
        "
      />
    </div>
    <!-- content -->
    <div class="flex flex-col">
      <div class="text-2xl mt-5 mx-3">{{title}}</div>
      <div class="text-sm text-gray-600 mx-3">
        {{sub_title}}
      </div>
      <div class="flex my-2 flex-wrap space-x-1">
        <span class="tips-gray">シルエットゆったり</span>
        <span class="tips-sky">高身長女子</span>
        <span class="tips-red">こんなのどうよ？</span>
        <span v-for="(tip, key) in tips" v-bind:key="key">
            {{tip}}
        </span>
      </div>
      <div class="my-4 mx-3">
        <p v-for="content in contents" v-bind:key="content" class="text-left">
            {{content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface tips {
  content: string;
  color: number;
}

export default defineComponent({
  name: "PageDetailMainComponent",
  props: {
    id:Number,
    tips: Array as PropType<Array<tips>>,
    image_url:String,
    title:String,
    sub_title:String,
    contents:Array as PropType<string[]>
  },
});
</script>
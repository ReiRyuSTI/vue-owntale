<template>
  <div
    class="
      flex flex-row-reverse
      justify-between
      h-36
      w-full
      max-w-xs
      flex-shrink-0
      my-4
      rounded-md
      shadow-md
      overflow-hidden
    "
  >
    <div class="flex flex-col w-1/2 justify-around items-center">
      <div class="text-xs">
        {{title}}
      </div>
      <div class="flex flex-row">
        <span class="tips-gray">
          {{category}}
        </span>
      </div>
      <div>
        <button
          class="bg-gray-700 border-2 rounded-md font-bold text-white py-1 px-4"
          :href="link"
        >
          ZOZOTOWN
        </button>
      </div>
    </div>
    <!-- img content -->
    <div class="flex w-1/2 flex-grow justify-start">
      <img :src="img_link" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageDetailItemLinksCardComponent",
  props:{
    id:Number,
    title:String,
    category:String,
    link:String,
    img_link:String
  }
});
</script>

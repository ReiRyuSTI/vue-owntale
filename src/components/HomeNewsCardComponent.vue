<template>
  <div class="news m-4 p-4 border-2 bg-gray-50 rounded-md md:hidden">
    <div class="font-title text-xl">Topic News</div>
    <ul class="font-main text-gray-500 text-sm">
      <li class="inline-block w-full border-b-2" v-for="(value, key) in sentense_link" v-bind:key="key">
        {{value.content}}
        {{value.link}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface News{
  link:string,
  content:string
}

export default defineComponent({
  name: "HomeNewsCardComponent",
  props:{
    sentense_link: Array as PropType<Array<News>>
  }
});
</script>

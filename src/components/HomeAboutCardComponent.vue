<template>
    <div
      class="card m-4 bg-gray-50 w-10/12 rounded-md overflow-hidden shadow-lg flex flex-col md:flex-row md:items-center" :class="{'md:flex-row-reverse':reverse_flag}">
      <div class="img h-36 md:w-1/2 md:h-96">
          <img :src="image_url" class="h-full w-full object-contain" alt="">
      </div>
      <div class="content p-2 md:w-1/2 md:max-w-3xl">
          <div class="text-lg md:text-2xl" :class="{'md:text-left':reverse_flag, 'md:text-right':!reverse_flag}">{{title}}</div>
          <div class="text-md text-gray-400" :class="{'md:text-left':reverse_flag, 'md:text-right':!reverse_flag}">{{sub_title}}</div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeAboutCardComponent",
  props:{
    image_url:String,
    title:String,
    sub_title:String,
    reverse_flag:Boolean
  }
});
</script>


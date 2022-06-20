<template>
  <header class="flex flex-col h-48 items-center">
    <div class="h-3/6">
      <img
        src="../assets/logo.png"
        class="h-full w-auto object-contain"
        alt=""
      />
    </div>
    <div
    class="h-2/6 w-full flex justify-center items-center text-4xl font-title"
    >
      owntale
    </div>
    <div class="h-1/6 w-full">
      <ul class="flex justify-center space-x-7 text-2xl font-title">
        <router-link to="/">Home</router-link>
        <li>/</li>
        <router-link to="/page">Page</router-link>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

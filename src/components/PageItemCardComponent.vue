<template>
  <div
    class="
      card
      m-4
      bg-gray-50
      w-10/12
      rounded-md
      overflow-hidden
      shadow-lg
      flex flex-col
      md:max-w-md md:flex-shrink-0
    "
  >
    <div class="img h-74 md:max-w-md md:h-96">
      <img :src="image_link" class="h-full w-full object-cover" alt="" />
    </div>
    <div class="content p-2">
      <div class="text-2xl">{{title}}</div>
      <div class="text-md text-gray-400">
        {{sub_title}}
      </div>
      <div class="my-2">
        <span v-for="(tip, key) in tips_create" :key="key" :class="tip.colorText">
          {{tip.content}}
        </span>
      </div>
      <div class="flex">
        <button class="btn-style-gray-1 flex-grow" @click="onClickPage">詳細ページを見る</button>
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
interface newTips{
  content:string,
  colorText:string
}

export default defineComponent({
  name: "PageItemCardComponent",
  props: {
    id:Number,
    image_link: String,
    title: String,
    sub_title: String,
    tips: Array as PropType<Array<tips>>,
  },
  computed:{
    tips_create(){
      let new_tips:newTips[]=[]
      this.tips?.forEach((item)=>{
        let color_text = ""
        console.log(item);
        if(item.color == 0){
          color_text = "tips-gray"
        }else if(item.color == 1){
          color_text = "tips-sky"
        }else{
          color_text = "tips-red"
        }
        new_tips.push({
          content:item.content,
          colorText:color_text
        })
      })
      return new_tips
    }
  },
  methods:{
    onClickPage :function(){
      this.$router.push({name:"pageDetail", params:{id:this.id}})
    }
  }
});
</script>

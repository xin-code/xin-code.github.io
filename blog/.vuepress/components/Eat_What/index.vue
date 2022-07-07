<template>
  <div>
    <el-button @click="onSelectFood">
      吃什么
    </el-button>
    <span class="food" :key="new Date().getTime()">
      {{isThisFood}}
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      foods:["馄饨","拉面","烩面","热干面","刀削面","油泼面","炸酱面","炒面","重庆小面","米线","酸辣粉","土豆粉","螺狮粉","凉皮儿","麻辣烫","肉夹馍","羊肉汤","炒饭","盖浇饭","卤肉饭","烤肉饭","黄焖鸡米饭","驴肉火烧","川菜","麻辣香锅","火锅","酸菜鱼","烤串","披萨","烤鸭","汉堡","炸鸡","寿司","蟹黄包","煎饼果子","生煎","炒年糕"],
      isThisFood:'',
      timer:null
    }
  },
  mounted(){
    this.random()
  },
  methods:{
    random(){
      if(this.timer) return
      this.timer = setInterval(()=>{
      this.isThisFood = this.foods[Math.floor(Math.random()*this.foods.length)];
      },100);
    },
    onSelectFood(){
      if(this.timer){
      // 销毁定时器
        clearInterval(this.timer)
        this.timer = null
      }else{
        this.random()
      }
    }
  }
}
</script>

<style scoped>
.food {
  margin-left: 20px;
  font-size: 24px;
  line-height: 24px;
}
</style>

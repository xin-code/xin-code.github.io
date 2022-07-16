<template>
  <div>
    <LuckyGrid
      ref="myLucky"
      width="700px"
      height="700px"
      rows="6"
      cols="6"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      @start="onClickStart"
      @end="endCallback"
    />
    <div class="hotfix" @click="hotfixDialog">不显示水墨圈圈 点我</div>
    <Prize v-model:visible="prizeVisible" :trigger="trigger" @onClickAgain="onClickStart" />
  </div>
</template>

<script>
import Prize from './prize.vue'
import { serendipities } from './serendipity.js'
export default {
  components: {
    Prize,
  },
  data () {
    return {
      time: 1,
      prizeVisible: false, // 是否显示奖品弹窗
      trigger:[], // 奇遇
      blocks: [
      { padding: '1px', background: 'gold' },  // 
      { padding: '10px', background: '#FFF' }, // 背景色
      ],
      prizes: [],
      buttons: [
        {
        x: 4, y: 5, col: 2,
        background: '#FFF',
        fonts: [{ text: '开始碰瓷', top: '20%',fontStyle:"jx3",fontColor:"#fff26c",fontSize:"40px" }],
        },
        {
        callback: function () {
        }
      },
      // {
      //   x: 5, y: 5, col: 1,
      //   background: '#e9e8fe',
      //   fonts: [{ text: '碰瓷十连', top: '40%' }],
      //   callback: function () {
      //   }
      // },
      ],
    }
  },
  methods: {
    // 初始化奇遇列表
    getInitPrize(){
      const prizes = []
      let axis = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[0,5],[1,5],[2,5],[3,5]]
      
      let data = serendipities.map(item => {
        return {
          name: item.name,
          range: item.range,
          img: item.img,
        }
      })
      data.forEach((item, index) => {
        prizes.push({
          x: axis[index][0],
          y: axis[index][1],
          range:item.range,
          fonts: [{
             text: item.name,
             fontColor:"transparent",
          }],
          imgs: [
            {
              src: 'https://github.91chi.fun/https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/'+item.img,
              width: 115,
            },
          ],
        })
      })

      this.prizes = prizes.sort(() => Math.random() - 0.5);
    },
    // 点击抽奖按钮会触发star回调
    onClickStart (e, btn) {
      console.log('Lottery start')
      // 清除抽奖结果
      this.trigger = []
      // 开始碰瓷
      this.$refs.myLucky.play()
      setTimeout(_ => {
        // 停止碰瓷
        this.$refs.myLucky.stop()
        console.log('Lottery end')
      }, Math.random()*1000)
    },

    // 碰瓷结束会触发end回调
    endCallback (prize) {
      console.log('debug')
      // 抽奖结束后的回调
      this.trigger.push({
        src: prize.imgs[0].src,
        text:prize.fonts[0].text
      })
      this.prizeVisible = true
    },

    hotfixDialog(){
     this.trigger = []
     this.trigger.push({ 
        "src": "https://github.91chi.fun/https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/再接再厉.webp", 
        "text": "再接再厉" 
      })
       this.prizeVisible = true
    },
  },
  mounted(){
    // 初始化奇遇数据
   this.getInitPrize() 
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.hotfix {
  font-family: "jx3";
  font-size: 45px;
  font-weight: 200;
  color: transparent;
  background-clip: text;
  text-align: center;
  background-image: linear-gradient(#fff26c, gold);
}
</style>
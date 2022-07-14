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
    <Prize v-model:visible="prizeVisible" :trigger="trigger" @onClickAgain="onClickStart" />
  </div>
</template>

<script>
import Prize from './prize.vue'
export default {
  components: {
    Prize,
  },
  data () {
    return {
      time: 1,
      prizeVisible: false, // 是否显示奖品弹窗
      trigger:[], //触发奇遇
      blocks: [
      { padding: '1px', background: 'gold' },  // 
      { padding: '10px', background: '#FFF' }, // 背景色
      ],
      prizes: [
        {x:0, y:0,range:1,fonts:[{text:"白日梦",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/白日梦.webp',width:115}]},
        {x:0, y:3,range:0.1,fonts:[{text:"塞外宝驹",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/塞外宝驹.webp',width:115}]},
        {x:1, y:0,range:1,fonts:[{text:"茶馆奇缘",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/茶馆奇缘.webp',width:115}]},
        {x:5, y:0,range:0.1,fonts:[{text:"黑白路",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/黑白路.webp',width:115}]},
        {x:4, y:0,range:1,fonts:[{text:"故园风雨",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/故园风雨.webp',width:115}]},
        {x:1, y:1,range:1,fonts:[{text:"护佑苍生",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/护佑苍生.webp',width:115}]},
        {x:2, y:1,range:0.1,fonts:[{text:"济苍生",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/济苍生.webp',width:115}]},
        {x:0, y:1,range:1,fonts:[{text:"虎啸山林",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/虎啸山林.webp',width:115}]},
        {x:3, y:1,range:1,fonts:[{text:"旧宴承欢",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/旧宴承欢.webp',width:115}]},
        {x:5, y:1,range:1,fonts:[{text:"凌云梯",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/凌云梯.webp',width:115}]},
        {x:0, y:2,range:0.1,fonts:[{text:"流年如虹",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/流年如虹.webp',width:115}]},
        {x:2, y:2,range:1,fonts:[{text:"平生心愿",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/平生心愿.webp',width:115}]},
        {x:1, y:2,range:1,fonts:[{text:"乱世舞姬",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/乱世舞姬.webp',width:115}]},
        {x:3, y:2,range:0.1,fonts:[{text:"千秋铸",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/千秋铸.webp',width:115}]},
        {x:5, y:2,range:1,fonts:[{text:"劝学记",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/劝学记.webp',width:115}]},
        {x:4, y:2,range:1,fonts:[{text:"清风捕王",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/清风捕王.webp',width:115}]},
        {x:1, y:3,range:1,fonts:[{text:"三尺青锋",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/三尺青锋.webp',width:115}]},
        {x:4, y:1,range:1,fonts:[{text:"炼狱厨神",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/炼狱厨神.webp',width:115}]},
        {x:3, y:0,range:1,fonts:[{text:"扶摇九天",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/扶摇九天.webp',width:115}]},
        {x:3, y:5,range:20,fonts:[{text:"再接再厉",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/再接再厉.webp',width:115}]},
        {x:2, y:3,range:0.1,fonts:[{text:"三山四海",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/三山四海.webp',width:115}]},
        {x:3, y:3,range:1,fonts:[{text:"韶华故",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/韶华故.webp',width:115}]},
        {x:5, y:3,range:1,fonts:[{text:"生死判",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/生死判.webp',width:115}]},
        {x:0, y:4,range:1,fonts:[{text:"天涯无归",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/天涯无归.webp',width:115}]},
        {x:4, y:3,range:1,fonts:[{text:"少年行",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/少年行.webp',width:115}]},
        {x:2, y:4,range:0.1,fonts:[{text:"万灵当歌",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/万灵当歌.webp',width:115}]},
        {x:1, y:4,range:0.1,fonts:[{text:"兔江湖",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/兔江湖.webp',width:115}]},
        {x:4, y:4,range:1,fonts:[{text:"惜往日",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/惜往日.webp',width:115}]},
        {x:2, y:0,range:1,fonts:[{text:"度人心",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/度人心.webp',width:115}]},
        {x:3, y:4,range:1,fonts:[{text:"舞众生",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/舞众生.webp',width:115}]},
        {x:0, y:5,range:1,fonts:[{text:"雪山恩仇",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/雪山恩仇.webp',width:115}]},
        {x:5, y:4,range:0.1,fonts:[{text:"侠行囧途",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/侠行囧途.webp',width:115}]},
        {x:2, y:5,range:0.1,fonts:[{text:"争铸吴钩",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/争铸吴钩.webp',width:115}]},
        {x:1, y:5,range:0.1,fonts:[{text:"阴阳两界",fontColor:"transparent"}],imgs:[{src:'https://raw.githubusercontent.com/xin-code/xin-code.github.io/main/blog/.vuepress/components/JX3_Lottery/picture/阴阳两界.webp',width:115}]},
      ],
      buttons: [
        {
        x: 4, y: 5, col: 2,
        background: '#e9e8fe',
        fonts: [{ text: '开始碰瓷', top: '40%' }],
        callback: function () {
        }
      },
      // {
      //   x: 5, y: 5, col: 1,
      //   background: '#e9e8fe',
      //   fonts: [{ text: '十连碰瓷', top: '40%' }],
      //   callback: function () {
      //   }
      // },
      ],
    }
  },
  methods: {
    // 点击抽奖按钮会触发star回调
    onClickStart (e, btn) {
      // 清除抽奖结果
      this.trigger = []
      // 开始碰瓷
      this.$refs.myLucky.play()
      setTimeout(_ => {
        // 停止碰瓷
        this.$refs.myLucky.stop()
      }, Math.random()*1000)
    },

    // 碰瓷结束会触发end回调
    endCallback (prize) {
      // 抽奖结束后的回调
      this.trigger.push(prize)
      this.prizeVisible = true
    },
  }
}
</script>
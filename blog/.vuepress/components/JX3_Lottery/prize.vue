<template>
  <el-dialog
    :title="title"
    v-model="visible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    style="z-index:9999"
    custom-class="jx3_dialog"
    center
    width="800px"
  >
    <div
      class="dialog-body"
      v-if="visible"
    >
    <div class="center inkCircle">
      <img :src="trigger[0].src">
      <div class="text">{{text}}</div>
    </div>
    </div>
    <div
      slot="footer"
      class="dialog-footer center"
    >
      <el-button @click="close">
        关 闭
      </el-button>
      <el-button
        type="primary"
        @click="onClickAgain">
        再抽一次
      </el-button>
    </div>
  </el-dialog>
</template>

<script>

export default {
  data() {
    return {
      title: "",
      text: ""
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: Array,
      default: ()=>[]
    },
  },
  watch: {
    visible: {
      handler(val) {
        if (val) {
          this.text = "开启奇遇"
          // 延迟变换字体
          setTimeout(()=>{
            this.text = this.trigger[0].text
          },888)
        }
      },
      immediate: true,
    },
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },

    async onClickAgain () {
      this.$emit('update:visible', false)
      this.$emit('onClickAgain')
    },
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.inkCircle {
  background: url("../../public/InkCircle.png") no-repeat;
  background-position: center;
  background-size: 450px 458px;
  text-align: center;
}
img {
  width: 402.5px;
  margin-left: 15px;
  margin-top: 30px;
}
.center {
  text-align: center;
}
.dialog-footer {
  margin-top: 20px;
}
.text {
  margin-top: -15px;
  font-family: "jx3";
  font-size: 45px;
  font-weight: 200;
  color: transparent;
  background-clip: text;
  text-align: center;
  background-image: linear-gradient(#fff26c, gold);
}
</style>

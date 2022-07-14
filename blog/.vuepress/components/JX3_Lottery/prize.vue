<template>
  <el-dialog
    :title="title"
    v-model="visible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    style="z-index:9999"
    center
    width="800px"
  >
    <div
      class="dialog-body"
      v-if="visible"
    >
    <div v-for="item in trigger" class="center">
      <img :src="item.imgs[0].src">
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
        @click="onClickAgain"
      >
        再抽一次
      </el-button>
    </div>
  </el-dialog>
</template>

<script>

export default {
  data() {
    return {
      title: "触发奇遇"
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
  methods: {
    close () {
      this.$emit('update:visible', false)
    },

    async onClickAgain () {
      this.$emit('update:visible', false)
      this.$emit('onClickAgain')
    },
  },

  watch: {
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.center {
  text-align: center;
}
.dialog-footer {
  margin-top: 20px;
}
</style>

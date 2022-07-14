<template>
  <el-dialog
    title="触发奇遇"
    v-model="visible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    append-to-body
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
    async save () {
      this.$emit('update:visible', false)
    },
    
    close () {
      this.$emit('update:visible', false)
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

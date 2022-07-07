<template>
  <div>
    <el-dialog
      title="提示"
      v-model="visible"
      width="30%">
      <span>这将会传递给父组件{'name':'1', 'two':'', 'three':''}</span>

      <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props:{
    visible:{
      type: Boolean,
      required: true
    },
  },
  methods:{
    cancel(){
      this.$emit('update:visible', false)
    },
    save(){
      this.$emit('dialogData',{'name':'1', 'two':'', 'three':''})
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style>
</style>
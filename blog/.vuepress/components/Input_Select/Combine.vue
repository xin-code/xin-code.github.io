<template>
  <div>
    <el-form :model="form" label-width="50x">
      <el-row>
        <el-col :span="12">
          <el-form-item label="名称">
            <el-row>
              <el-col :span="20">
                <el-input v-model="value.name"></el-input>
              </el-col>
              <el-col :span="4">
                <el-button @click="onClickDevice" class="btn">设备</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-col>
        
        <el-col :span="12">
          <el-form-item label="选项">
            <el-select v-model="value.subName" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    
    <Dialog v-model:visible="visible" @dialogData="onSaveDialogData" />
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  components:{
    Dialog,
  },
  props:{
    value:{
      type:Object,
      default:()=>{},
    },
  },
  data(){
    return {
      // 固定选择框
      options:[
        {label:'张三',value:'1'},
        {label:'李四',value:'2'},
      ],
      form:{},
      visible:false,
    }
  },
  watch:{
  },
  methods:{
    onSaveDialogData(item){
      Object.assign(this.value,item)
    },
    onClickDevice(){
      this.visible = true
    }
  }
}
</script>

<style scoped>
.btn {
  margin-left: 5px;
}
</style>
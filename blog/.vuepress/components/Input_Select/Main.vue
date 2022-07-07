<template>
  <div>
    form{{form}}
    <div v-for="(item,index) in form.target" style="width: 1000px;">
      <div :key="index">
        <el-row>
          <el-col :span="12">
            <!-- form区域 -->
            <Combine  :value="form.target[index]" />
          </el-col>
          <el-col :span="12">
            <!-- 删除按钮 -->
            <el-button v-if="index!==0" @click="onClickDelete(index)" class="del"><el-icon><Delete /></el-icon>删除</el-button>
          </el-col>
        </el-row>
        <!-- 新增按钮 -->
        <el-button v-if="index===form.target.length-1" @click="onClickAdd" class="add"><el-icon><Plus /></el-icon>新增</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Combine from './Combine.vue'
export default {
  name: 'App',
  components: {
    Combine,
  },
  data(){
    return{
      form:{
        target:[
          {
          "name": "",
          "subName": ""
          }
        ]
      }
    }
  },
  methods: {
    onClickAdd(){
      this.form.target.push({
          "name": "",
          "subName": ""
      })
    },
    onClickDelete(index){
      console.log('点击删除了第'+index+'个')
      this.form.target.splice(index,1)
    }
  }
}
</script>

<style scoped>
.del {
  margin-left: 10px;
}
.add {
  margin-left: 40px;
}
</style>
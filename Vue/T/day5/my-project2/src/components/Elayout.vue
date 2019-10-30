<template>
  <div>
    <el-row type="flex">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            <Eheader/>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="8">
        <div class="grid-content bg-purple">
            <Easide/>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
            <Etable/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Eheader from './Eheader'
import Easide from './Easide'
import Etable from './Etable'
export default {
    components:{
        Eheader,
        Easide,
        Etable
    }
}
</script>
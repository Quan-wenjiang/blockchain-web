<template>
    <div>
        <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

            <el-form-item label="商品名称" prop="name" >
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>


            <el-form-item label="评价人数" prop="quantity">
                <el-input v-model="ruleForm.quantity"></el-input>
            </el-form-item>

            <el-form-item label="商品图片" >
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="ruleForm.fileList"
                        list-type="picture">

                </el-upload>


            </el-form-item>
          <el-form-item label="代言网红" >
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="ruleForm.fileList2"
                list-type="picture">

            </el-upload>


          </el-form-item>
            <el-form-item >
                <div>
                                    <span class="demonstration">商品评分
                                    <el-rate
                                            v-model="ruleForm.score1"
                                            show-text>
                                        </el-rate>
                                    </span>

                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">返回</el-button>
<!--                <el-button @click="resetForm('ruleForm')">评价</el-button>-->
                <!--            <el-button @click="test('ruleForm')">test</el-button>-->
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
    export default {
        data() {
            return {

                ruleForm: {"name":"bag1","quantity":"200","score1":"4","fileList":[{"name":"bag1","url":"http://localhost:8181/assets/images/bag1.jpg"}],"fileList2":[{"name":"seller1","url":"http://localhost:8181/assets/images/seller1.jpg"}]},
                rules: {

                }
            };
        },
        methods: {
            processFormData (val) {
                let s = JSON.parse(JSON.stringify(val))
                this.ruleForm.name = s.name
                this.ruleForm.seller = s.pwd
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            getFile(item) {
                console.log(item.file)
                this.file = item.file
            },
            submitForm(){
                const _this = this
                _this.$router.push("ProductManage")
            },


            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created() {
          const _this = this
          this.$route.query.id
          axios.get('http://localhost:8181/getgood/'+this.$route.query.id).then(function(resp){
            console.log(resp)
            _this.ruleForm=resp.data
            //     _this.tableData = resp.data.content
            //     _this.pageSize = resp.data.size
            //     _this.total = resp.data.totalElements
          })
        }
    }
</script>

<style scoped>

</style>
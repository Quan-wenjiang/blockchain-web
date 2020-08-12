<template>
    <div>
        <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

            <el-form-item label="商品名称" prop="name" >
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="price" >
                <el-input v-model="ruleForm.price"></el-input>
            </el-form-item>
            <el-form-item label="代言人" prop="author">
                <el-input v-model="ruleForm.author"></el-input>
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
            <el-form-item >
                <div>
                                    <span class="demonstration">商品评分
                                    <el-rate
                                            v-model="ruleForm.score1"
                                            show-text>
                                        </el-rate>
                                    </span>
                    <span class="demonstration">网红评分
                                    <el-rate
                                            v-model="ruleForm.score2"
                                            show-text>
                                        </el-rate>
                                    </span>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">返回</el-button>
                <el-button @click="resetForm('ruleForm')">评价</el-button>
                <!--            <el-button @click="test('ruleForm')">test</el-button>-->
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
    export default {
        data() {
            return {

                ruleForm: {
                    name: '书包1',
                    price:'￥199',
                    author: '网红1',
                    quantity:'58',
                    score1:'1',
                    score2:'2',
                    fileList: [{name: '书包1', url: 'http://localhost:8181/assets/uploadFile/bag1.jpg'}]
                },
                rules: {

                }
            };
        },
        methods: {
            processFormData (val) {
                let s = JSON.parse(JSON.stringify(val))
                this.ruleForm.name = s.name
                this.ruleForm.author = s.pwd
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
        }
    }
</script>

<style scoped>

</style>
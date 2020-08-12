<template>
    <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="商品名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="代言人" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" >
            <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :http-request="getFile"
                    list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
<!--            <el-button @click="test('ruleForm')">test</el-button>-->
        </el-form-item>

    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                fileList: [

                ],
                ruleForm: {
                    name: '',
                    author: ''
                },
                rules: {
                    name: [
                        { required: true, message: '商品名称不能为空', trigger: 'blur' }
                    ],
                    author:[
                        { required: true, message: '代言人不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
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
            // test(formName) {
            //     const fd = new FormData()
            //     fd.append('filename', this.file)
            //     const config = { headers: { 'Content-Type': 'multipart/form-data' }}
            //     axios.post('http://localhost:8181/uploading', fd, config
            //     ).then(response => {
            //         this.$message.success(response.retCode)
            //     })
            // },
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const fd = new FormData()
                        fd.append('filename', this.file)
                        const config = { headers: { 'Content-Type': 'multipart/form-data' }}
                        axios.post('http://localhost:8181/uploading', fd, config
                        ).then(response => {
                            this.$message.success(response.retCode)
                        }),
                        axios.post('http://localhost:8181/book/save',this.ruleForm).then(function(resp){
                            if(resp.data == 'success'){
                                _this.$alert('《'+_this.ruleForm.name+'》添加成功！', '消息', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/BookManage')
                                    }
                                })
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>


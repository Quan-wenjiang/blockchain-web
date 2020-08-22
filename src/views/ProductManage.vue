<template>
    <div>


        <el-input class="mx-auto" v-model="searchVal" style="width:50%; margin-bottom:10px" placeholder="请输入搜索内容" prefix-icon="el-icon-s-opportunity"  />
        <div id="wrap" >
            <table CELLPADDING="50" >
            <td v-for="product in list">
            <div id="div1"><div style="text-indent: 2em">
                <img :src=product.url :alt=product.name width="150"/>
            </div>
                <div style="text-indent: 6em">
                    <small>{{product.name}}</small>
                </div>
                    <div class="item">
                        <a class="imgbox" href="#">
                        </a>
                        <div class="item-extra">

                                <div>
                                    <span class="demonstration">商品评分
                                    <el-rate
                                            v-model="product.score1"
                                            disabled
                                            show-score
                                            text-color="#ff9900"
                                            score-template="{value}">
                                        </el-rate>
                                    </span>

                                </div>
                            <a class="fr" href="">
                                <span class="star-out">
                                    <span class="fl star-in"></span>
                                </span>
                                <span class="fs-10 c-lgray">{{product.sales}}</span>
                            </a>
                        </div>

                        <br/>
                        <el-button type="success" plain @click="handleclick(product.id)">查看信息</el-button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <el-button type="danger" round>购买</el-button>
                    </div></div>
                </td>

                </table>
        </div>


        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="10"
                @current-change="page">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            handleclick(id){
                console.log(id)
                const _this = this
                _this.$router.push({
                  path: "/detail",
                  query:{
                    id:id
                  }
                })
            },

            page(currentPage){
                // const _this = this
                // axios.get('http://localhost:8181/book/findAll/'+(currentPage-1)+'/6').then(function(resp){
                //     console.log(resp)
                //     _this.tableData = resp.data.content
                //     _this.pageSize = resp.data.size
                //     _this.total = resp.data.totalElements
                // })
            }
        },

        data() {

            return {
                list:[
                    {id:1,name:'书包1',url:'http://localhost:8181/assets/uploadFile/bag1.jpg',score1:1.7,score2:2.7,sales:'已售4000'},
                    {id:2,name:'书包1',url:'http://localhost:8181/assets/uploadFile/bag1.jpg',score1:3.5,score2:3.7,sales:'已售5000'},
                    {id:3,name:'书包2',url:'http://localhost:8181/assets/uploadFile/bag2.jpg',score1:4.0,score2:0.7,sales:'已售6000'},
                    {id:4,name:'书包3',url:'http://localhost:8181/assets/uploadFile/bag3.jpg',score1:1.0,score2:1.7,sales:'已售7000'}
                ],
                pageSize:'1',
                total:'11',
                tableData: [{
                    id: 1,
                    name: '解忧杂货店',
                    author: '东野圭吾'
                }, {
                    id: 2,
                    name: '追风筝的人',
                    author: '卡勒德·胡赛尼'
                }, {
                    id: 3,
                    name: '人间失格',
                    author: '太宰治'
                }]
            }
        },

        created() {
            const _this = this
            axios.get('http://localhost:8181/allgoods').then(function(resp){
                console.log(resp)
                _this.list=resp.data
            //     _this.tableData = resp.data.content
            //     _this.pageSize = resp.data.size
            //     _this.total = resp.data.totalElements
            })
        }
    }
</script>
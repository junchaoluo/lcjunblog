<template>
  <div class="home-page">
    <el-card v-for="item in list" :key="item.id" class="box-card" shadow="hover">
      <div class="title">
        <router-link class="title-text" :to="{name:'ArticleInfo',params:{id:item.articleId}}">{{item.title}}</router-link>
      </div>
        <div class="biaoqian">标签：
          <el-tag v-for="tag in item.tagTypeList" :key="tag.tagTypeId" :color="tag.color" size="small">{{tag.tagName}}</el-tag>
        </div>
        <div class="time">创建时间：{{item.creatTime}} 更新时间：{{item.updateTime}}</div>
        <div class="content">{{item.introduct}}</div>
        <div class="clear"></div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
// import store from '../vuex/store'
export default {
  name: 'HomePage',
  data () {
    return {
      list: []
    }
  },
  created () {
    // 获取数据
    this.getArticleData()
  },
  mounted () {
  },
  methods: {
    getArticleData () {
      axios.get('/api/sys/article/getArticleData').then((res) => {
        this.list = res.data.articleList
      }).catch((res) => {
        this.$message.error(res.data.msg)
      })
    }
  }
}
</script>

<style>
.box-card{
  border: 1px solid wheat;
  margin: 2%;
  text-align: left;
  height: 12em;
}
.el-card__body {
    padding: 10px 15px;
}
.home-page .title {
  padding: 0 0 1.8% 0;
  font-weight: bold;
}
.title-text{
  color: #009688;
  font-size: 1.2em;
  text-decoration: none;
}
.title-text:hover{
  text-decoration:underline #009688 ;
}
.el-tag{
  color:white;
}
.home-page .biaoqian,.time {
  font-size: 13px;
  color: rgb(181, 178, 178)
}
.home-page .time {
  padding:0 0  1% 0;
}
.home-page .content {
  color: #6f7279;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow:ellipsis;
  -webkit-box-orient:vertical;
  width: 90%;
  line-height: 2;
  margin: 2% 0;
}
</style>

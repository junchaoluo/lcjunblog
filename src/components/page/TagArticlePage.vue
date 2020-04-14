<template>
  <div class="block">
    <el-timeline :reverse="true">
      <el-timeline-item v-for="item in tagArticleList" :key="item.articleId" :timestamp="item.updateTime"
       icon="el-icon-timer" type="success" size="large" color="#3c8c15"  placement="top">
        <router-link class="articleA" :to="{name:'ArticleInfo',params:{id:item.articleId}}">{{item.title}}</router-link>
      </el-timeline-item>
      <div class="clear"></div>
    </el-timeline>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TagArticlePage',
  data () {
    return {
      tagArticleList: []
    }
  },
  computed: {
    tagId: function () {
      return this.$route.params.tagId
    }
  },
  created () {
    this.getArticleByTagId(this.tagId)
  },
  mounted () {
  },
  methods: {
    getArticleByTagId (tagId) {
      axios.get('/api//sys/article/getArticleByTagId/' + tagId).then((res) => {
        this.tagArticleList = res.data.tagArticleList
      })
    }
  }
}
</script>

<style>
.block{
  margin: 3%;
  line-height: 3;
}
.el-timeline-item__wrapper{
  text-align: left;
}
.articleA{
  color: #3c8c15;
  font-size: 15px;
  font-weight: 600;
}
a:hover{
  text-decoration: underline;
}
</style>

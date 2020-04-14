<template>
  <div class="articleInfo">
    <h2 class="title">{{articleInfo.title}}</h2>
    <div class="time">最近更新时间：{{articleInfo.updateTime}}</div>
    <vue-markdown :source="articleInfo.content" class="content"></vue-markdown>
  </div>
</template>

<script>
import axios from 'axios'
import VueMarkdown from 'vue-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  preEl.forEach((el) => {
    hljs.highlightBlock(el)
  })
}
export default {
  name: 'ArticleInfo',
  data () {
    return {
      articleInfo: {}
    }
  },
  computed: {
    articleId: function () {
      return this.$route.params.id
    }
  },
  components: {
    VueMarkdown
  },
  created () {
    // 查询数据
    this.getArticleInfo(this.articleId)
  },
  mounted () {
    highlightCode()
  },
  updated () {
    highlightCode()
  },
  methods: {
    getArticleInfo: function () {
      axios.get('/api/sys/article/getArticleInfo/' + this.articleId).then((res) => {
        res.data.articleInfo.content = res.data.articleInfo.content.replace(/\\n/gm, '<br/>')
        this.articleInfo = res.data.articleInfo
      })
    }
  }
}
</script>

<style>
.articleInfo{
  text-align: left;
  padding: 1% 3%;
}
.content{
  font-size: 14px;
  line-height: 2;
}
h3{
  color: #409EFF;
}
pre{
  display: block;
  line-height: 1.42857;
  overflow-x: auto;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  padding: 10px;
  margin: 0 0 10px;
  border: 1px solid #DCDFE6;
  -o-border-image: initial;
  border-image: initial;
  border-radius: 4px;
}
code{
  font-family: Consolas,Menlo,Courier,monospace;
  font-size: 12px;
  line-height: 1.78;
}
</style>

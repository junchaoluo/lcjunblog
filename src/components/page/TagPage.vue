<template>
<div>
  <el-card class="box-card" shadow="always">
    <el-tag v-for="tag in tagList" :key="tag.tagTypeId"  :color="tag.color" @click="viewArticle(tag.tagTypeId)">
    {{tag.tagName}}
    </el-tag>
  </el-card>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TagPage',
  data () {
    return {
      tagList: [
        {
          tagTypeId: 1,
          tagName: 'java',
          color: 'Pink'
        },
        {
          tagTypeId: 2,
          tagName: 'web',
          color: 'SkyBlue'
        },
        {
          tagTypeId: 3,
          tagName: 'axure',
          color: 'Cyan'
        },
        {
          tagTypeId: 4,
          tagName: '数据库',
          color: 'LightSalmon'
        }
      ]
    }
  },
  created () {
    this.getTagDataList()
  },
  mounted () {
  },
  methods: {
    getTagDataList () {
      axios.get('/api/sys/tagtype/getTagDataList').then((res) => {
        this.tagList = res.data.tagList
      })
    },
    viewArticle (tagTypeId) {
      console.log(tagTypeId)
      this.$router.push('/TagArticlePage/' + tagTypeId)
    }
  }
}
</script>

<style>
.tag{
  margin: 3%;
}
.el-tag{
  color:white;
  margin: 1%;
}
.el-tag:hover{
  cursor: pointer;
}
</style>

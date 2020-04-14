<template>
  <div>正在开发中...</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PhotoPage',
  data () {
    return {
      photoList: []
    }
  },
  created () {
    this.getPhotoList()
  },
  methods: {
    getPhotoList () {
      axios.get('/api/sys/photo')
    }
  }
}
</script>

<style>
</style>

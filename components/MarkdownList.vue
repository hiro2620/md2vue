<template>
  <ul>
    <li v-for="n in fileNames">{{n}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fileNames: []
    }
  },
  async fetch() {
    this.fileNames = await this.$mdFile.listFileBaseName(this.fileBaseName)
  }
}
</script>
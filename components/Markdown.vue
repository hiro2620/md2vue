<template>
  <article :class="{hide_ruby:!displayRuby}" v-html="$md.render(html)"></article>
</template>

<script>

export default {
  props: {
    fileBaseName: {
      type: String,
      required: true,
    },
    displayRuby: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      markdown: ""
    }
  },
  computed: {
    html() {
      return this.markdown
    },
  },
  async fetch() {
    this.markdown = await this.$mdFile.retrieve(this.fileBaseName)
  }
}
</script>

<style>
.hide_ruby rp,
.hide_ruby rt {
  /* visibility: hidden; */
  visibility: collapse;
}
</style>
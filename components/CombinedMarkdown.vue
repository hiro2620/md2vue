<template>
  <div>
    <section v-for="f in fileBaseNames">
      <h2>{{ f }}.md</h2>
      <Markdown :fileBaseName="f" :displayRuby="displayRuby"></Markdown>
    </section>
  </div>
</template>

<script>
import Markdown from './Markdown.vue';
export default {
  components: { Markdown },
  props: {
    fileBaseNames: {
      type: Array,
      default: () => []
    },
    displayRuby: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<template>
  <main>
    <input type="checkbox" v-model="displayRuby" />
    <Markdown :fileName="'hello'" :displayRuby="displayRuby"></Markdown>
  </main>
</template>

<script>
import Markdown from '~/components/Markdown.vue';
export default {
  name: "IndexPage",
  components: { Markdown },
  data() {
    return {
      displayRuby: {
        type: Boolean,
        default: false,
      }
    }
  }
}
</script>

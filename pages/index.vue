<template>
  <main>
    <section>
      <h2>ふりがなを表示するか</h2>
      <input type="checkbox" v-model="displayRuby" />
    </section>
    
    <section>
      <h2>.mdファイル名の一覧を取得</h2>
      <MarkdownList></MarkdownList>
    </section>
    
    <section>
      <h2>hello.mdを表示</h2>
      <Markdown fileBaseName="hello" :displayRuby="displayRuby"></Markdown>
    </section>
    
    <section>
      <h2>hello2.mdとhello.mdを繋げたものを表示</h2>
      <CombinedMarkdown :fileBaseNames="['hello2', 'hello']" :displayRuby="displayRuby"></CombinedMarkdown>
    </section>
    </main>
</template>

<script>
import Markdown from '~/components/Markdown.vue';
import MarkdownList from '~/components/MarkdownList.vue';
import CombinedMarkdown from '~/components/CombinedMarkdown.vue';
export default {
  name: "IndexPage",
  components: { Markdown, MarkdownList, CombinedMarkdown },
  data() {
    return {
      displayRuby: true
    }
  },
}
</script>

<style scoped>
h2 {
  border-bottom: 1px solid blue;
}

section {
  margin-bottom: 3rem;
}
</style>
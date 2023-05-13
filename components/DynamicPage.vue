<template>
    <div class="dynamic-page">
        <TheArticles :articles="page.articles">
          <TheArticle>
          </TheArticle>
        </TheArticles>

    </div>
</template>

<script setup>
    const props = defineProps(['page']);
</script>

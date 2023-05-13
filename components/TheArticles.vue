<template>
    <div class="the-articles">
      <TheArticle v-for="article in articles" :key="article.id" :article="article" />
      <slot></slot>
    </div>
</template>

<script setup>
    const props = defineProps(['articles']);

</script>

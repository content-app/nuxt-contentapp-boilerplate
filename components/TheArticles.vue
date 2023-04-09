<template>
    <div class="the-articles">
        <TheArticle v-for="article in articles" :key="article.id" :article="article" />
    </div>
</template>

<script setup>
    const props = defineProps(['articles']);

</script>
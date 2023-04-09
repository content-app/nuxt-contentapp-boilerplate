<template>
    <div class="the-articles">
        <div v-for="article in articles" :key="article.id">
            <TheArticle :article="article" />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['articles']);

</script>
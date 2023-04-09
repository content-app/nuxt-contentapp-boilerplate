<template>
    <div class="dynamic-page">
        <TheArticles :articles="page.articles" />
    </div>
</template>

<script setup>
    const props = defineProps(['page']);
</script>
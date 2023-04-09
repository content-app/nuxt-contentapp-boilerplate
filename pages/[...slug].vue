<template>
    <div class="the-page">
        <DynamicPage v-if="data && data.articles" :page="data" />
    </div>
</template>

<script setup>
const route = useRoute()
const { $fetchPageBySlug } = useNuxtApp();
const slug = !!route?.params?.slug ? '/' + route.params.slug.join('/') : '/';
const { data } = await useAsyncData(slug, async () => await $fetchPageBySlug(slug));
</script>
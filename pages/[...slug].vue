<template>
    <div class="the-page">
      <SeoKit />
      <DynamicPage v-if="data && data.articles" :page="data" />
    </div>
</template>

<script setup>
const route = useRoute();
const { $fetchPageBySlug } = useNuxtApp();
const slug = !!route?.params?.slug ? '/' + route.params.slug.join('/') : '/';
const {data} = useAsyncData(slug, async () => await $fetchPageBySlug(slug));

useSeoMeta({
  title: () => data?.value?.seo?.fields?.metaTitle,
  description: () => data?.value?.seo?.fields?.metaDescription,
});
</script>

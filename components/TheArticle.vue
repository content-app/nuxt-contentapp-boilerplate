<template>
    <div class="the-article">
        <div class="the-article__inside">
            <TheModules :modules="article.modules" />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['article']);
    
    console.log(props.article)

</script>
<template>
    <div class="the-article">
        <div class="the-article__inside">
            <TheModules v-if="article && article.modules" :modules="article.modules" />
        </div>
    </div>
</template>

<style lang="scss">

  .the-article {
    margin-top: 40px;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    @include mq($min-width: $desktop) {
      margin-top: 60px;
      margin-bottom: 60px;
    }
  }



</style>

<script setup>
    const props = defineProps(['article']);
</script>

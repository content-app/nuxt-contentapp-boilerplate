<template>
    <div class="module-stage">
        <div class="module-stage__inside">
            {{ fields.title}}

        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['fields']);
</script>
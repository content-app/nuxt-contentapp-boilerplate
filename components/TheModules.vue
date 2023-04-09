<template>
    <div class="the-modules">
    
        <div v-for="module in modules" :key="module.sys.contentType.sys.id">
            <component :is="module.sys.contentType.sys.id" v-bind="module" />    
        </div>
        
    </div>
</template>

<script>
    import ModuleStage from './ModuleStage.vue';
    export default {
        props: {
            modules: {
                type: Array,
                required: true
            }
        },
        components: {
            ModuleStage,
        },
    }
</script>


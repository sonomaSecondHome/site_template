<script setup>
    // event methods
    import { onMounted, provide } from 'vue';

    // state management
    import { initPropertyStore } from './stores/property.store';
    const propertyStore = initPropertyStore();
    provide('propertyStore', propertyStore);

    // routing
    import { RouterView } from 'vue-router'
    import Navbar from './components/Navbar.vue'

    // todo - setup
    onMounted(async () => {
        try {
            // await propertyStore.refresh();
        } catch(err) {
            console.error(err);
        }
    });

</script>

<template>
    <Navbar />
    <RouterView />
</template>

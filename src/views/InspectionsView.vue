<script setup>
    import { inject } from "vue";
    import { storeToRefs } from 'pinia';

    const propertyStore = inject('propertyStore');
    const { inspections } = storeToRefs(propertyStore);
</script>

<template>
    <main class="relative w-full h-full flex flex-col items-center justify-center p-8">
        <p><a :href="inspections" target="_blank">Open in new tab.</a></p>

        <iframe :src="inspections" class="w-full h-full sm:min-h-[750px] min-h-[500px]"></iframe>
    </main>
</template>

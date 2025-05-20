<script setup>
    import { inject } from "vue";
    import { storeToRefs } from 'pinia';

    const propertyStore = inject('propertyStore');
    const { maintenance } = storeToRefs(propertyStore);
</script>

<template>
    <main class="relative w-full h-full flex flex-col items-center justify-center p-8">
        <p><a :href="maintenance" target="_blank">Open in new tab.</a></p>

        <iframe :src="maintenance" class="w-full h-full sm:min-h-[750px] min-h-[500px]"></iframe>
    </main>
</template>

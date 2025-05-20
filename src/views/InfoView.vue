<script setup>
    import { inject } from "vue";
    import { storeToRefs } from 'pinia';

    const propertyStore = inject('propertyStore');
    const { info } = storeToRefs(propertyStore);
</script>

<template>
    <main class="relative w-full h-full flex flex-col items-center justify-center p-8">
        <p><a :href="info" target="_blank">Open in new tab.</a></p>

        <iframe :src="info" class="w-full h-full sm:min-h-[750px] min-h-[500px]"></iframe>
    </main>
</template>

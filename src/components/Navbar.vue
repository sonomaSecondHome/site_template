<script setup>
import { config } from "../config";

const address = config.address;

</script>

<template>
    <header class="p-8">
        <p class="text-center">{{ address }}</p>
        
        <nav class="flex flex-row items-center justify-center gap-[50px] py-8">
            <span>Information</span>
            <span>Maintenance Requests</span>
            <span>Calendar</span>
            <span>Inspections</span>
        </nav>
    </header>
</template>

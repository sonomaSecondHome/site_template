<script setup>
import { config } from "../config";

const address = config.address;

</script>

<template>
    <header class="p-8">
        <p class="text-center bold"><router-link :to="{ path: '/' }">{{ address }}</router-link></p>
        
        <nav class="flex flex-row items-center justify-center gap-[50px] py-8">
            <router-link :to="{ path: '/info' }">Information</router-link>
            <router-link :to="{ path: '/maintenance' }">Maintenance Requests</router-link>
            <router-link :to="{ path: '/calendar' }">Calendar</router-link>
            <router-link :to="{ path: '/inspections' }">Inspections</router-link>
        </nav>
    </header>
</template>

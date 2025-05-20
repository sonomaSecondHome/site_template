<script setup>
import { inject, ref, computed } from "vue";
import { storeToRefs } from 'pinia';
import { useRoute } from "vue-router";

import brand from "@/assets/sonoma-logo.jpg";
import brandDark from "@/assets/sonoma-logo-dark.jpg";

const propertyStore = inject('propertyStore');
const { address, image } = storeToRefs(propertyStore);

const route = useRoute();

const navigation = computed(() => {
    return [
        { name: 'Information', href: '/info', current: (route.path == '/info') },
        { name: 'Maintenance', href: '/maintenance', current: (route.path == '/maintenance') },
        { name: 'Calendar', href: '/calendar', current: (route.path == '/calendar') },
        { name: 'Inspections', href: '/inspections', current: (route.path == '/inspections') },
    ];
});

</script>

<template>
    <p></p>
    <nav class="relative bg-gray-800">
        <div class="relative mx-auto w-full px-2 sm:px-6 lg:px-8"> <!-- max-w-7xl -->
            <div class="relative flex items-center justify-between"> <!-- h-16 -->
                
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button type="button"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <!--
                            Icon when menu is closed.

                            Menu open: "hidden", Menu closed: "block"
                        -->
                        <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <!--
                            Icon when menu is open.

                            Menu open: "block", Menu closed: "hidden"
                        -->
                        <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="relative flex w-full p-4 items-center justify-center sm:items-stretch sm:justify-start gap-[10px]">
                    <!-- property image -->
                    <div class="sm:block hidden ssh-nav-image-gradient absolute left-0 top-0 h-full shrink-0 items-center">
                        <!--
                            <img class="dark:hidden h-full w-auto" :src="brand" alt="Your Company">
                            <img class="dark:block hidden h-full w-auto" :src="brandDark" alt="Your Company">
                            <img class="dark:block hidden h-full w-auto" :src="image" alt="Your Company">
                        -->
                        <img class="h-full w-auto" :src="image" alt="Your Property">
                    </div>

                    <div class="hidden sm:ml-6 sm:block flex flex-col items-center justify-center w-full">
                        <p class="text-center text-white p-8">
                            <router-link :to="{ path: '/' }">{{ address }}</router-link>
                        </p>

                        <div class="flex flex-row items-center justify-center gap-4 space-x-8 w-full">
                            <!--
                                Base: rounded-md px-3 py-2 text-sm font-medium
                                Current: "bg-gray-900 text-white", 
                                Default: "text-gray-300 hover:bg-gray-700 hover:text-white" 
                            -->
                            <Router-link v-for="n of navigation" 
                                :to="n.href" 
                                class="rounded-md px-3 py-2 text-sm font-medium"
                                :class="[ n.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white' ]"
                                :aria-current="n.current"
                                >{{ n.name }}</Router-link>
                        </div>
                    </div>
                </div>
                
                <!--
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button"
                            class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="absolute -inset-1.5"></span>
                            <span class="sr-only">View notifications</span>
                            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </button>

                        -- Profile dropdown --
                        <div class="relative ml-3">
                            <div>
                                <button type="button"
                                    class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span class="absolute -inset-1.5"></span>
                                    <span class="sr-only">Open user menu</span>
                                    <img class="size-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="">
                                </button>
                            </div>

                            --
                                Dropdown menu, show/hide based on menu state.

                                Entering: "transition ease-out duration-100"
                                From: "transform opacity-0 scale-95"
                                To: "transform opacity-100 scale-100"
                                Leaving: "transition ease-in duration-75"
                                From: "transform opacity-100 scale-100"
                                To: "transform opacity-0 scale-95"
                            --
                            <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                                role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                
                                -- Active: "bg-gray-100 outline-none", Not Active: "" --
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-0">Your Profile</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-1">Settings</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1"
                                    id="user-menu-item-2">Sign out</a>
                            </div>
                        </div> 
                    </div>
                -->
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <p class="text-center text-white p-8">
                <router-link :to="{ path: '/' }">{{ address }}</router-link>
            </p>

            <div class="space-y-1 px-2 pb-3 pt-2">
                <!--
                    Base: block rounded-md px-3 py-2 text-base font-medium
                    Current: "bg-gray-900 text-white", 
                    Default: "text-gray-300 hover:bg-gray-700 hover:text-white" 
                -->
                <Router-link v-for="n of navigation" 
                    :to="n.href" 
                    class="block rounded-md px-3 py-2 text-base font-medium"
                    :class="[ n.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white']"
                    :aria-current="n.current"
                    >{{ n.name }}</Router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .ssh-nav-image-gradient {
        mask-image: linear-gradient(to right, rgba(0, 0, 0, 1.0) 50%, transparent 100%);
    }
</style>

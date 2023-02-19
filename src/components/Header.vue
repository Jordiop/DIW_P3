<template>
    <Disclosure as="nav" class="bg-black fixed top-0 z-50 w-full sm:fixed sm:top-0 sm:z-50 sm:w-full sm:bg-opacity-60"
        v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="block h-8 w-auto lg:hidden" src="@/assets/images/home/PCRev.png" alt="logo" />
                        <img class="hidden h-8 w-auto lg:block" src="@/assets/images/home/PCRev.png" alt="logo" />
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                                :class="[item.current ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
                                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                        </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <!-- Aprofitar per carrito -->
                    <button type="button" onclick="window.location.href = '/carrito';"
                        class="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span class="sr-only">Carrito</span>
                        <img class="h-8 w-8 rounded-full"
                            src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG54.png" alt="" />
                    </button>

                    <!-- Profile dropdown -->
                    <Menu as="div" class="relative ml-3">
                        <div>
                            <MenuButton
                                class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="sr-only">Open user menu</span>
                                <img class="h-8 w-8 rounded-full"
                                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem><p id="username">{{ username }}</p></MenuItem>
                                <MenuItem v-if="username == null" v-slot="{ active }">
                                <a href="/login"
                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                    Log In</a>
                                </MenuItem>
                                <MenuItem v-if="username != null" v-slot="{ active }">
                                    <a href="/" @click="logout"
                                        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                        Log Out</a>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import VueCookies from 'vue-cookies'

var navigation = [
    {
        name: 'Home',
        href: '/',
        current: false
    },
    {
        name: 'PC',
        href: '/pc',
        current: false
    },
    {
        name: 'Peripherals',
        href: '/peripherals',
        current: false
    },{
        name: 'About',
        href: '/about',
        current: false
    }
]

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        Bars3Icon,
        XMarkIcon
    },
    methods : {
        logout() {
            VueCookies.remove('user');
            window.location.href = '/';
        }
    },
    setup() {
        for (let i = 0; i < navigation.length; i++) {
            if (navigation[i].href == window.location.pathname) {
                navigation[i].current = true
            }
        }
        return {
            navigation,
        }
    },
    mounted() {
        this.username = VueCookies.get('user');
        console.log(this.username)
    },
    data() {
        return {
            username: ''
        }
    }
}

</script>
<!-- <template>
    <body>
        <header>
            <div class="shadow bg-black bg-opacity-70 w-full fixed top-0 z-50">
                <div class="h-16 mx-auto px-5 flex items-center justify-between">
                    <div class="">
                        <img class="w-32" src="@/assets/images/PCRev.png" alt="logo">
                    </div>
                    <div>
                        <div class="min-h-screen bg-transparent py-6 flex flex-col justify-center sm:py-12 sm:hidden">
                            <div class="flex items-center justify-center p-12">
                                <div class=" relative inline-block text-left dropdown">
                                    <span class="rounded-md shadow-sm"><button
                                            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                            type="button" aria-haspopup="true" aria-expanded="true"
                                            aria-controls="headlessui-menu-items-117">
                                            <span>Menu</span>
                                            <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </button></span>
                                    <div
                                        class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                        <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                            aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117"
                                            role="menu">
                                            <div class="py-1">
                                                <a href="javascript:void(0)" tabindex="0"
                                                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                    role="menuitem">PC</a>
                                                <a href="javascript:void(0)" tabindex="1"
                                                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                    role="menuitem">Builder</a>
                                                <span role="menuitem" tabindex="-1"
                                                    class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                                                    aria-disabled="true">Keyboards</span>
                                                <a href="javascript:void(0)" tabindex="0"
                                                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                    role="menuitem">Mouse</a>
                                                <a href="javascript:void(0)" tabindex="1"
                                                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                    role="menuitem">Builder</a>
                                                <a href="javascript:void(0)" tabindex="2"
                                                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                    role="menuitem">License</a>
                                            </div>
                                            <div class="px-4 py-3">
                                                <p class="text-sm leading-5">Signed in as</p>
                                                <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                                                    tom@example.com
                                                </p>
                                            </div>
                                            <div class="py-1">
                                                <a href="javascript:void(0)" tabindex="3"
                                                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                    role="menuitem">Sign out</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul id="menu" class="hidden sm:flex sm:items-center sm:gap-5">
                            <li><button
                                    class="bg-neutral-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"><a
                                        class="text-white transition-colors" href="/about">PCs</a></button></li>
                            <li><button
                                    class="bg-neutral-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"><a
                                        class="text-white transition-colors" href="/about">Builder</a></button></li>
                            <li><button
                                    class="bg-neutral-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"><a
                                        class="text-white transition-colors" href="/about">Keyboard</a></button></li>
                            <li><button
                                    class="bg-neutral-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"><a
                                        class="text-white transition-colors" href="/about">Mouses</a></button></li>
                            <li><button
                                    class="bg-neutral-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"><a
                                        class="text-white transition-colors" href="/about">Other</a></button></li>
                            <div class="min-h-screen bg-transparent py-6 flex flex-col justify-center sm:py-12">
                                <div class="flex items-center justify-center p-12">
                                    <div class=" relative inline-block text-left dropdown">
                                        <span class="rounded-md shadow-sm"><button
                                                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                                                type="button" aria-haspopup="true" aria-expanded="true"
                                                aria-controls="headlessui-menu-items-117">
                                                <span>Options</span>
                                                <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button></span>
                                        <div
                                            class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                            <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                                aria-labelledby="headlessui-menu-button-1"
                                                id="headlessui-menu-items-117" role="menu">
                                                <div class="px-4 py-3">
                                                    <p class="text-sm leading-5">Signed in as</p>
                                                    <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                                                        tom@example.com
                                                    </p>
                                                </div>
                                                <div class="py-1">
                                                    <a href="javascript:void(0)" tabindex="0"
                                                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                        role="menuitem">Account settings</a>
                                                    <a href="javascript:void(0)" tabindex="1"
                                                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                        role="menuitem">Support</a>
                                                    <span role="menuitem" tabindex="-1"
                                                        class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                                                        aria-disabled="true">New feature (soon)</span>
                                                    <a href="javascript:void(0)" tabindex="2"
                                                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                        role="menuitem">License</a>
                                                </div>
                                                <div class="py-1">
                                                    <a href="javascript:void(0)" tabindex="3"
                                                        class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                                                        role="menuitem">Sign out</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </body>
</template>

<style>
.dropdown:focus-within .dropdown-menu {
    opacity: 1;
    transform: translate(0) scale(1);
    visibility: visible;
}

.menu:focus-within .menu {
    opacity: 1;
    transform: translate(0) scale(1);
    visibility: visible;
}
</style>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menu: false,
        }
    },
    methods: {
        toggleMenu() {
            this.menu = !this.menu
        }
    }
}
</script>
 -->

 <template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
  
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  
  const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Team', href: '/about', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  </script>
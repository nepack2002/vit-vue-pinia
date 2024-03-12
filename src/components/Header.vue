<template>
  <header class="py-6 mx-auto bg-white">
    <nav class="flex items-center relative">
      <div class="logo basis-3/6 text-center text-xl font-semibold">
        CoffeStyle
      </div>
      <ul
        id="tqd-top-menu"
        class="basis-4/6 hidden tqd-topmenu lg:flex lg:items-center justify-center lg:gap-20 uppercase text-sm text-gray-500 font-medium"
      >
        <li>
          <a href="#" class="top-menu-item">
            <router-link to="/">Home</router-link>
          </a>
        </li>
        <li>
          <a href="#" class="top-menu-item">
            <router-link to="/product">Product</router-link>
          </a>
        </li>
        <li>
          <a href="#" class="top-menu-item">
            <router-link to="/about">about</router-link>
          </a>
        </li>
        <li>
          <a href="#" class="top-menu-item">
            <router-link to="/contact">contact</router-link>
          </a>
        </li>
      </ul>
      <ul
        class="lg:basis-0/6 basis-0/6 flex justify-end sm:justify-start items-center ml-5 mr-0 lg:mr-10 sm:ml-28 text-sm text-gray-500 font-medium uppercase"
      >
        <li>
          <a href="#" class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="tqd-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span class="mx-2">cart</span>
            <span class="tql-badge-circle bg-black text-white">10</span>
          </a>
        </li>
        <li>
          <button
            class="bg-blue-500 rounded-2xl hover:bg-blue-300 ml-4 lg:ml-10 p-2 px-5 text-white text-sm"
          >
            <router-link to="/register">LOGIN</router-link>
          </button>
        </li>
      </ul>

      <div
        id="toggle-top-menu-icon"
        class="lg:hidden flex justify-end cursor-pointer px-2 sm:px-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="tqd-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { onMounted } from 'vue';
  onMounted(()=>{
    const topMenu = document.getElementById("tqd-top-menu");
    const toggleTopMenu = document.getElementById("toggle-top-menu-icon");
    // console.log(toggleTopMenu);
    document.addEventListener("click", (e) => {
      if (toggleTopMenu.contains(e.target)) {
        topMenu.classList.toggle("hidden");
        topMenu.classList.toggle("tqd-top-menu");
      } else {
        if (topMenu.classList.contains("tqd-top-menu")) {
          topMenu.classList.remove("tqd-top-menu");
          topMenu.classList.add("hidden");
        }
      }
    });
  })
</script>
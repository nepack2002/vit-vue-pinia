<template>
  <section class="bg-white">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900"
      >
        CONTACT US
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
        Need more information? Have a question? No problem. We're here to help.
      </p>
      <form action="#" class="space-y-8">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900"
            >NAME</label
          >
          <input
            type="name"
            id="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="le bach"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >EMAIL</label
          >
          <input
            type="email"
            id="email"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="nepack2002@gmail.com"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
            >MESSAGE</label
          >
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a message"
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          SEND
        </button>
      </form>
    </div>
  </section>
</template>
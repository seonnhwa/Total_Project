<template>
  <div class="w-6/12">
    <modal-component class="grid justify-items-end" />
    <div class="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 cursor-pointer opacity-50 hover:opacity-100"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>

      <div ref="slider" class="card lg:card-side bg-base-100 shadow-xl w-[900px]">
        <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
        <div class="card-body">
          <h2 class="card-title mb-3">카테고리</h2>
          <p class="text-sm">음료명:</p>
          <p class="text-sm">매장명:</p>
          <p class="text-sm">키워드: <kbd class="kbd">#</kbd></p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 cursor-pointer opacity-50 hover:opacity-100"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  </div>
</template>

<script>
import Modal from '../modal/Modal.vue'
export default {
  components: {
    'modal-component': Modal
  }
}
</script>

<style></style>

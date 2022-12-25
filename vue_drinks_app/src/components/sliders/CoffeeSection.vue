<template>
  <div class="w-6/12">
    <modal-component class="grid justify-items-end" />
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
      <div class="card-body">
        <h2 class="card-title mb-3">카테고리</h2>
        <p class="text-sm">음료명:</p>
        <p class="text-sm">매장명:</p>
        <p class="text-sm">키워드: <kbd class="kbd">#</kbd></p>
        <!-- <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div> -->
      </div>
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

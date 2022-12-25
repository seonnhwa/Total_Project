<template>
  <div class="home">
    <div class="snap-y snap-mandatory h-screen w-screen overflow-scroll scrollbar-hide">
      <app-header v-if="$route.meta.header !== false" class="fixed" />
      <div class="snap-start bg-amber-50 h-screen flex justify-center text-8xl">
        <coffee-section class="mt-32" />
      </div>
      <div class="snap-start bg-sky-100 h-screen flex items-center justify-center text-8xl">
        <!-- <carousel-coffee /> -->
      </div>
      <div class="snap-start bg-violet-50 h-screen flex items-center justify-center text-8xl">
        <!-- <carousel-coffee /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/layout/Header'
import CoffeeSection from '../components/sliders/CoffeeSection'
// import Modal from '../components/modal/Modal'

export default {
  components: {
    'app-header': Header,
    'coffee-section': CoffeeSection
    // 'modal-component': Modal
  }
}
</script>

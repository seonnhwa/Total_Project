<template>
  <div class="w-full">
    <modal-component class="grid justify-items-center" />
    <div class="flex items-center justify-center overflow-x-scroll scrollbar-hide">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 cursor-pointer opacity-50 hover:opacity-100"
        @click="slideLeft"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
      <div class="card card-side bg-base-100 shadow-xl mr-8 w-[900px]">
        <div v-for="(item, index) in DrinkList" :key="index" class="coffeeSection">
          <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
          <div class="card-body">
            <h2 class="card-title mb-3">카테고리</h2>
            <p class="text-sm">음료명:</p>
            <p class="text-sm">매장명:</p>
            <p class="text-sm">키워드: <kbd class="kbd">#</kbd></p>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 cursor-pointer opacity-50 hover:opacity-100"
        @click="slideRight"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  </div>
</template>

<script>
import Modal from '../modal/Modal.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    'modal-component': Modal
  },
  computed: {
    DrinkInsertedResult: state => state.InsertedResult,
    ...mapGetters('Drink', { drink: 'Drink', drinkList: 'DrinkList', drinkResult: 'DrinkInsertedResult' }),
    DrinkList() {
      return this.drink
    },
    insertedResult() {
      return this.drinkResult
    }
  },
  methods: {
    ...mapActions('Drink', ['actDrinkList']),
    slideLeft() {
      this.$refs.cardSlide.scrollLeft = this.$refs.cardSlide.scrollLeft - 900
    },
    slideRight() {
      this.$refs.cardSlide.scrollLeft = this.$refs.cardSlide.scrollLeft + 900
    }
  }
}
</script>

<style></style>

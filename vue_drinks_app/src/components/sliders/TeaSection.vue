<template>
  <div class="w-full">
    <modal-component class="grid justify-items-end" />
    <div class="flex items-center justify-center">
      <div v-for="item in list" :key="item.id" class="carousel carousel-end rounded-box">
        <div class="carousel-item w-[700px]">
          <img class="w-[300px] h-[300px]" :src="`http://192.168.0.62:3001/uploads/${item.img}`" alt="Drink" multiple />
          <div class="card-body bg-base-100">
            <h2 class="card-title mb-3">Tea</h2>
            <p class="text-sm">음료명: {{ item.name }}</p>
            <p class="text-sm">매장명: {{ item.store }}</p>
            <p class="text-sm">
              키워드: <kbd class="kbd">#{{ item.keyword }}</kbd>
            </p>
          </div>
        </div>
      </div>
      <!-- <div v-for="item in list" :key="item.id" class="carousel w-full">
        <div id="slide1" class="carousel-item w-[700px]">
          <img :src="getImg" class="w-[300px]" />
          <div class="card-body">
            <h2 class="card-title mb-3">Tea</h2>
            <p class="text-sm">음료명: {{ item.name }}</p>
            <p class="text-sm">매장명: {{ item.store }}</p>
            <p class="text-sm">
              키워드: <kbd class="kbd">#{{ item.keyword }}</kbd>
            </p>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div> -->

      <!-- <div class="carousel">
        <div class="card lg:card-side bg-base-100 shadow-xl w-[1800px]">
          <figure><img class="img-fluid" :src="getImg" alt="drinkImg" /></figure>
          <div class="card-body">
            <h2 class="card-title mb-3">Tea</h2>
            <p class="text-sm">음료명: {{ item.name }}</p>
            <p class="text-sm">매장명: {{ item.store }}</p>
            <p class="text-sm">
              키워드: <kbd class="kbd">#{{ item.keyword }}</kbd>
            </p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Modal from '../modal/Modal.vue'
// import carousel from 'vue-owl-carousel'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    'modal-component': Modal
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    ...mapGetters('Drink', { drink: 'Drink', DrinkList: 'DrinkList' }),
    // infoData() {
    //   return this.drink
    // },
    drinkList() {
      return this.drink
    },
    getImg() {
      return `${process.env.VUE_APP_SERVER}/uploads/${this.list.img}`
    }
  },
  created() {
    // this.drink = { ...this.drinkList },
    this.$axios
      .get(`/serverApi/drinks/Tea`)
      .then(res => {
        this.list = res.data.rows
        console.log('success', res)
      })
      .catch(error => {
        console.log(error)
      })
    // this.actDrinkList()
  },
  methods: {
    ...mapActions('Drink', ['actDrinkInit', 'actDrinkList']),
    getDrinks(val) {
      console.log('val : ', val)
      this.actDrinkList(val)
    }
  }
}
</script>

<style></style>

<template>
  <div class="w-full">
    <modal-component class="grid justify-items-center" />
    <div id="carouselWrapper" class="mx-36">
      <carousel :items="10" :loop="true" :margin="40" :nav="false" :dots="false" :center="true">
        <!-- :responsive="{
          0: {
            items: 3
          },
          768: {
            items: 2
          }
        }" -->
        <div v-for="(item, index) in list" :key="item.id" :index="index">
          <div class="card lg:card-side bg-base-100 shadow-xl w-[700px]">
            <figure>
              <img class="img-fluid" :src="getImg" alt="drinkImg" />
            </figure>
            <div class="card-body">
              <!-- {{ list }} -->
              <h2 class="card-title mb-3">{{ item.category }}</h2>
              <p class="text-sm">음료명: {{ item.name }}</p>
              <p class="text-sm">매장명: {{ item.store }}</p>
              <p class="text-sm">
                키워드: <kbd class="kbd">#{{ item.keyword }}</kbd>
              </p>
            </div>
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import Modal from '../modal/Modal.vue'
import carousel from 'vue-owl-carousel'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    'modal-component': Modal,
    carousel
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
      return `${process.env.VUE_APP_SERVER}/uploads/${this.drink.img}`
    }
  },
  created() {
    this.$axios
      .get(`/serverApi/drinks/Non-Coffee`)
      .then(res => {
        this.list = res.data.rows
        console.log(res.data.rows)
        console.log('success', res)
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    ...mapActions('Drink', ['actDrinkInit', 'actDrinkList', 'actDrinkInfo']),
    getDrinks(val) {
      console.log('val : ', val)
      this.actDrinkList(val)
    }
  }
}
</script>

<style>
#carouselWrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.carousel {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}
.carousel-text {
  position: absolute;
  bottom: 0;
  margin-left: 20px;
  z-index: 551;
  color: #ffffff;
}
.carousel-bg {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100%;
  background: linear-gradient(transparent, #000000);
  opacity: 0.8;
  z-index: 550;
}
</style>

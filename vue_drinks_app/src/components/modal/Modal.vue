<template>
  <div>
    <label for="my-modal-6" class="btn mb-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    </label>
    <input id="my-modal-6" type="checkbox" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle max-h-full">
      <div class="modal-box max-h-[600px]">
        <h3 class="font-bold text-lg">음료를 등록해주세요!</h3>
        <form ref="formInput" class="input-box flex-col items-center justify-between" @submit.prevent="handleSubmit">
          <div class="form-control w-full max-w-xs mt-6">
            <label class="label">
              <span class="label-text">카테고리</span>
            </label>
            <select v-model="category" :state="categoryState" class="select select-bordered" required>
              <option disabled selected>카테고리를 선택해주세요</option>
              <option>커피</option>
              <option>논커피</option>
              <option>티</option>
            </select>
          </div>
          <div class="form-control w-full max-w-xs text-sm">
            <label class="label">
              <span class="label-text">음료명</span>
            </label>
            <input
              v-model="name"
              :state="nameState"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div class="form-control w-full max-w-xs text-sm">
            <label class="label">
              <span class="label-text">매장명</span>
            </label>
            <input
              v-model="store"
              :state="storeState"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <div class="form-control w-full max-w-xs text-sm">
            <label class="label">
              <span class="label-text">키워드</span>
            </label>
            <input
              v-model="keyword"
              :state="keywordState"
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full max-w-xs"
              required
            />
          </div>
          <!-- <form
            id="sendForm"
            ref="sendForm"
            action=""
            method="post"
            class="form-control text-sm mt-6"
            @submit.prevent="sendPost"
          > -->
          <form id="form-image" method="post">
            <input
              id="img"
              ref="img"
              name="img"
              type="file"
              accept="image/*"
              class="file-input file-input-bordered w-full max-w-xs"
              required
              @change="onFileUpload"
            />
          </form>
        </form>
        <div class="btn-group flex-row gap-3 float-right">
          <div class="modal-action">
            <label for="my-modal-6" class="btn">취소</label>
          </div>
          <div class="modal-action">
            <label for="my-modal-6" class="btn" @click="handleSubmit">등록</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      category: null,
      categoryState: null,
      name: null,
      nameState: null,
      store: null,
      storeState: null,
      keyword: null,
      keywordState: null,
      img: null
    }
  },
  computed: {
    ...mapGetters('Drink', { drink: 'Drink' }),
    drinksList() {
      return this.drink
    }
  },
  methods: {
    ...mapActions('Drink', ['actDrinkInsert', 'actImgUpdate', 'actDrinkUpdate']),
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.categoryState = valid
      this.nameState = valid
      this.storeState = valid
      this.keywordState = valid
      return valid
    },
    onFileUpload(event) {
      // this.img = event.target.files
      // this.img = this.$refs.img.files[0]
      let input = event.target
      if (input.files && input.files[0]) {
        this.drink.img = input.files[0]
        this.actImgUpdate(this.drink)
        console.log(this.img)
      }
    },
    handleSubmit() {
      let drinkData = {
        category: this.category,
        name: this.name,
        store: this.store,
        keyword: this.keyword,
        img: this.img
      }
      const formData2 = new FormData()
      // console.log(this.$refs.img.files[0])
      formData2.append('category', this.category)
      formData2.append('name', this.name)
      formData2.append('store', this.store)
      formData2.append('keyword', this.keyword)
      // formData2.append('img', this.img)
      formData2.append('img', this.$refs.img.files[0])

      console.log(drinkData)
      console.log('test', this.$refs.formInput)
      this.actDrinkInsert(formData2)
      console.log(drinkData)
      this.initForm()
      alert(`등록되었습니다!`)
      // this.$router.go()
    },
    initForm() {
      this.category = ''
      this.name = ''
      this.store = ''
      this.keyword = ''
    }
    // handleSubmit() {
    //   let drinkData = {
    //     category: this.category,
    //     name: this.name,
    //     store: this.store,
    //     keyword: this.keyword,
    //     img: this.img
    //   }
    //   console.log(drinkData)
    //   this.actDrinkInsert(drinkData)
    //   console.log(drinkData)
    //   this.initForm()
    //   alert(`등록되었습니다!`)
    //   // this.$router.go()
    // },
    // initForm() {
    //   this.category = ''
    //   this.name = ''
    //   this.store = ''
    //   this.keyword = ''
    // }
  }
}
</script>

<style></style>

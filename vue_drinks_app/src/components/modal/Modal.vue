<template>
  <div>
    <!-- The button to open modal -->
    <!-- The button to open modal -->
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
        <div class="input-box flex-col items-center justify-between">
          <div class="form-control w-full max-w-xs mt-6">
            <label class="label">
              <span class="label-text">카테고리</span>
            </label>
            <select class="select select-bordered">
              <option disabled selected>카테고리를 선택해주세요</option>
              <option>Coffee</option>
              <option>Non-Coffee</option>
              <option>Tea</option>
            </select>
          </div>
          <div class="form-control w-full max-w-xs text-sm">
            <label class="label">
              <span class="label-text">음료명</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          </div>
          <div class="form-control w-full max-w-xs text-sm">
            <label class="label">
              <span class="label-text">매장명</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          </div>
          <div class="form-control w-full max-w-xs text-sm">
            <label class="label">
              <span class="label-text">키워드</span>
            </label>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
          </div>
          <div class="form-control text-sm mt-6">
            <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
          </div>
        </div>
        <div class="btn-group flex-row gap-3 float-right">
          <div class="modal-action">
            <label for="my-modal-6" class="btn">취소</label>
          </div>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">등록</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

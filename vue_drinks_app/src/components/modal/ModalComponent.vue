<template>
  <div>
    <!-- The button to open modal -->
    <label for="my-modal-3" class="btn">open modal</label>

    <!-- Put this part before </body> tag -->
    <input id="my-modal-3" type="checkbox" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <div class="modal-input">
          <span class="text-xs">메뉴 이름</span>
          <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
          <span class="text-xs">매장명</span>
          <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
          <span class="text-xs">Keywords</span>
          <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

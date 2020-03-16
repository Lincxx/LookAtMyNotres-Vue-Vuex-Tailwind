<template>
  <div class="bg-white w-1/5 mx-4 mb-4 rounded-lg shadow p-4 text-black">
    <h1 class="text-2xl font-semibold text-blue-900">Note Title</h1>
    <p>Content of the Note</p>
    <div class="flex justify-end text-xs">
      <button class="text-green-500 mr-2">Edit</button>
      <button class="text-red-500">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped></style>

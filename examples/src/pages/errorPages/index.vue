<script setup lang="ts">
defineOptions({
  name: "ErrorPage",
});
const router = useRouter();
const errorCode = ref<number>(404);
</script>

<template>
  <div class="flex flex-col items-center gap-20 bg-base-100 py-20">
    Error {{ errorCode }}!
    <p>We're sorry, something is not right, page not found!</p>
    <div class="card-actions justify-end">
      <button @click="router.back()">
        Back !
      </button>
    </div>
  </div>
</template>

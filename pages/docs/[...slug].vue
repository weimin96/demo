<script setup lang="ts">

const route = useRoute()
const { data: page } = await useAsyncData(
    `content-${route.path}`,
    () => queryCollection('docs').path(route.path).first()
)
</script>

<template>
  <div v-if="page">
    <h1> {{ page.title }}</h1>
      <div prose>
        <ContentRenderer
          v-if="page.body"
          :value="page"
        />
      </div>
  </div>
</template>

<style scoped>

</style>

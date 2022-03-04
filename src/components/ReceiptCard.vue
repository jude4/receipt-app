<template>
  <vs-card>
    <header>
      <slot name="title"></slot>
    </header>
    <main>
      <slot name="image"></slot>
      <hr />

      <slot name="description"></slot>
    </main>
  </vs-card>
</template>

<script>
export default {};
</script>

<style></style>

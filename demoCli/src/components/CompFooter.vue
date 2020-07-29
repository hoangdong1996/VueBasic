<template>
  <div>
    <h1>{{titleFooter}}</h1>
  </div>
</template>

<script>
export default {
  name: "comp-footer",
  props: {
    titleFooter: {
      type: String,
      default: "không",
    },
  },
  data() {
    return {
      textFooter: "Hello footer",
    };
  },
};
</script>

<style >
</style>
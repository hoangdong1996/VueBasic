<template>
  <div>
    <header>{{titleHeader}}</header>
    <button v-on:click="changeTitle">Thay đổi từ header</button>
  </div>
</template>

<script>
export default {
  name: "com-header",
  data() {
    return {
      text: "Header",
    };
  },
  methods: {
    changeTitle(e) {
      var data = {
        title: "Đông"
      }
      this.$emit("changeTitleEvent", data);
    },
  },
  props: {
    titleHeader: {
      type: String,
      default: "Giá trị mặc định",
    },
  },
};
</script>
<template>
  <div>
    <p>{{user.id}}, {{user.email}}</p>
    <button v-on:click="handleDelete">Xóa phần tử</button>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods :{
      handleDelete(e) {
          var data = {
            id:this.user.id
          }
          this.$emit('deleteUser', data);
        console.log(e);
      }
  }
};
</script>

<style scoped>
</style>
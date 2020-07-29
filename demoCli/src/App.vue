<template>
  <div id="app">
    <button v-on:click="title = 'Hoàng phương đông'" value>Thay đổi từ aapp</button>

    <CompHeader v-bind:titleHeader="title" v-on:changeTitleEvent="handleChangeTitle"></CompHeader>
    <list-user v-bind:listUser="listUser" v-on:deleteUserEvent="deleteUserEvent"></list-user>
    <CompFooter v-bind:titleFooter="title"></CompFooter>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import CompHeader from "./components/CompHeader";
import CompFooter from "./components/CompFooter";
import ListUser from "./components/ListUser";

export default {
  name: "App",
  components: {
    HelloWorld,
    CompHeader,
    CompFooter,
    ListUser,
  },
  data() {
    return {
      title: "Helllo word",
      listUser: [
        { id: 1, email: "dong@gmail.com", active: true },
        { id: 2, email: "dong@gmail.com", active: true },
        { id: 3, email: "dong@gmail.com", active: true },
        { id: 4, email: "dong@gmail.com", active: false },
        { id: 5, email: "dong@gmail.com", active: false },
        { id: 6, email: "donafffg@gmail.com", active: false },
      ],
    };
  },
  methods: {
    handleChangeTitle(data) {
      this.title = data.title;
    console.log(data);
    },
    deleteUserEvent(data){
        var indexValue = -1;
        this.listUser.forEach((user, idx) => {
          if(user.id === data.id)
          indexValue = idx
        });
        if(indexValue != -1){
          this.listUser.splice(indexValue,1);
        }
      console.log('data trên app',data);
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

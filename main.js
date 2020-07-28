var vueInstance = new Vue({
    el: '#app',
    data: {
      tille: 'Hoang phuong dong',
      url:'https://kipalog.com/posts/Ban-ve-khai-niem-Object-trong-Javascript',
      target : '_blank',
      check: false
    },
    methods: {
      say:function(text){
        return 'hello' + text;
      }
    }
});
console.log(vueInstance);

setTimeout(() => {
  vueInstance.tille = 'dien thoại oppo'
}, 3000);
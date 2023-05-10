const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The final empire",
      author: "Brandon S",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      //   this.title = "words of radiance";
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");

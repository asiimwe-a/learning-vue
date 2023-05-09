const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "The final empire",
      author: "Brandon S",
      age: 45,
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
    handleEvent(e) {
      console.log(e, e.type);
    },
  },
});

app.mount("#app");

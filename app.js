const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "name of the wind", author: "patrick rothfuss" },
        { title: "way of the wind", author: "roy rothfuss" },
        { title: "story of the wind", author: "brandon rothfuss" },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");

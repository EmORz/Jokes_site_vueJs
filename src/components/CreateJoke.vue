<template>
  <div class="container">
    <hr class="hrTitle" size="30" />
    <h2>Форма за съзадаване на виц</h2>
    <br />
    <form @submit.prevent="createJoke" class="user-form">
      <label for="category">Category</label><br />
      <input
        @input="setCatSource"
        :value="catSrc"
        type="text"
        id="category"
        placeholder="Your category of joke .."
      /><br />
      <label for="title">Title</label><br />
      <input
        @input="setTitle"
        :value="titleSrc"
        type="text"
        id="title"
        placeholder="Your title of joke .."
      /><br />
      <label for="description">Description</label><br />
      <textarea
        @input="setDesc"
        :value="descSrc"
        type="text"
        id="description"
        placeholder="Your description of joke .."
      ></textarea
      ><br />
      <label for="author">Author</label><br />

      <input
        @input="setAuthor"
        :value="userEmail"
        type="text"
        id="author"
        placeholder="Your author of joke .."
        readonly
      /><br />
      <label for="date">Date</label><br />
      <input
        @input="setDate"
        :value="dateSrc"
        type="text"
        id="date"
        placeholder="Your date of joke .."
        readonly
      /><br />
      <button type="submit" class="btn">Send</button>
    </form>
    <hr class="hrTitle" size="30" />
  </div>
</template>

<script>
import DBAxios from "@/axios-database";
import postsMixin from "@/mixins/posts-mixin";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    if (localStorage.getItem("email"))
      this.userEmail = localStorage.getItem("email");
  },
  mixins: [postsMixin],
  created() {
    this.getAllPosts();
  },
  data: function () {
    return {
      catSrc: "category value :)",
      titleSrc: "title",
      descSrc: "description ..............",
      authorSrc: this.userEmail,
      dateSrc: new Date(),
      showDescription: false,
      userEmail: "",
    };
  },
  methods: {
    createJoke() {
      const payload = {
        category: this.catSrc,
        title: this.titleSrc,
        description: this.descSrc,
        author: this.userEmail,
        date: this.dateSrc,
        showDescription: this.showDescription,
        returnSecureToken: true,
      };
      DBAxios.post(`posts.json`, payload)
        .then((res) => {
          const { idToken, localId } = res.data;

          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);

          this.$router.push("/home");
        })
        .catch((err) => {
          console.error(err);
        });
    },
    setJokeDescription(e) {
      const value = e.target.value;
      this.imgDescription = value;
    },

    setCatSource(e) {
      const value = e.target.value;
      this.catSrc = value;
    },
    setTitle(e) {
      const value = e.target.value;
      this.titleSrc = value;
    },
    setDesc(e) {
      const value = e.target.value;
      this.descSrc = value;
    },
    setAuthor(e) {
      const value = e.target.value? e.target.value: this.userEmail;
      this.authorSrc = value;
    },
    setDate(e) {
      const value = e.target.value;
      this.dateSrc = value;
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  background-color: #008CBA; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
div.joke {
  margin: 15px;
  border: 1px solid #ccc;
  float: left;
  width: 190px;
}
hr.hrTitle {
  height: 3px;
  color: red;
  background-color: red;
  border: none;
}
hr.hrJokes {
  height: 2px;
  color: rgba(25, 0, 255, 0.555);
  background-color: blue;
  border: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.btnS {
  background-color: palegreen;
} /* Blue */
.btnH {
  background-color: aqua;
} /* Red */
</style>

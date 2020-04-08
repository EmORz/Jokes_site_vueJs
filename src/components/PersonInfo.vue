<template>
  <div>
    <div v-if="isAuth">
      <h3 v-if="countJokes > 0">
        Вие сте автор на: {{ countJokes }}бр. вицове :)
      </h3>
      <div>
        <h3>Регистриран сте с имейл: {{ userEmail }}</h3>
      </div>
      <!-- <h3 v-else>Все още не сте създали виц/вицове :)</h3> -->
      <button @click="loadPersonPosts" class="btn">
        Виж създадените вицове!
      </button>

      <div v-for="(jj, ii) in personPosts" class="joke" :key="ii">
        <p>{{ jj.i.category }}</p>
        <p>{{ jj.i.author }}</p>
        <p>{{ jj.i.title }}</p>
        <p>{{ jj.i.postId }}</p>
        <div>
          <h2>{{ jj.i.title }}</h2>
          <h5>Категория: {{ jj.i.category }}</h5>
        </div>
        <div class="desc">
          <template v-if="jj.i.showDescription">
            <p>
              {{ jj.i.description }}
            </p>
            <p><b>Дата:</b>{{ jj.i.date | formatDate }}</p>
            <p><b>Автор:</b>{{ jj.i.author }}</p>
            <button
              @click="jj.i.showDescription = false"
              class="show-desc btnH"
            >
              Show Less
            </button>
          </template>
          <template v-else>
            <button @click="jj.i.showDescription = true" class="show-desc btnS">
              Show more
            </button>
          </template>
          <template>
            <button @click="remove(jj.i.postId)" class="show-desc btnS">
              Delete!!!
            </button>
          </template>
          <hr class="hrJokes" size="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postsMixin from "@/mixins/posts-mixin";
import axios from "axios";

export default {
  name: "PersonInfo",
  mounted() {
    console.log("EMAIL Person!");
    this.userEmail = localStorage.getItem("email");
  },
  props: {
    isAuth: Boolean,
  },
  mixins: [postsMixin],
  beforeCreate() {
    this.$emit("onAuth", localStorage.getItem("token") !== null);
  },
  created() {
    this.getAllPosts();
  },
  data: function() {
    return {
      catSrc: "category of joke :)",
      titleSrc: "title of joke",
      descSrc: "description ..............",
      authorSrc: "enter author name ...........",
      dateSrc: new Date(),
      users: null,
      isLoading: false,
      userEmail: "",
      personPosts: [],
      countJokes: 0,
    };
  },
  methods: {
    loadPersonPosts() {
      event.preventDefault();
      event.target.disabled = true;

      for (const i of this.posts) {
        if (i.author === this.userEmail) {
          this.personPosts.push({
            i,
            ...this.posts[i],
          });
        }
        this.countJokes = this.personPosts.length;
      }
    },
    remove(postId) {
      axios
        .delete(`https://project-joke-51594.firebaseio.com/${postId}.json`)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #008cba;
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

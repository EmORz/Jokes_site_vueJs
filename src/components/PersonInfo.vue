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
            <button @click="remove(jj.i.postId)" class="show-desc btnDelete">
              Delete!!!
            </button>
          </template>
          <template>
            <button @click="edit(jj.i.postId)" class="show-desc btnDelete">
              Edit!!!
            </button>
          </template>

          <hr class="hrJokes" size="3" />

          <!-- <h5>Категория: {{ editPost[0]["category"] }}</h5> -->
        </div>
      </div>
      <div v-if="check">
        <form @submit.prevent="editJoke(id)" class="user-form">
          <label for="category">Category</label><br />
          <input
            @input="setCatSource"
            :value="editPost[0].category"
            type="text"
            id="category"
            placeholder="Your category of joke .."
          /><br />
          <label for="title">Title</label><br />
          <input
            @input="setTitle"
            :value="editPost[0].title"
            type="text"
            id="title"
            placeholder="Your title of joke .."
          /><br />
          <label for="description">Description</label><br />
          <textarea
            @input="setDesc"
            :value="editPost[0].description"
            type="text"
            id="description"
            placeholder="Your description of joke .."
          ></textarea
          ><br />
          <label for="author">Author</label><br />

          <input
            @input="setAuthor"
            :value="editPost[0].author"
            type="text"
            id="author"
            placeholder="Your author of joke .."
            readonly
          /><br />
          <label for="date">Date</label><br />
          <input
            @input="setDate"
            :value="editPost[0].date"
            type="text"
            id="date"
            placeholder="Your date of joke .."
            readonly
          /><br />

          <button type="submit" class="btn">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import postsMixin from "@/mixins/posts-mixin";
import axiosDb from "@/axios-database";

//import axios from "axios";

export default {
  name: "PersonInfo",
  mounted() {
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
      catSrc: "",
      titleSrc: "pesho",
      descSrc: "description ..............",
      authorSrc: "enter author name ...........",
      dateSrc: new Date(),
      users: null,
      isLoading: false,
      userEmail: this.userEmail,
      personPosts: [],
      countJokes: 0,
      editPost: [],
      check: false,
      showDescription: false,
      id: ""
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
      if (confirm("Потвърдете, че искате да изтриете елемента!")) {
        axiosDb.delete("/posts/" + postId + ".json").then((res) => {
          console.log(res);
        });
      }
    },
    edit(postId) {
      axiosDb.get("/posts/" + postId + ".json").then((res) => {
        this.editPost.push(res.data);
        this.editPost.push(postId);
        this.id = postId;
        this.check = true;
      });
    },
    setTitle(e) {
      const value = e.target.value;
      this.titleSrc = this.editPost[0].title;
      this.titleSrc = value;
    },
    setCatSource(e) {
      const value = e.target.value;
      this.catSrc = this.editPost[0].category;
      this.catSrc = value;
    },
    setDesc(e) {
      const value = e.target.value;
      this.descSrc = this.editPost[0].description;
      this.descSrc = value;
    },
    setAuthor(e) {
      const value = e.target.value;
      this.authorSrc = this.editPost[0].author;
      this.authorSrc = value;
    },
    setDate(e) {
      const value = e.target.value;
      this.dateSrc = this.editPost[0].date;
      this.dateSrc = value;
    },
    editJoke(postId) {
      console.log(postId)
      const payload = {
        category: this.catSrc,
        title: this.titleSrc,
        description: this.descSrc,
        author: this.userEmail,
        date: this.dateSrc,
        showDescription: this.showDescription,
        returnSecureToken: true,
      };

      axiosDb.put("/posts/" + postId + ".json", payload).then((res) => {
        console.log(res);
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
}
.btnDelete {
  background-color: red;
}
.btnH {
  background-color: aqua;
}
</style>

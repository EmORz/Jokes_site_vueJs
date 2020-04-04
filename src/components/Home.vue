<template>
  <div class="container">
    <div>
      <hr class="hrTitle" size="30" />
      <div v-for="(j, i) in posts" class="joke" :key="i">
        <div>
          <h2>{{ j.title }}</h2>
          <h5>Категория: {{ j.category }}</h5>
        </div>
        <div class="desc">
          <template v-if="j.showDescription">
            <p>
              {{ j.description }}
            </p>
            <p><b>Дата:</b>{{ j.date | formatDate }}</p>
            <p><b>Автор:</b>{{ j.author }}</p>
            <button @click="j.showDescription = false" class="show-desc btnH">
              Show Less
            </button>
          </template>
          <template v-else>
            <button @click="j.showDescription = true" class="show-desc btnS">
              Show more
            </button>
          </template>
          <hr class="hrJokes" size="3" />
        </div>
      </div>
    </div>
   
  </div>

 
</template>

<script>
import testMixin from "../mixins/test";
import postsMixin from "@/mixins/posts-mixin";

import axios from "axios";

export default {
  name: "Home",
  props: {
    isAuth: Boolean
  },
  mixins: [testMixin, postsMixin],
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
      isLoading: false
    };
  },
  methods: {
    loadUsers() {
      this.isLoading = true;
      axios.get("users").then(res => {
        if (res.status === 200) {
          this.users = res.data;
        }
        this.isLoading = false;
      });
    }
  },
  computed: {
    count() {
      return this.jokes_bank.length;
    }
  },
  filters: {
    userEditLink(user) {
      return `/edit/${user.id}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
